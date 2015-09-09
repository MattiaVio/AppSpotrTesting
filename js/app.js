(function(){
	var app = angular.module('challenge', []);
	app.controller('findTheOddDuck', function($scope, $http) {
		$http.get("https://api2.appspotr.com/givemeachallenge").success(function (response) {
			$scope.question = response.question;
			$scope.quiz = response.quiz;
			$scope.quizAnswer = findTheOdd(response.quiz);
		});
	});
})();

function findTheOdd(quiz) {
	var words = [], count = [], prev;
		
	quiz.sort();
	for(i=0;i < quiz.length;i++){
		if ( quiz[i] !== prev ) {
				words.push(quiz[i]);
				count.push(1);
		} else {
				count[count.length-1]++;
		}
		prev = quiz[i];
	}
	return words[count.indexOf(1)];
}
