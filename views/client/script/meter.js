function meternumpeople(number_stu) {

    setTimeout(function() {
      var allbstu = number_stu.allbstu;
        var allmsstu = number_stu.allmsstu;
          var allphdstu = number_stu.allphdstu;
      if(number_stu.allbstu==0)allbstu=-1;else allbstu=number_stu.allbstu;
        if(number_stu.allmsstu==0)allmsstu=-1;else allmsstu=number_stu.allmsstu;
          if(number_stu.allphdstu==0)allphdstu=-1;else allphdstu=number_stu.allphdstu;
        var numStu = [{
            id: '#b_numStu',
            percent: number_stu.num_bstu / allbstu * 100
        }, {
            id: '#m_numStu',
            percent: number_stu.num_msstu / allmsstu * 100
        }, {
            id: '#d_numStu',
            percent: number_stu.num_phdstu / allphdstu * 100
        }];
        for (var i = 0; i < numStu.length; i++) {
            $(numStu[i].id).empty();
            $(numStu[i].id).circliful({
                animationStep: 5,
                foregroundColor: "#3498DB",
                backgroundColor: "#eee",
                fillColor: 'none',
                foregroundBorderWidth: 15,
                backgroundBorderWidth: 15,
                fontColor: '#aaa',
                percent: numStu[i].percent,
                percentageTextSize: 30,
                textAdditionalCss: 'line-height:10px;',
                text: "นิสิตปกติ",
                textStyle: 'font-size:15px;',
                textColor: '#666'
            });
        }

        var numStuExchange = [{
            id: '#b_numStuExchange',
            percent: number_stu.num_bstu_ex / allbstu * 100
        }, {
            id: '#m_numStuExchange',
            percent: number_stu.num_msstu_ex / allmsstu * 100
        }, {
            id: '#d_numStuExchange',
            percent: number_stu.num_phdstu_ex / allphdstu * 100
        }];
        for (var i = 0; i < numStuExchange.length; i++) {
          $(numStuExchange[i].id).empty();
          $(numStuExchange[i].id).circliful({
                animationStep: 5,
                foregroundColor: "#e600e6",
                foregroundBorderWidth: 15,
                backgroundBorderWidth: 15,
                percent: numStuExchange[i].percent,
                text: "นิสิตแลกเปลี่ยน",
                textStyle: 'font-size:15px;',
                textColor: '#666'
            });
        }
        var numStuRetry = [{
            id: '#b_numStuRetry',
            percent: 30 / 480 * 100
        }, {
            id: '#m_numStuRetry',
            percent: 0 / 480 * 100
        }, {
            id: '#d_numStuRetry',
            percent: 0 / 480 * 100
        }];
        for (var i = 0; i < numStuRetry.length; i++) {
            $(numStuRetry[i].id).empty();
            $(numStuRetry[i].id).circliful({

                foregroundColor: "#8A0708",
                animationStep: 5,
                foregroundBorderWidth: 15,
                backgroundBorderWidth: 15,
                percent: numStuRetry[i].percent,
                text: "นิสิตรีไทล์",
                textStyle: 'font-size:15px;',
                textColor: '#666'
            });
        }
        var numStuDrop = [{
            id: '#b_numStuDrop',
            percent: 20 / 480 * 100
        }, {
            id: '#m_numStuDrop',
            percent: 0 / 480 * 100
        }, {
            id: '#d_numStuDrop',
            percent: 0 / 480 * 100
        }];
        for (var i = 0; i < numStuDrop.length; i++) {
            $(numStuDrop[i].id).empty();
            $(numStuDrop[i].id).circliful({
                animationStep: 5,
                foregroundColor: "#ffcc00",
                foregroundBorderWidth: 15,
                backgroundBorderWidth: 15,
                percent: numStuDrop[i].percent,
                text: "นิสิตดรอป",
                textStyle: 'font-size:15px;',
                textColor: '#666'
            });
        }
        var gendermale = [{
            id: '#male',
            percent: (number_stu.bmale+number_stu.msmale+number_stu.phdmale) / number_stu.allstu * 100
        }];
        for (var i = 0; i < gendermale.length; i++) {
            $(gendermale[i].id).empty();
            $(gendermale[i].id).circliful({
                animationStep: 5,
                foregroundColor: "#6699ff",
                foregroundBorderWidth: 15,
                backgroundBorderWidth: 15,
                percent: gendermale[i].percent,
                text: "ชาย",
                textStyle: 'font-size:15px;',
                textColor: '#666'
            });
        }
        var genderfemale = [{
            id: '#female',
            percent: (number_stu.bfemale+number_stu.msfemale+number_stu.phdfemale) / number_stu.allstu * 100
        }];
        for (var i = 0; i < genderfemale.length; i++) {
            $(genderfemale[i].id).empty();
            $(genderfemale[i].id).circliful({
                animationStep: 5,
                foregroundColor: "#ff66cc",
                foregroundBorderWidth: 15,
                backgroundBorderWidth: 15,
                percent: genderfemale[i].percent,
                text: "หญิง",
                textStyle: 'font-size:15px;',
                textColor: '#666'
            });
        }


    }, 200);


    // $("#numStuSum").circliful({
    //     animationStep: 5,
    //     foregroundBorderWidth: 15,
    //     backgroundBorderWidth: 15,
    //     percent: 480/480*100,
    //       text: "จำนวนนิสิต",
    //       textStyle: 'font-size:11px;'
    // });







}

function meterthesis() {

    setTimeout(function() {
        var thpub = [{
            id: '#m_thpub',
            percent: 50 / 123 * 100
        }, {
            id: '#d_thpub',
            percent: 10 / 23 * 100
        }];
        for (var i = 0; i < thpub.length; i++) {
            $(thpub[i].id).empty();
            $(thpub[i].id).circliful({
                animationStep: 5,
                foregroundColor: "#1a53ff",
                foregroundBorderWidth: 15,
                backgroundBorderWidth: 15,
                percent: thpub[i].percent,
                text: "ระดับชาติ",
                textStyle: 'font-size:15px;',
                textColor: '#666'
            });
        }
        var intpub = [{
            id: '#m_intpub',
            percent: 20 / 123 * 100
        }, {
            id: '#d_intpub',
            percent: 10 / 23 * 100
        }];
        for (var i = 0; i < intpub.length; i++) {
            $(intpub[i].id).empty();
            $(intpub[i].id).circliful({
                animationStep: 5,
                foregroundColor: "#6600cc",
                foregroundBorderWidth: 15,
                backgroundBorderWidth: 15,
                percent: intpub[i].percent,
                text: "ระดับนานาชาติ",
                textStyle: 'font-size:15px;',
                textColor: '#666'
            });
        }


    }, 200);




}

function meternumedu() {

    setTimeout(function() {
      var numedu = [{
          id: '#mt1',
          percent: 409 / 480 * 100
      }, {
          id: '#mt2',
          percent: 40 / 480 * 100
      }, {
          id: '#mt3',
          percent: 31 / 480 * 100
      }];
      for (var i = 0; i < numStu.length; i++) {
          $(numStu[i].id).empty();
          $(numStu[i].id).circliful({
              animationStep: 5,
              foregroundColor: "#3498DB",
              backgroundColor: "#eee",
              fillColor: 'none',
              foregroundBorderWidth: 15,
              backgroundBorderWidth: 15,
              fontColor: '#aaa',
              percent: numStu[i].percent,
              percentageTextSize: 30,
              textAdditionalCss: 'line-height:10px;',
              text: "นิสิตปกติ",
              textStyle: 'font-size:15px;',
              textColor: '#666'
          });
      }


    }, 200);

}
