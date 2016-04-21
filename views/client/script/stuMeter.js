$(function meterGroup() {
            $('#numPeople').click(function() {

                var numStu = [{
                    id: '#b_numStu',
                    percent: 409 / 480 * 100
                }, {
                    id: '#m_numStu',
                    percent: 40 / 480 * 100
                }, {
                    id: '#d_numStu',
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
                        text: "นิสิตทั้งหมด",
                        textStyle: 'font-size:15px;',
                        textColor: '#666'
                    });
                }
                var numStuExchange = [{
                    id: '#b_numStuExchange',
                    percent: 20 / 480 * 100
                }, {
                    id: '#m_numStuExchange',
                    percent: 5 / 480 * 100
                }, {
                    id: '#d_numStuExchange',
                    percent: 5 / 480 * 100
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

                // $("#numStuSum").circliful({
                //     animationStep: 5,
                //     foregroundBorderWidth: 15,
                //     backgroundBorderWidth: 15,
                //     percent: 480/480*100,
                //       text: "จำนวนนิสิต",
                //       textStyle: 'font-size:11px;'
                // });
            });



            $('#thesisOverview').click(function() {

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
                });


            });
