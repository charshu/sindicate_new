


angular.module('ngModalChart',[])
.directive('modalChart',function(){
  return {
    scope:{
      source:"="
    },
    restrict:"E",
    link:function(scope,elem,attr){

      // Create new Hightcharts Element
      
      var container = document.createElement('div');
      $(container).highcharts(scope.source.chartdata);
      angular.element(elem).append(container)
      scope.$watch('source',function(){
        //redraw chart if source change
          $(container).highcharts(scope.source.chartdata);
      },true)
    },
    templateUrl:"./ngModelChart.html"
  }
})
