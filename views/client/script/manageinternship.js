function fillmanageinternship(data){
  $("#nameInternshipCompany").val(data.name);
$("#startDateIntern").val(data.start);
$("#endDateIntern").val(data.end);
$("#impression").val(data.impression);
$("#rateYo").rateYo({
    rating: data.rate
});
}
