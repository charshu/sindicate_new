// app/routes.js
var path = require('path');
module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
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

		if(req.isAuthenticated())
			res.redirect('/profile');

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});
	// process the login form
	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/home', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),
        function(req, res) {
            console.log("hello");

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
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});


	app.get('/editProfile',function(req,res){
		res.render('client/editProfile.ejs');

	});
	app.get('/home',function(req,res){
		res.render('client/home.ejs',{

			msg: 'ยินดีต้อนรับ !',
			profile : {
				stuid:'5630520921',
				firstName:'วชิรกรณ์',
				lastName:'รังสิกวานิช',
				tel:'0882391875',
				gender:'ชาย',
				faculty:'วิศวกรรมศาสตร์',
				department:'วิศวกรรมคอมพิวเตอร์',
				birthdate:'26-10-2536',
				f_address:'44/2',
				f_moo:'4',
				f_road:'สุขุมวิท',
				f_subDistrict:'เสม็ด',
				f_district:'เมือง',
				f_city:'ชลบุรี',
				f_postcode:'20000',
				f_country:'ไทย',
				s_address:'83 85 87',
				s_moo:'-',
				s_road:'ทรัพย์',
				s_subDistrict:'สี่พระยา',
				s_district:'บางรัก',
				s_city:'กรุงเทพฯ',
				s_postcode:'10500',
				s_country:'ไทย'
			},
			thesis : {
				thesisTH:'การออกแบบและวิเคราะห์อัลกอริทึมในการปิ้งลูกชิ้น',
				thesisEN:'Design and Analysis of Algorithm in Grilling LookChin',
				advisor:'ศ.ดร.บุญเสริม กิจศิริกุล',
				coadvisor:'ผศ.ดร.โปรดปราน บุณยพุกกณะ',
				scholarship:'ทุนอุดหนุนการวิจัย พัฒนาและวิศวกรรมภาครัฐ ด้านอิเล็กทรอนิกส์ คอมพิวเตอร์โทรคมนาคมและสารสนเทศ',
				award:'รางวัลระบบเอื้ออำนวยการประกอบอาหารเชิงอุตสาหกรรม',
				thconference:'การออกแบบและวิเคราะห์อัลกอริทึมในการปิ้งลูกชิ้น',
				intconference:'การออกแบบและวิเคราะห์อัลกอริทึมในการปิ้งลูกชิ้น',
				thpub:'การออกแบบและวิเคราะห์อัลกอริทึมในการปิ้งลูกชิ้น',
				intpub:'Design and Analysis of Algorithm in Grilling LookChin'

			},
			province : {
					ct:10,
					bk:4,
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

		});
	});

  app.get('/hometeacher',function(req,res){
		res.render('client/hometeacher.ejs',{

			msg: 'ยินดีต้อนรับ !',
			profile : {
				firstName:'เคโรโระ',
				lastName:'เซนเซย์',
				gender:'ชาย',
				faculty:'วิศวกรรมศาสตร์',
				department:'วิศวกรรมคอมพิวเตอร์',
				startdate: '16-05-2547',
				enddate: '',
				birthdate:'09-12-2522',
				building: 'ENG4',
				room: '19-03'
			},
			thesis : {
			},
			province : {
					ct:10,
					bk:4,
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
			},
			other : {
			},

		});
	});

	app.get('/mythesis', function(req, res) {
		res.render('client/mythesis.ejs'); // load the index.ejs file
	});


};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()){
			return next();
	}
	// if they aren't redirect them to the home page
	res.redirect('/');
}
