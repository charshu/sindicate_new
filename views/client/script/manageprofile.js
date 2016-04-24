function fillprofile(data){
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
  $("#stuid").val(data.stuid);
  $("#firstName").val(data.firstName);
  $("#lastName").val(data.lastName);
  $("#tel").val(data.tel);
  $("#gender").val(data.gender);
  $("#faculty").val(data.faculty);
  $("#department").val(data.department);
  $("#birthdate").val(data.birthdate);

  $("#f_address").val(data.f_address);
  $("#f_moo").val(data.f_moo);
  $("#f_road").val(data.f_road);
  $("#f_subDistrict").val(data.f_subDistrict);
  $("#f_district").val(data.f_district);
  $("#f_city").val(data.f_city);
  $("#f_postcode").val(data.f_postcode);
  $("#f_country").val(data.f_country);

  $("#s_address").val(data.s_address);
  $("#s_moo").val(data.s_moo);
  $("#s_road").val(data.s_road);
  $("#s_subDistrict").val(data.s_subDistrict);
  $("#s_district").val(data.s_district);
  $("#s_city").val(data.s_city);
  $("#s_postcode").val(data.s_postcode);
  $("#s_country").val(data.s_country);

}

function fillprofileteacher(datateacher){
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
