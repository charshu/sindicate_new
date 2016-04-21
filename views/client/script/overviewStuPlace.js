function overviewStuPlace(province) {

    // Prepare demo province
    var data = [
        {
            "hc-key": "th-ct",
            "value": province.ct
        },
        {
            "hc-key": "th-4255",
            "value": 1
        },
        {
            "hc-key": "th-pg",
            "value": province.pg
        },
        {
            "hc-key": "th-st",
            "value": province.st
        },
        {
            "hc-key": "th-kr",
            "value": province.kr
        },
        {
            "hc-key": "th-sa",
            "value": province.sa
        },
        {
            "hc-key": "th-tg",
            "value": province.tg
        },
        {
            "hc-key": "th-tt",
            "value": province.tt
        },
        {
            "hc-key": "th-pl",
            "value": province.pl
        },
        {
            "hc-key": "th-ps",
            "value": province.ps
        },
        {
            "hc-key": "th-kp",
            "value": province.kp
        },
        {
            "hc-key": "th-pc",
            "value": province.pc
        },
        {
            "hc-key": "th-sh",
            "value": province.sh
        },
        {
            "hc-key": "th-at",
            "value": province.at
        },
        {
            "hc-key": "th-lb",
            "value": province.lb
        },
        {
            "hc-key": "th-pa",
            "value": province.pa
        },
        {
            "hc-key": "th-np",
            "value": province.np
        },
        {
            "hc-key": "th-sb",
            "value": province.sb
        },
        {
            "hc-key": "th-cn",
            "value": province.cn
        },
        {
            "hc-key": "th-bm",
            "value": province.bm
        },
        {
            "hc-key": "th-pt",
            "value": province.pt
        },
        {
            "hc-key": "th-no",
            "value": province.no
        },
        {
            "hc-key": "th-sp",
            "value": province.sp
        },
        {
            "hc-key": "th-ss",
            "value": province.ss
        },
        {
            "hc-key": "th-sm",
            "value": province.sm
        },
        {
            "hc-key": "th-pe",
            "value": province.pe
        },
        {
            "hc-key": "th-cc",
            "value": province.cc
        },
        {
            "hc-key": "th-nn",
            "value": province.nn
        },
        {
            "hc-key": "th-cb",
            "value": province.cb
        },
        {
            "hc-key": "th-br",
            "value": province.br
        },
        {
            "hc-key": "th-kk",
            "value": province.kk
        },
        {
            "hc-key": "th-ph",
            "value": province.ph
        },
        {
            "hc-key": "th-kl",
            "value": province.kl
        },
        {
            "hc-key": "th-sr",
            "value": province.sr
        },
        {
            "hc-key": "th-nr",
            "value": province.nr
        },
        {
            "hc-key": "th-si",
            "value": province.si
        },
        {
            "hc-key": "th-re",
            "value": province.re
        },
        {
            "hc-key": "th-le",
            "value": province.le
        },
        {
            "hc-key": "th-nk",
            "value": province.nk
        },
        {
            "hc-key": "th-ac",
            "value": province.ac
        },
        {
            "hc-key": "th-md",
            "value": province.md
        },
        {
            "hc-key": "th-sn",
            "value": province.sn
        },
        {
            "hc-key": "th-nw",
            "value": province.nw
        },
        {
            "hc-key": "th-pi",
            "value": province.pi
        },
        {
            "hc-key": "th-rn",
            "value": province.rn
        },
        {
            "hc-key": "th-nt",
            "value": province.nt
        },
        {
            "hc-key": "th-sg",
            "value": province.sg
        },
        {
            "hc-key": "th-pr",
            "value": province.pr
        },
        {
            "hc-key": "th-py",
            "value": province.py
        },
        {
            "hc-key": "th-so",
            "value": province.so
        },
        {
            "hc-key": "th-ud",
            "value": province.ud
        },
        {
            "hc-key": "th-kn",
            "value": province.kn
        },
        {
            "hc-key": "th-tk",
            "value": province.tk
        },
        {
            "hc-key": "th-ut",
            "value": province.ut
        },
        {
            "hc-key": "th-ns",
            "value": province.ns
        },
        {
            "hc-key": "th-pk",
            "value": province.pk
        },
        {
            "hc-key": "th-ur",
            "value": province.ur
        },
        {
            "hc-key": "th-sk",
            "value": province.sk
        },
        {
            "hc-key": "th-ry",
            "value": province.ry
        },
        {
            "hc-key": "th-cy",
            "value": province.cy
        },
        {
            "hc-key": "th-su",
            "value": province.su
        },
        {
            "hc-key": "th-nf",
            "value": province.nf
        },
        {
            "hc-key": "th-bk",
            "value": province.bk
        },
        {
            "hc-key": "th-mh",
            "value": province.mh
        },
        {
            "hc-key": "th-pu",
            "value": province.pu
        },
        {
            "hc-key": "th-cp",
            "value": province.cp
        },
        {
            "hc-key": "th-yl",
            "value": province.yl
        },
        {
            "hc-key": "th-cr",
            "value": province.cr
        },
        {
            "hc-key": "th-cm",
            "value": province.cm
        },
        {
            "hc-key": "th-ln",
            "value": province.ln
        },
        {
            "hc-key": "th-na",
            "value": province.na
        },
        {
            "hc-key": "th-lg",
            "value": province.lg
        },
        {
            "hc-key": "th-pb",
            "value": province.pb
        },
        {
            "hc-key": "th-rt",
            "value": province.rt
        },
        {
            "hc-key": "th-ys",
            "value": province.ys
        },
        {
            "hc-key": "th-ms",
            "value": province.ms
        },
        {
            "hc-key": "th-un",
            "value": province.un
        },
        {
            "hc-key": "th-nb",
            "value": province.nb
        }
    ];

    // Initiate the chart
    $('#chartStuPlace').highcharts('Map', {

        title : {
            text : 'แผนภาพแสดงภูมิลำเนาของนิสิตภาควิศวกรรมคอมพิวเตอร์'
        },

        subtitle : {
            text : 'ข้อมูลปีบัญชี 2558'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/th/th-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
}
