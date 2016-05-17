var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "sindicate2"
});
// query zone


con.connect(function(err) {
    if (err) {
        console.log(err);
        console.log('Error connecting');
        return;
    }
    console.log('Connection established');
});
con.query('SELECT AVG(gpa) as avg_gpa FROM b_stu ', function(err, res) {
    if (err) console.log(err);
    else {
        for (var i = 0; i < res.length; i++) {
            //console.log('[LOG] GPA AVG: ' + res[i].avg_gpa);
        }

    }
});
var num_male;
// ,bmale
// ,bfemale
// ,msmale
// ,msfemale
// ,phdmale
// ,phdfemale;
con.query('SELECT * FROM b_stu NATURAL join stuid NATURAL join student where gender = \'M\'', function(err, res) {
    if (err) console.log(err);
    else {
        num_male = res.length;
        console.log('[LOG] M : ' + res.length);
    }
});
