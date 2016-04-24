function eduoverviewchart() {

    setTimeout(function() {
        $('#eduOverview').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'แผนภาพแสดงเกรดเฉลี่ยของนิสิตวิศวกรรมคอมพิวเตอร์ตั้งแต่ปี ค.ศ.1750'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050', '2050', '2050', '2050', '2050', '2050', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Billions'
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' millions'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268, 5268, 5268, 5268, 5268, 5268, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766, 5268, 5268, 5268, 5268, 5268, 5268]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628, 5268, 5268, 5268, 5268, 5268, 5268]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201, 5268, 5268, 5268, 5268, 5268, 5268]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46, 5268, 5268, 5268, 5268, 5268, 5268]
            }]


        });

    }, 300);




}

function showchart() {
  setTimeout(function() {
    //oon
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
            categories: ['2014/1', '2014/2', '2015/1', '2015/2', '2016/1', '2016/2', '2017/1', '2017/2', '2018/1', '2018/2', '2019/1', '2019/2', '2020/1', '2020/2']
        },

        series: [{
            data: [3.14, 2.97, 3.01, 3.34, 3.43, 3.58]
        }]
    });
  }, 200);
    setTimeout(function() {
      //chi
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
                categories: ['2014/1', '2014/2', '2015/1', '2015/2', '2016/1', '2016/2', '2017/1', '2017/2', '2018/1', '2018/2', '2019/1', '2019/2', '2020/1', '2020/2']
            },

            series: [{
                data: [3.14, 2.97, 3.01, 3.34, 3.43, 3.58]
            }]
        });

    }, 200);
    setTimeout(function() {
//tee
              $('#chart1_5631050421').highcharts({
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
                      categories: ['2014/1', '2014/2', '2015/1', '2015/2', '2016/1', '2016/2', '2017/1', '2017/2', '2018/1', '2018/2', '2019/1', '2019/2', '2020/1', '2020/2']
                  },

                  series: [{
                      data: [3.14, 2.97, 3.01, 3.34, 3.43, 3.58]
                  }]
              });
    }, 200);
    setTimeout(function() {
      //ball
              $('#chart1_5630648621').highcharts({
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
                      categories: ['2014/1', '2014/2', '2015/1', '2015/2', '2016/1', '2016/2', '2017/1', '2017/2', '2018/1', '2018/2', '2019/1', '2019/2', '2020/1', '2020/2']
                  },

                  series: [{
                      data: [3.14, 2.97, 3.01, 3.34, 3.43, 3.58]
                  }]
              });
    }, 200);
    setTimeout(function() {
      //fah
      $('#chart1_5630513521').highcharts({
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
              categories: ['2014/1', '2014/2', '2015/1', '2015/2', '2016/1', '2016/2', '2017/1', '2017/2', '2018/1', '2018/2', '2019/1', '2019/2', '2020/1', '2020/2']
          },

          series: [{
              data: [3.14, 2.97, 3.01, 3.34, 3.43, 3.58]
          }]
      });
    }, 200);
    setTimeout(function() {
      //chin
      $('#chart1_56301063621').highcharts({
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
              categories: ['2014/1', '2014/2', '2015/1', '2015/2', '2016/1', '2016/2', '2017/1', '2017/2', '2018/1', '2018/2', '2019/1', '2019/2', '2020/1', '2020/2']
          },

          series: [{
              data: [3.14, 2.97, 3.01, 3.34, 3.43, 3.58]
          }]
      });
    }, 200);





}
