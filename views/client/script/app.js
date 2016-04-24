var app = angular.module('sindicate',[]);




app.controller("MainController", ["$scope", function($scope){
  $scope.isVisible = ""

}

]);

app.controller("modalController", ["$scope", function($scope){
  $scope.modal_btn_text = "เพิ่มเติม";
  $scope.prefixtitle = "แฟ้มข้อมูลของ";
  $scope.flag = function(index){
      $scope.students[index].isflagged = !$scope.students[index].isflagged ;

  }
    $scope.students = [{
      // left
        id:'5630237221',
        name: "นายชนวิทย์ อ้นชู",
        gpax: "3.33",
        gpa:"3.47",
        attendScore:"80",
        isflagged:true,
        note:"ไม่ค่อยเข้าเรียน มาสายบ่อย",
        imgUrl:'/images/oon.jpg',
        fbUrl:'https://www.facebook.com/bosschanawit',

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
      id:'5630520921',
      name: "วชิรกรณ์ รังสิกวานิช",
      gpax: "3.27",
      gpa:"3.47",
      attendScore:"88",
      isflagged:false,
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
      id:'5631050421',
      name: "ธีรภัทร ศรีไตรรัตนรักษ์",
      gpax: "3.53",
      gpa:"3.47",
      attendScore:"60",
      isflagged:false,
      note:"มาเรียนสาย แต่ตั้งใจเรียน",
      imgUrl:'/images/tee.jpg',
      fbUrl:'https://www.facebook.com/teerapat.sri',

      // profilestuid:'5630520921',
      tel:'0876792380',
      parentTel:"0818670666",
      gender:'ชาย',
      faculty:'วิศวกรรมศาสตร์',
      department:'วิศวกรรมคอมพิวเตอร์',
      degree:"ปริญญาตรี",
      year:"3",
      birthdate:'06-12-2537'
    },
    {
      id:'5630648621',
      name: "อภิภู หนองบัวล่าง",
      gpax: "3.60",
      gpa:"3.47",
      attendScore:"100",
      isflagged:false,
      note:"goodboy",
      imgUrl:'/images/ball.jpg',
      fbUrl:'https://www.facebook.com/aphipu.nongbualang',

      // profilestuid:'5630520921',
      tel:'0874894249',
      parentTel:"0874825772",
      gender:'ชาย',
      faculty:'วิศวกรรมศาสตร์',
      department:'วิศวกรรมคอมพิวเตอร์',
      degree:"ปริญญาตรี",
      year:"3",
      birthdate:'18-05-2538'
    },
    {
      id:'5630513521',
      name: "รุจิรา จิตรเจริญพร",
      gpax: "3.00",
      gpa:"3.47",
      attendScore:"100",
      isflagged:false,
      note:"มาเรียนตรงเวลา ตั้งใจเรียนทุกวัน",
      imgUrl:'/images/fah.jpg',
      fbUrl:'https://www.facebook.com/bluefasis',

      // profilestuid:'5630520921',
      tel:'0838948991',
      parentTel:"0805088056",
      gender:'หญิง',
      faculty:'วิศวกรรมศาสตร์',
      department:'วิศวกรรมคอมพิวเตอร์',
      degree:"ปริญญาตรี",
      year:"3",
      birthdate:'12-05-2537'
    },
    {
      id:'56301063621',
      name: "พรเทพ อัชระฉัตร",
      gpax: "3.00",
      gpa:"3.47",
      attendScore:"100",
      isflagged:false,
      note:"มาเรียนตรงเวลา ตั้งใจเรียนทุกวัน",
      imgUrl:'/images/lookchin.jpg',
      fbUrl:'https://www.facebook.com/lookchin.cules',

      // profilestuid:'5630520921',
      tel:'0838948991',
      parentTel:"0805088056",
      gender:'หญิง',
      faculty:'วิศวกรรมศาสตร์',
      department:'วิศวกรรมคอมพิวเตอร์',
      degree:"ปริญญาตรี",
      year:"3",
      birthdate:'12-05-2537'
    }];

}

]);
