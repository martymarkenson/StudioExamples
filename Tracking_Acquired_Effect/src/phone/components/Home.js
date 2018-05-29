// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

var x = 0;
var opacity=0;

$scope.mode = false;
$scope.mode2 = true;
$scope.pulseTick = 0.0;
$scope.vmy = -0.4452;
$scope.vdy =  0.7692 - $scope.vmy;

$scope.onModelLoaded = function() {
  $timeout($scope.setupTracking,50);
}								   
// call this function from the tracking Aqcuired event
$scope.toggle = function() {
  $scope.mode = !$scope.mode;
  if ($scope.mode === true) {
    $scope.pulseTick = 0.0;
    var shader = "pulse2;pulse f " + $scope.pulseTick + ";vdy f "+$scope.vdy + ";vmy f " + $scope.vmy;
    $scope.view.wdg['model-1']['shader']    = shader;
    $scope.view.wdg['model-1']['occlude']    = false;

    $timeout($scope.pulse,50);
  } else {
    $scope.view.wdg['model-1']['shader']    = "";
    $scope.view.wdg['model-1']['occlude']    = true;
    if($scope.mode2==true){
      console.log("mode2: " + $scope.mode2);
      $scope.mode2 = false;
    }
  }
}

// run a sine wave over the object.  The min/max height along with the wave are passed as parameters to the shader 
$scope.pulse = function() {
  var shader = "pulse2;pulse f " + $scope.pulseTick + ";vdy f "+$scope.vdy + ";vmy f " + $scope.vmy;
  $scope.view.wdg['model-1']['shader']    = shader;
  
  var nt = $scope.pulseTick + 0.05
  if (nt < 3.14) {
    $scope.pulseTick = nt ;
    $timeout($scope.pulse,50);
  } else {
    // we've finished, turn ourselves off
    $scope.pulseTick = 3.14 ;
    $scope.toggle();
  }
}
