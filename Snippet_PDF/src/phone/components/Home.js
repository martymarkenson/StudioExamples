// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available
//Created by S. Bruegel

$scope.showPopup = function(){
	$ionicPopup.show({
      	title: "PDF",
		template: "<iframe src=app/resources/Uploaded/js/web/viewer.html?file=FAG_SmartCheck_EN.pdf style=\"width:100%; height:100%;\" frameborder=\"0\"></iframe>",
		scope: $scope,
		buttons: [{
                   text: '<b>Close</b>',
          		   type: 'button-positive',
		  onTap: function() {
		  	console.log('PDF opened') }
		}]
	});
};