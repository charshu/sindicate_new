function eduoverviewchart() {

    setTimeout(function() {
        $('#eduOverview').highcharts({
            chart: {

            },
            title: {
                text: 'กราฟแสดงเกรดเฉลี่ยของนิสิตภาควิศวคอมพิวเตอร์ จำแนกตามปีการศึกษา'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['2551', '2552', '2553', '2554', '2555', '2556', '2557', '2558', '2559', '2560', '2561', '2562', '2563'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'จำนวน'
                }
              },
            tooltip: {
                shared: true,
                valueSuffix: 'จำนวนคน'
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
                name: 'นิสิตปริญญาตรี',
                data: [3.43, 3.42, 3.33, 3.34, 3.35, 3.36, 3.38, 3.42, 3.38, 3.42 ]
            }, {
                name: 'นิสิตปริญญาโท',
                data: [3.67, 3.65, 3.64, 3.63, 3.65, 3.75, 3.74, 3.72, 3.71, 3.65 ]
            }, {
                name: 'นิสิตปริญญาเอก',
                data: [3.89, 3.79, 3.69, 3.87, 3.89, 3.84, 3.85, 3.86, 3.87, 3.00 ]
            }]


        });
        $('#course1').highcharts({
            title: {
                text: 'กราฟแสดงเกรดเฉลี่ยของนิสิตทั้งหมดในรายวิชา 2110327 Algorithm Design',
                x: -20 //center
            },
            subtitle: {
                text: 'แสดงผลตามปีการศึกษา',
                x: -20
            },
            xAxis: {
                categories: [
                    '2554/1',
                    '2555/1',
                    '2556/1',
                    '2557/1',
                    '2558/1'
                ]
            },
            yAxis: {
                title: {
                    text: 'Grade'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Grade',
                data: [
                    2.89,
                    3.57,
                    3.00,
                    3.14,
                    3.33
                ]
            }, ]
        });

        $('#course2').highcharts({
            title: {
                text: 'กราฟแสดงเกรดเฉลี่ยของนิสิตทั้งหมดในรายวิชา 2110352 Computer System Architectures',
                x: -20 //center
            },
            subtitle: {
                text: 'แสดงผลตามปีการศึกษา',
                x: -20
            },
            xAxis: {
                categories: [
                    '2554/1',
                    '2555/1',
                    '2556/1',
                    '2557/1',
                    '2558/1'
                ]
            },
            yAxis: {
                title: {
                    text: 'Grade'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Grade',
                data: [
                    3.09,
                    3.21,
                    3.44,
                    3.79,
                    3.58
                ]
            }, ]
        });

        $('#course3').highcharts({
            title: {
                text: 'กราฟแสดงเกรดเฉลี่ยของนิสิตทั้งหมดในรายวิชา 2110332 Systems Analysis and Design',
                x: -20 //center
            },
            subtitle: {
                text: 'แสดงผลตามปีการศึกษา',
                x: -20
            },
            xAxis: {
                categories: [
                    '2554/2',
                    '2555/2',
                    '2556/2',
                    '2557/2',
                    '2558/2'
                ]
            },
            yAxis: {
                title: {
                    text: 'Grade'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Grade',
                data: [
                    3.49,
                    2.89,
                    3.88,
                    3.39,
                    3.75
                ]
            }, ]
        });





    }, 300);







}

function numeduchart() {

    setTimeout(function() {
        $('#numeduchart').highcharts({
            chart: {

            },
            title: {
                text: 'แผนภาพแสดงจำนวนบุคลากรทางการศึกษา จำแนกตามปีการศึกษา'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['2551', '2552', '2553', '2554', '2555', '2556', '2557', '2558', '2559', '2560', '2561', '2562', '2563'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'จำนวน'
                }
              },
            tooltip: {
                shared: true,
                valueSuffix: 'จำนวนคน'
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
                name: 'อาจารย์',
                data: [132, 134, 146, 147, 157, 154, 158, 156, 162, 168 ]
            }, {
                name: 'นักวิจัย',
                data: [23, 43, 31, 65, 43, 23, 12, 32, 43, 54 ]
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
