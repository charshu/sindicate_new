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
        id:'5630237221',
        name: "ภูผา วัฒนชลาชล",
        gpax: "2.67",
        attendScore:"50",
        isflagged:true,
        note:"ไม่ค่อยเข้าเรียน มาสายบ่อย",
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
        birthdate:'24-11-2536'
      },
      {
        id:'5631005321',
        name: "รวีกร เรืองทรัพย์",
        gpax: "3.25",
        attendScore:"90",
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
        birthdate:'24-12-2536'
      },
      {
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
      attendScore:"95",
      isflagged:false,
      note:"มาเรียนตรงเวลา ตั้งใจเรียนทุกวัน",
      imgUrl:'/images/mypic.jpg',
      fbUrl:'https://www.facebook.com/chi.zzwzz',

      // profilestuid:'5630520921',
      tel:'0882391875',
      parentTel:"0814295635",
      gender:'หญิง',
      faculty:'วิศวกรรมศาสตร์',
      department:'วิศวกรรมคอมพิวเตอร์',
      degree:"ปริญญาตรี",
      year:"3",
      birthdate:'12-05-2537'
    },
    {
      id:'5631079921',
      name: "มารี รักเรียน",
      gpax: "3.99",
      attendScore:"100",
      isflagged:false,
      note:"มาเรียนตรงเวลา ตั้งใจเรียนทุกวัน",
      imgUrl:'/images/mypic.jpg',
      fbUrl:'https://www.facebook.com/chi.zzwzz',

      // profilestuid:'5630520921',
      tel:'0882391875',
      parentTel:"0814295635",
      gender:'หญิง',
      faculty:'วิศวกรรมศาสตร์',
      department:'วิศวกรรมคอมพิวเตอร์',
      degree:"ปริญญาตรี",
      year:"3",
      birthdate:'02-01-2537'
    }];

}

]);
