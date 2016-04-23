var app = angular.module('sindicate',[]);




app.controller("MainController", ["$scope", function($scope){
  $scope.isVisible = ""

}

]);

app.controller("modalController", ["$scope", function($scope){
  $scope.modal_btn_text = "เพิ่มเติม";
  $scope.prefixtitle = "แฟ้มข้อมูลของ";
    $scope.students = [{
      // left
      id:'5630520921',
      name: "วชิรกรณ์ รังสิกวานิช",
      gpax: "3.27",
      gpa:"3.47",
      attendScore:"88",
      isflagged:true,
      note:"มาเรียนตรงเวลา ตั้งใจเรียนทุกวัน",
      imgUrl:'/images/mypic.jpg',
      fbUrl:'https://www.facebook.com/chi.zzwzz',

      //-- right
      tel:'0882391875',
      parentTel:"0814295635",
      gender:'ชาย',
      faculty:'วิศวกรรมศาสตร์',
      department:'วิศวกรรมคอมพิวเตอร์',
      degree:"ปริญญาตรี",
      year:"3",
      birthdate:'26-10-2536'
    },
    {
      id:'5630513521',
      name: "รุจิรา รุจิสมบัติ",
      gpax: "3.46",
      attendScore:"99",
      isflagged:false,
      note:"มาเรียนตรงเวลา ตั้งใจเรียนทุกวัน",
      imgUrl:'/images/mypic.jpg',
      fbUrl:'https://www.facebook.com/chi.zzwzz',

      // profilestuid:'5630520921',
      tel:'0882391875',
      parentTel:"0814295635",
      gender:'ชาย',
      faculty:'วิศวกรรมศาสตร์',
      department:'วิศวกรรมคอมพิวเตอร์',
      degree:"ปริญญาตรี",
      year:"3",
      birthdate:'26-10-2536'
    },
    {
      id:'5630722121',
      name: "วชิรกรณ์ รังสิกวานิช",
      gpax: "3.27",
      attendScore:"88",
      isflagged:false,
      note:"มาเรียนตรงเวลา ตั้งใจเรียนทุกวัน",
      imgUrl:'/images/mypic.jpg',
      fbUrl:'https://www.facebook.com/chi.zzwzz',

      // profilestuid:'5630520921',
      tel:'0882391875',
      parentTel:"0814295635",
      gender:'ชาย',
      faculty:'วิศวกรรมศาสตร์',
      department:'วิศวกรรมคอมพิวเตอร์',
      degree:"ปริญญาตรี",
      year:"3",
      birthdate:'26-10-2536'
    }];


}

]);
