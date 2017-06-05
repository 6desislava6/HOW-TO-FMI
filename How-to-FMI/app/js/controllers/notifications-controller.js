'use strict';
angular.module('htfmi')
    .controller('NotificationsController', ['$scope', function ($scope) {
        $scope.notifications = _.flatten(_.times(6, () => [
        { ref: '#!/', image: 'new-comment.png', content: 'Десислава Цветкова, Тонка Желева, Кремена Василева и още 17 други потребители коментираха инструменти за управление на изискванията в курса АСИ.', day: ['преди', '1', 'ден']},
        { ref: '#!/', image: 'new-post.png', content: 'Атанас Георгиев добави новина в курса Проектиране на човеко-машинен интерфейс.', day: ['преди', '2', 'ден']},
        { ref: '#!/', image: 'new-comment.png', content: 'Атанас Георгиев коментира задание в курса Проектиране на човеко-машинен интерфейс.', day: ['преди', '3', 'ден']}
      ]), true);

    
}]);