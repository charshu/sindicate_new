function modalgpa(){

  $('#more_btn5630237221').click(function() {
      //  alert("reflow");
      setTimeout(function() {

     $('#chart1_5630237221').highcharts({
              title: {
                  text: 'ข้อมูล GPA ตามปีการศึกษา',
                  x: -20 //center
              },
              chart: {

              },
              yAxis: {
                  title: {
                      text: 'GPA'
                  }
              },

              tooltip: {
                  enabled: false
              },

              xAxis: {
                  categories: ['2014/1', '2014/2','2015/1', '2015/2', '2016/1', '2016/2', '2017/1', '2017/2', '2018/1', '2018/2', '2019/1', '2019/2', '2020/1', '2020/2']
              },

              series: [{
                  data: [3.14, 2.97, 3.01, 3.34,3.43, 3.58]
              }]
          });

      }, 300);

      setTimeout(function() {
          var chart =  $("#chart1_5630103921").highcharts();
          chart.reflow();
          chart.redraw();

      }, 500);


  });

  $('#more_btn5630520921').click(function() {
      //  alert("reflow");
      setTimeout(function() {

     $('#chart1_5630520921').highcharts({
              title: {
                  text: 'ข้อมูล GPA ตามปีการศึกษา',
                  x: -20 //center
              },
              chart: {

              },
              yAxis: {
                  title: {
                      text: 'GPA'
                  }
              },

              tooltip: {
                  enabled: false
              },

              xAxis: {
                  categories: ['2014/1', '2014/2','2015/1', '2015/2', '2016/1', '2016/2', '2017/1', '2017/2', '2018/1', '2018/2', '2019/1', '2019/2', '2020/1', '2020/2']
              },

              series: [{
                  data: [3.14, 2.97, 3.01, 3.34,3.43, 3.58]
              }]
          });

      }, 300);

      setTimeout(function() {
          var chart =  $("#chart1_5630520921").highcharts();
          chart.reflow();
          chart.redraw();

      }, 500);


  });
}
