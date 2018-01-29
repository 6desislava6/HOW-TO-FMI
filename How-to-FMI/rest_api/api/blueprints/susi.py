from flask import Blueprint
from flask_restful_swagger_2 import Api
from flask import Flask, request
from flask_restful import Resource
import hashlib
import urllib.request
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import json

susi_bp = Blueprint('susi', __name__)
susi_api = Api(susi_bp, add_api_spec_resource=False, catch_all_404s=True)


class Susi(Resource):
    def subjects_to_json(self,  grades_years):
        all_grades = []
        for year in grades_years:
            year_grades = []
            for subject in year:
                data = {}
                data['subject'] = subject[0]
                data['teacher'] = subject[1]
                data['type'] = subject[2]
                data['completed'] = subject[3]
                data['grade'] = subject[4]
                data['ECTS'] = subject[5]
                year_grades.append(json.dumps(data, ensure_ascii=False))
            all_grades.append(year_grades)
        return all_grades

    def collect_grades(self, user, passwd):
        driver = webdriver.PhantomJS(service_args=['--ignore-ssl-errors=true', '--ssl-protocol=any'])
        driver.get("https://susi.uni-sofia.bg/ISSU/forms/Login.aspx")
        username =  driver.find_element_by_id("txtUserName")
        password = driver.find_element_by_id("txtPassword")

        username.send_keys(user)
        password.send_keys(passwd)

        driver.find_element_by_name("btnSubmit").click()
        driver.find_element_by_id("HeaderMenu1_btnCheckup").click()
        driver.find_element_by_id("btnExamsSemesters").click()
        driver.find_element_by_id("Report_Exams1_chkTaken").click()
        driver.find_element_by_id("Report_Exams1_chkNotTaken").click()
        driver.find_element_by_id("Report_Exams1_btnReportExams").click()

        grades_years=[]
        for i in [2, 8, 14, 20]:
            table = driver.find_element_by_xpath("//form//table[7]//tr[{}]/td//table".format(i))
            rows = []

            for row in table.find_elements_by_xpath(".//tr"):
                rows.append([tr.text for tr in row.find_elements_by_xpath(".//td[@class='messageExtraText'][text()]")])
            grades_years.append(list(filter(lambda row: len(row) == 6 and 'Предмет' not in row, rows)))
        return self.subjects_to_json(grades_years)

    def get(self, user, password):
        return self.collect_grades(user, password)

susi_api.add_resource(Susi, '/susi/<string:user>/<string:password>')