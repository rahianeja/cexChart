angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
var message  = {
    "lastHours": "10",
    "maxRespArrSize": 10
}
var retunedData = {};
 $http({ url: "https://cex.io/api/price_stats/BTC/USD", method:"POST",data:message}).then(function(resp){
retunedData = resp;

var arrX = [];
for(var i=0;i<10;i++){
  arrX.push(retunedData[i].tmsp);
}
  $scope.labels = arrX;


}, function(err){
  alert("No connectivity!");
});

 $scope.series = ['Series A', 'Series B'];
 $scope.data = [
   [65, 59, 80, 81, 56, 55, 40],
   [28, 48, 40, 19, 86, 27, 90]
 ];
 $scope.onClick = function (points, evt) {
   console.log(points, evt);
 };
 $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
 $scope.options = {
   scales: {
     yAxes: [
       {
         id: 'y-axis-1',
         type: 'linear',
         display: true,
         position: 'left'
       },
       {
         id: 'y-axis-2',
         type: 'linear',
         display: true,
         position: 'right'
       }
     ]
   }
 };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
