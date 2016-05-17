function fillstudentprofile(data) {
    //manage data config
    $('#manageprofile_edit_btn_profile1').click(function() {
        $(".profile1").find("input").removeAttr("disabled", "true");
        $(".profile1").find("textarea").removeAttr("disabled", "true");
    });

    $('#manageprofile_submit_btn_profile1').click(function() {
        setTimeout(function() {
            $(".profile1").find("input").attr("disabled", "true");
            $(".profile1").find("textarea").attr("disabled", "true");

        }, 100);
    });
    $('#manageprofile_edit_btn_profile2').click(function() {
        $(".profile2").find("input").removeAttr("disabled", "true");
        $(".profile2").find("textarea").removeAttr("disabled", "true");
    });

    $('#manageprofile_submit_btn_profile2').click(function() {
        setTimeout(function() {
            $(".profile2").find("input").attr("disabled", "true");
            $(".profile2").find("textarea").attr("disabled", "true");

        }, 100);
    });
    $('#manageprofile_edit_btn_profile3').click(function() {
        $(".profile3").find("input").removeAttr("disabled", "true");
        $(".profile3").find("textarea").removeAttr("disabled", "true");
    });

    $('#manageprofile_submit_btn_profile3').click(function() {
        setTimeout(function() {
            $(".profile3").find("input").attr("disabled", "true");
            $(".profile3").find("textarea").attr("disabled", "true");
        }, 100);
    });
    $("#sid").val(data.sid);
    $("#name").val(data.name);
    $("#surname").val(data.surname);
    $("#ssn").val(data.ssn);
    $("#ssn2").val(data.ssn);
    $("#ssn3").val(data.ssn);
    $("#nationality").val(data.nationality);
    $("#tel").val(data.tel);
    $("#email").val(data.email);
    // checked the gender radios
    if (data.gender === "M") {
        $('#male').prop('checked', true);
    } else if(data.gender ==="F") {
        $('#female').prop('checked', true);
    }


    $("#birthday").val(data.birthday);
    $("#email").val(data.email);
    $("#s_address").val(data.addr);

    $("#faculty").val("วิศวกรรมศาสตร์");
    $("#department").val("ภาควิศวกรรมคอมพิวเตอร์");

    if (data.is_alumni === "Y") {
        $('#is_alumni_yes').prop('checked', true);
    } else if(data.is_alumni ==="N") {
        $('#is_alumni_no').prop('checked', true);
    }
    $("#is_alumni").val(data.is_alumni);
    $("#parent_name").val(data.parent_name);
    $("#parent_surname").val(data.parent_surname);
    $("#parent_tel").val(data.parent_tel);
    $("#latitude").val(data.latitude);
    $("#longitude").val(data.longitude);



    // $("#f_address").val(data.f_address);
    // $("#f_moo").val(data.f_moo);
    // $("#f_road").val(data.f_road);
    // $("#f_subDistrict").val(data.f_subDistrict);
    // $("#f_district").val(data.f_district);
    // $("#f_city").val(data.f_city);
    // $("#f_postcode").val(data.f_postcode);
    // $("#f_country").val(data.f_country);


    // $("#s_moo").val(data.s_moo);
    // $("#s_road").val(data.s_road);
    // $("#s_subDistrict").val(data.s_subDistrict);
    // $("#s_district").val(data.s_district);
    // $("#s_city").val(data.s_city);
    // $("#s_postcode").val(data.s_postcode);
    // $("#s_country").val(data.s_country);

}
function fillmanageEdu(data,ssn) {


  $('#manageEdu_submit_btn').click(function() {
      setTimeout(function() {
          $(".profileEdu").find("input").attr("disabled", "true");
          $(".profileEdu").find("textarea").attr("disabled", "true");

      }, 100);
  });
    $("#ssn4").val(ssn);


}
function fillmanagethesis(data) {


    $("#thesisTH").val(data.thesisTH);
    $("#thesisEN").val(data.thesisEN);
    $("#advisor").val(data.advisor);
    $("#coadvisor").val(data.coadvisor);
    $("#scholarship").val(data.scholarship);
    $("#award").val(data.award);
    $("#thconference").val(data.thconference);
    $("#intconference").val(data.intconference);
    $("#thpub").val(data.thpub);
    $("#intpub").val(data.intpub);
}

function fillmanageinternship(data) {
    $("#nameInternshipCompany").val(data.name);
    $("#startDateIntern").val(data.start);
    $("#endDateIntern").val(data.end);
    $("#impression").val(data.impression);
    $("#rateYo").rateYo({
        rating: data.rate
    });
}

function fillmanagefurtheredu() {


}


function fillprofileteacher(datateacher) {
    //manage data config
    $('#manageprofile_edit_btn').click(function() {
        $("#manageprofiledata").find("input").removeAttr("disabled", "true");
        $("#manageprofiledata").find("textarea").removeAttr("disabled", "true");
        //  alert("click");
    });
    $('#manageprofile_submit_btn').click(function() {
        $("#manageprofiledata").find("input").attr("disabled", "true");
        $("#manageprofiledata").find("textarea").attr("disabled", "true");
        //  alert("click");
    });
    $("#tt").val(datateacher.tt);
    $("#firstName").val(datateacher.firstName);
    $("#lastName").val(datateacher.lastName);
    $("#gender").val(datateacher.gender);
    $("#faculty").val(datateacher.faculty);
    $("#department").val(datateacher.department);
    $("#position").val(datateacher.position);
    $("#spacialize").val(datateacher.spacialize);
    $("#startdate").val(datateacher.startdate);
    $("#enddate").val(datateacher.enddate);
    $("#birthdate").val(datateacher.birthdate);
    $("#building").val(datateacher.building);
    $("#room").val(datateacher.room);
}
