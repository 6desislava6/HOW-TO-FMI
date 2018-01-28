import smtplib
import os


# To sent emails, enable from here: https://myaccount.google.com/lesssecureapps?pli=1
def send_email(recipient):
    gmail_user = os.environ['GMAIL']
    gmail_pwd = os.environ['GMAIL_PSWD']

    FROM = 'How to FMI'
    TO = recipient if type(recipient) is list else [recipient]
    SUBJECT = 'Registration in How to FMI'
    TEXT = 'Congratulations! You registered in our amazing and beautiful system! Have a nice time using it!'

    # Prepare actual message
    message = """From: %s\nTo: %s\nSubject: %s\n\n%s
    """ % (FROM, ", ".join(TO), SUBJECT, TEXT)
    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(gmail_user, gmail_pwd)
        server.sendmail(FROM, TO, message)
        server.close()
        print('successfully sent the mail')
    except:
        print("failed to send mail")
