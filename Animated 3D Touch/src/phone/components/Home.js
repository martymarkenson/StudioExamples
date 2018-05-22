// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

//Toggle visibility on 3d widget from click event
i=0;
$scope.toggleVis = function() {
  if($scope.view.wdg['3DImage-2']['visible']){
    $scope.view.wdg['3DImage-2']['visible']=false;
  }
  else{
    $scope.view.wdg['3DImage-2']['visible']=true;
  }
}

$scope.flashWidget = function(part) {
  console.log("flash");
 /* if(i>10) {
    $scope.stopFlashing();
  }*/
  
  if (i++%2 === 0) {
    $scope.view.wdg['3DImage-2']['visible'] = true;

  }
  else {
    $scope.view.wdg['3DImage-2']['visible'] = false;
  }
  $scope.$applyAsync();    
};

$scope.pulse = function() {
  console.log('pulse');
  console.log('i: ' + i);
  if (i==0) {
    $scope.view.wdg['3DImage-5']['visible'] = false;
    $scope.view.wdg['3DImage-3']['visible'] = true;
  }
  if(i==1) {
  	$scope.view.wdg['3DImage-3']['visible'] = false;
    $scope.view.wdg['3DImage-4']['visible'] = true;
  }
  if(i==2) {
    $scope.view.wdg['3DImage-4']['visible'] = false;
  	$scope.view.wdg['3DImage-5']['visible'] = true;
  }
   i=(i+1)%3; 
  $scope.$applyAsync();    
};


$scope.startFlashing = function() {
  interval = setInterval($scope.flashWidget, 1000);
}

$scope.stopFlashing = function() {
  console.log("stop");
  clearInterval(interval);
  $scope.view.wdg['3DImage-2']['visible'] = false;
  $scope.view.wdg['3DImage-3']['visible'] = false;
  $scope.view.wdg['3DImage-4']['visible'] = false;
  $scope.view.wdg['3DImage-5']['visible'] = false;
}


//interval = setInterval($scope.flashWidget, 1000);
interval = setInterval($scope.pulse, 250);

