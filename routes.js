// app/routes.js
var path = require('path');
var mysql = require("mysql");
var bodyParser = require('body-parser');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "sindicate2"
});


module.exports = function(app, passport) {
    // query zone


    con.connect(function(err) {
        if (err) {
            console.log(err);
            console.log('Error connecting');
            return;
        }
        console.log('Connection established');
    });
    // con.query('SELECT AVG(gpa) as avg_gpa FROM b_stu ', function(err, res) {
    //     if (err) console.log(err);
    //     else {
    //         for (var i = 0; i < res.length; i++) {
    //             console.log('[LOG] GPA AVG: ' + res[i].avg_gpa);
    //         }
    //
    //
    //     }
    // });
    var num_male, bmale, bfemale, msmale, msfemale, phdmale, phdfemale;
    con.query('SELECT * FROM b_stu NATURAL join stuid NATURAL join student where gender = \'M\'', function(err, res) {
        if (err) console.log(err);
        else {
            bmale = res.length;
            // console.log('[LOG] bmale : ' + res.length);
        }
    });
    con.query('SELECT * FROM ms_stu NATURAL join stuid NATURAL join student where gender = \'M\'', function(err, res) {
        if (err) console.log(err);
        else {
            msmale = res.length;

        }
    });
    con.query('SELECT * FROM phd_stu NATURAL join stuid NATURAL join student where gender = \'M\'', function(err, res) {
        if (err) console.log(err);
        else {
            phdmale = res.length;

        }
    });
    con.query('SELECT * FROM b_stu NATURAL join stuid NATURAL join student where gender = \'F\'', function(err, res) {
        if (err) console.log(err);
        else {
            bfemale = res.length;

        }
    });
    con.query('SELECT * FROM ms_stu NATURAL join stuid NATURAL join student where gender = \'F\'', function(err, res) {
        if (err) console.log(err);
        else {
            msfemale = res.length;

        }
    });
    con.query('SELECT * FROM phd_stu NATURAL join stuid NATURAL join student where gender = \'F\'', function(err, res) {
        if (err) console.log(err);
        else {
            phdfemale = res.length;

        }
    });

    // query student's status
    var num_bstu, num_msstu, num_phdstu, num_bstu_ex, num_msstu_ex, num_phdstu_ex;
    con.query('SELECT * FROM b_stu NATURAL join stuid si where si.enter_academic_year=2015 and si.enter_term=2', function(err, res) {
        if (err) console.log(err);
        else {
            num_bstu = res.length;

        }
    });
    con.query('SELECT * FROM ms_stu NATURAL join stuid si where si.enter_academic_year=2015 and si.enter_term=2', function(err, res) {
        if (err) console.log(err);
        else {
            num_msstu = res.length;

        }
    });
    con.query('SELECT * FROM phd_stu NATURAL join stuid si where si.enter_academic_year=2015 and si.enter_term=2', function(err, res) {
        if (err) console.log(err);
        else {
            num_phdstu = res.length;

        }
    });
    con.query('SELECT * FROM b_stu natural join stuid natural join exchange where datediff(exchange.end,STR_TO_DATE(\'05/01/2015\', \'%m/%d/%Y\'))>0 and exchange.in_out =\'I\'', function(err, res) {
        if (err) console.log(err);
        else {
            num_bstu_ex = res.length;

        }
    });
    con.query('SELECT * FROM ms_stu natural join stuid natural join exchange where datediff(exchange.end,STR_TO_DATE(\'05/01/2015\', \'%m/%d/%Y\'))>0 and exchange.in_out =\'I\'', function(err, res) {
        if (err) console.log(err);
        else {
            num_msstu_ex = res.length;

        }
    });
    con.query('SELECT * FROM phd_stu natural join stuid natural join exchange where datediff(exchange.end,STR_TO_DATE(\'05/01/2015\', \'%m/%d/%Y\'))>0 and exchange.in_out =\'I\'', function(err, res) {
        if (err) console.log(err);
        else {
            num_phdstu_ex = res.length;

        }
    });



    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({
        extended: true
    })); // support encoded bodies

    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });
    app.get('/test', function(req, res) {
        res.render('client/index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        if (req.isAuthenticated())
            res.redirect('/profile');

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', {
            message: req.flash('loginMessage')
        });
    });
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
            successRedirect: '/home', // redirect to the secure profile section
            failureRedirect: '/login', // redirect back to the signup page if there is an error
            failureFlash: true // allow flash messages
        }),
        function(req, res) {
            console.log();

            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =========================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    app.get('/editProfile', function(req, res) {
        res.render('client/editProfile.ejs');

    });
    var objprovince = {
        ct: 10,
        bk: 4,
        nt: 26,
        cb: 70,
        ur: 18,
        kk: 17,
        cm: 20,
        br: 18,
        ud: 22,
        ns: 16,
        ss: 16,
        sk: 15,
        sr: 14,
        re: 13,
        sm: 13,
        cr: 12,
        nb: 5,
        sn: 11,
        cp: 11,
        pt: 11,
        nk: 10,
        su: 10,
        ph: 10,
        kl: 10,
        ms: 10,
        np: 9,
        kr: 4,
        rt: 8,
        ps: 8,
        sp: 8,
        pa: 8,
        nw: 8,
        lb: 8,
        lg: 7,
        kp: 7,
        no: 6,
        nr: 6,
        nf: 5,
        cc: 7,
        pu: 7,
        ry: 7,
        tg: 6,
        sb: 6,
        tk: 6,
        si: 6,
        sa: 6,
        pc: 5,
        so: 5,
        ys: 5,
        yl: 5,
        na: 12,
        cn: 5,
        py: 5,
        pr: 5,
        pe: 5,
        kn: 12,
        ut: 4,
        pl: 5,
        le: 6,
        bm: 160,
        pk: 4,
        ac: 4,
        md: 3,
        cy: 3,
        un: 3,
        st: 3,
        at: 3,
        mh: 3,
        pg: 2,
        nr: 2,
        tt: 2,
        sg: 2,
        sh: 2,
        rn: 2,
        pi: 2,
        ln: 4,
        nn: 4,
        pb: 4
    }
    var username, typeuser, myprofile,profileEdus,university_datas;
    var sid, name, surname, ssn, gender, addr, tel, format_birthday, email, nationality, is_alumni,
        parent_name, parent_surname, parent_tel, latitude, longitude;
    app.get('/home', isLoggedIn, function(req, res) {

        function doSomething(callback) {
            con.query('SELECT *,DATE_FORMAT(student.birthday,\'%d-%m-%Y\') as format_birthday FROM stuid natural join student natural join users WHERE stuid.ssn=student.ssn and stuid.sid = users.username and sid=\'' + req.user.username + '\'', function(err, res) {

                if (err) console.log(err);
                else {
                  con.query('SELECT *,DATE_FORMAT(graduate_date,\'%d-%m-%Y\') as format_graduate_date FROM university natural join degree WHERE degree.ssn = \''+res[0].ssn+'\'', function(err, res2) {
                      if (err) console.log(err);
                      else {
												con.query('SELECT uid as id,name as text  FROM university ', function(err, res3) {
													if(err)console.log(err);
													else{
														profileEdus = res2;
														university_datas = res3;
														username = res[0].username;
														typeuser = res[0].typeuser;
															console.log("username: "+req.user.username);
														//  console.log("latitude: "+res[0].latitude);

														sid = res[0].sid;
														name = res[0].name;
														surname = res[0].surname;
														ssn = res[0].ssn;
														gender = res[0].gender;
														addr = res[0].addr;
														tel = res[0].tel;
														format_birthday = res[0].format_birthday;
														email = res[0].email;
														nationality = res[0].nationality;
														is_alumni = res[0].is_alumni;
														parent_name = res[0].parent_name;
														parent_surname = res[0].parent_surname;
														parent_tel = res[0].parent_tel;
														latitude = res[0].latitude;
														longitude = res[0].longitude;

													}
													callback();
													//console.log("ssn:"+res[0].ssn +"uniname: " + JSON.stringify(university_datas));
												});
                      }
                  });
                }
            });
        }

        function response() {
            // I'm the callback
            res.render('client/home.ejs', {
                username: username,
                typeuser: typeuser,
                msg: 'ยินดีต้อนรับ !',
                profile: {
                    sid: sid,
                    name: name,
                    surname: surname,
                    ssn: ssn,
                    gender: gender,
                    addr: addr,
                    tel: tel,
                    birthday: format_birthday,
                    email: email,
                    nationality: nationality,
                    is_alumni: is_alumni,
                    parent_name: parent_name,
                    parent_surname: parent_surname,
                    parent_tel: parent_tel,
                    latitude: latitude,
                    longitude: longitude


                },
                profileEdus: profileEdus,
								university_datas:university_datas,
                thesis: {
                    thesisTH: 'การออกแบบและวิเคราะห์อัลกอริทึมในการปิ้งลูกชิ้น',
                    thesisEN: 'Design and Analysis of Algorithm in Grilling LookChin',
                    advisor: 'ศ.ดร.บุญเสริม กิจศิริกุล',
                    coadvisor: 'ผศ.ดร.โปรดปราน บุณยพุกกณะ',
                    scholarship: 'ทุนอุดหนุนการวิจัย พัฒนาและวิศวกรรมภาครัฐ ด้านอิเล็กทรอนิกส์ คอมพิวเตอร์โทรคมนาคมและสารสนเทศ',
                    award: 'รางวัลระบบเอื้ออำนวยการประกอบอาหารเชิงอุตสาหกรรม',
                    thconference: 'การออกแบบและวิเคราะห์อัลกอริทึมในการปิ้งลูกชิ้น',
                    intconference: 'การออกแบบและวิเคราะห์อัลกอริทึมในการปิ้งลูกชิ้น',
                    thpub: 'การออกแบบและวิเคราะห์อัลกอริทึมในการปิ้งลูกชิ้น',
                    intpub: 'Design and Analysis of Algorithm in Grilling LookChin'

                },
                province: objprovince,
                internship: {
                    name: 'CP ALL',
                    start: '23/05/2016',
                    end: '23/07/2016',
                    impression: 'ก็ดี',
                    rate: '2'

                },
                furtheredu: {
                    name: 'CP ALL',
                    start: '23/05/2016',
                    end: '23/07/2016',
                    impression: 'ก็ดี',
                    rate: '5'

                },
                number_stu: {
                    bmale: bmale,
                    bfemale: bfemale,
                    msmale: msmale,
                    msfemale: msfemale,
                    phdmale: phdmale,
                    phdfemale: phdfemale,
                    num_bstu: num_bstu,
                    num_msstu: num_msstu,
                    num_phdstu: num_phdstu,
                    num_bstu_ex: num_bstu_ex,
                    num_msstu_ex: num_msstu_ex,
                    num_phdstu_ex: num_phdstu_ex,
                    allstu: bmale + msmale + phdmale + bfemale + msfemale + phdfemale,
                    allbstu: num_bstu + num_bstu_ex,
                    allmsstu: num_msstu + num_msstu_ex,
                    allphdstu: num_phdstu + num_phdstu_ex


                }


            });
            console.log("[LOG] username: " + username + "typeuser : " + typeuser);
        }
        // end res
        doSomething(response);
    });




    app.post('/update1', function(req, res) {
        // var ssn = req.body.ssn,name = req.body.name,surname=req.body.surname,gender=req.body.gender,addr=req.body.addr
        // ,tel=req.body.tel,birthday=req.body.birthday,email=req.body.email,nationality=req.body.nationality,is_alumni=req.body.is_alumni
        //
        //console.log("testt"+req.body.gender);
        var gender;
        if (req.body.gender === 'male') gender = "M";
        else gender = "F";

        var is_alumni;
        if (req.body.is_alumni === 'yes') is_alumni = "Y";
        else is_alumni = "N";
        con.query('UPDATE `sindicate2`.`student` SET `ssn` = \'' + req.body.ssn + '\', `name` = \'' + req.body.name + '\', `surname` = \'' + req.body.surname + '\', `gender` = \'' + gender + '\', `tel` = \''+req.body.tel+'\', `birthday` = DATE_FORMAT(STR_TO_DATE(\''+req.body.birthday+'\',\'%d/%m/%Y\'),\'%Y,%m,%d\'), `email` = \'' + req.body.email + '\', `nationality` = \'' + req.body.nationality + '\', `is_alumni` = \'' + is_alumni + '\', `parent_name` = \'' + req.body.parent_name + '\', `parent_surname` = \'' + req.body.parent_surname + '\', `parent_tel` = \'' + req.body.parent_tel + '\' WHERE `student`.`ssn` = \'' + req.body.ssn + '\'', function(err, res) {
            if (err) console.log(err);
            else {
                console.log("[LOG] UPDATE PROFILE COMPLETED! ssn: " + req.body.ssn + "gender :"+ req.body.gender);

            }

        });
        res.redirect('/home');

    });
    app.post('/update2', function(req, res) {
        // var ssn = req.body.ssn,name = req.body.name,surname=req.body.surname,gender=req.body.gender,addr=req.body.addr
        // ,tel=req.body.tel,birthday=req.body.birthday,email=req.body.email,nationality=req.body.nationality,is_alumni=req.body.is_alumni
        //

        con.query('UPDATE `sindicate2`.`student` SET  `addr` = \'' + req.body.addr + '\' WHERE `student`.`ssn` = \'' + req.body.ssn2 + '\'', function(err, res) {
            if (err) console.log(err);
            else {
                console.log("[LOG] UPDATE PROFILE COMPLETED! ssn: " + req.body.ssn2);

            }

        });
        res.redirect('/home');

    });
    app.post('/update3', function(req, res) {
        // var ssn = req.body.ssn,name = req.body.name,surname=req.body.surname,gender=req.body.gender,addr=req.body.addr
        // ,tel=req.body.tel,birthday=req.body.birthday,email=req.body.email,nationality=req.body.nationality,is_alumni=req.body.is_alumni
        //

        con.query('UPDATE `sindicate2`.`student` SET `latitude` = \'' + req.body.latitude + '\', `longitude` = \'' + req.body.longitude + '\' WHERE `student`.`ssn` = \'' + req.body.ssn3 + '\'', function(err, res) {
            if (err) console.log(err);
            else {
                console.log("[LOG] UPDATE PROFILE COMPLETED! ssn: " + req.body.ssn3);

            }

        });
        res.redirect('/home');

    });
    app.post('/update4', function(req, res) {
        // var ssn = req.body.ssn,name = req.body.name,surname=req.body.surname,gender=req.body.gender,addr=req.body.addr
        // ,tel=req.body.tel,birthday=req.body.birthday,email=req.body.email,nationality=req.body.nationality,is_alumni=req.body.is_alumni
        //
				if(req.body.level==1)level="B";
				else if(req.body.level==2)level="M";
				else if(req.body.level==3)level="D";
        con.query('INSERT INTO `sindicate2`.`degree` (`ssn`, `level`, `branch`, `graduate_date`, `uid`) VALUES (\''+req.body.ssn4+'\', \''+level+'\', \''+req.body.branch+'\',DATE_FORMAT(STR_TO_DATE(\''+req.body.graduate_date+'\',\'%d/%m/%Y\'),\'%Y,%m,%d\'), \''+req.body.uid+'\')' , function(err, res) {
            if (err) console.log(err);
            else {
                console.log("[LOG] UPDATE PROFILE COMPLETED! ssn: " + req.body.ssn4);

            }

        });
        res.redirect('/home');

    });




    app.get('/hometeacher', function(req, res) {
        res.render('client/hometeacher.ejs', {

            msg: 'ยินดีต้อนรับ !',
            profile: {
                tt: 'ผศ.ดร.',
                firstName: 'โชติรัตน์',
                lastName: 'รัตนามหัทธนะ',
                gender: 'หญิง',
                faculty: 'วิศวกรรมศาสตร์',
                department: 'วิศวกรรมคอมพิวเตอร์',
                position: 'รองหัวหน้าภาควิชา ฝ่ายกิจกรรม',
                spacialize: 'Data mining/Knowledge Discovery',
                startdate: '01-01-2000',
                enddate: '',
                building: 'ENG4',
                room: '18-11'
            },
            province: objprovince
        });
    });

    app.get('/homestaff', function(req, res) {
        res.render('client/homestaff.ejs', {

            msg: 'ยินดีต้อนรับ !',
            profile: {
                tt: 'ผู้ช่วยศาสตราจารย์',
                firstName: 'เคโรโระ',
                lastName: 'เซนเซย์',
                gender: 'ชาย',
                faculty: 'วิศวกรรมศาสตร์',
                department: 'วิศวกรรมคอมพิวเตอร์',
                position: 'รองหัวหน้าภาควิชา ฝ่ายกิจกรรม',
                spacialize: 'Animation',
                startdate: '16-05-2547',
                enddate: '',
                birthdate: '09-12-2522',
                building: 'ENG4',
                room: '19-03'
            },
            province: objprovince
        });
    });



    app.get('/mythesis', function(req, res) {
        res.render('client/mythesis.ejs'); // load the index.ejs file
    });


};

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        return next();
    }
    // if they aren't redirect them to the home page
    res.redirect('/');
}
