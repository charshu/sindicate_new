function pollInerest() {
    $('#poll1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height:500,
            width:800
        },
        title: {
            text: 'อันดับความนิยมของภาษาคอมพิวเตอร์'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Language',
            colorByPoint: true,
            data: [{
                name: 'C++',
                y: 200/408*100
            }, {
                name: 'Python',
                y: 100/408*100,
                sliced: true,
                selected: true
            }, {
                name: 'Javascript',
                y: 50/408*100
            }, {
                name: 'Java',
                y: 40/408*100
            }, {
                name: 'Ruby on rails',
                y: 35/408*100
            }, {
                name: 'PHP',
                y: 75/408*100
            }]
        }]
    });

    $('#poll2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height:500,
            width:800
        },
        title: {
            text: 'อันดับความนิยมของสายการทำงาน'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Jobs',
            colorByPoint: true,
            data: [{
                name: 'Programmer',
                y: 30.21
            }, {
                name: 'Web Developer',
                y: 26.12,
                sliced: true,
                selected: true
            }, {
                name: 'System Analyst',
                y: 24.03
            }, {
                name: 'Software Tester',
                y: 10.38
            }, {
                name: 'Network Administrator',
                y: 4.77
            }, {
                name: 'Other',
                y: 1.11
            }]
        }]
    });
}
