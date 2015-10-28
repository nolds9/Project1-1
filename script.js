$(document).ready(function(){
});


  var firstImage = "http://usercontent2.hubimg.com/6089769_f260.jpg";
  var count = 0;
  var cardList = ["#one .front .img","#two .front .img","#three .front .img","#four .front .img","#five .front .img","#six .front .img","#seven .front .img","#eight .front .img"];
  var images = [
    "https://s3.amazonaws.com/rapgenius/bboy11.jpg",
    "https://farm1.staticflickr.com/389/20298537230_cdce4787ee_o_d.jpg",
    "http://www.photoshopytutoriales.com/wp-content/uploads/2011/12/tutorial_breakdance_fotomanipulacion.jpg",
    "http://farm2.static.flickr.com/1281/4660602801_3065267f18.jpg",
    "https://s3.amazonaws.com/rapgenius/bboy11.jpg",
    "https://farm1.staticflickr.com/389/20298537230_cdce4787ee_o_d.jpg",
    "http://www.photoshopytutoriales.com/wp-content/uploads/2011/12/tutorial_breakdance_fotomanipulacion.jpg",
    "http://farm2.static.flickr.com/1281/4660602801_3065267f18.jpg"
  ];

  /*Random Image Generator*/

  function returnRandomSelected(){
    var order = [];
    var count = 0;
    var mySet = new Set();
    function randomSelected(){
     var cards = 8;
     var randomnumber = Math.random();
     var randomlyselectedcard = Math.floor(randomnumber*cards);
     return randomlyselectedcard;
    }
    while(count < 8){
      var a = randomSelected();
      if(!mySet.has(a)){
          mySet.add(a);
          order.push(a);
          count++
      }
    }
    return order;
  }
    var cOrder = returnRandomSelected();
  /***********************/
  var imageArray = [];

  function listeners() {
      $("#one").on("click", function(e) {
          if($(e.target).attr('src')===firstImage){
            count++;
          }
          $(e.target).attr('src', images[cOrder[0]]);
          imageArray.push(images[cOrder[0]]);
          // count++;
          if(count === 2){
            countClicks();
          }
          // console.log(count);
      });
      $("#two").on("click", function(e) {
          if($(e.target).attr('src')===firstImage){
          count++;
          }
          $(e.target).attr('src', images[cOrder[1]]);
          imageArray.push(images[cOrder[1]]);
          // count++;
          if(count === 2){
            countClicks();
          }
      });
      $("#three").on("click", function(e) {
          if($(e.target).attr('src')===firstImage){
            count++;
          }
          $(e.target).attr('src', images[cOrder[2]]);
          imageArray.push(images[cOrder[2]]);
          // count++;
          if(count === 2){
            countClicks();
          }
      });
      $("#four").on("click", function(e) {
          if($(e.target).attr('src')===firstImage){
            count++;
          }
          $(e.target).attr('src', images[cOrder[3]]);
          imageArray.push(images[cOrder[3]]);
          // count++;
          if(count === 2){
            countClicks();
          }
      });
      $("#five").on("click", function(e) {
          if($(e.target).attr('src')===firstImage){
            count++;
          }
          $(e.target).attr('src', images[cOrder[4]]);
          imageArray.push(images[cOrder[4]]);
          // count++;
          if(count === 2){
            countClicks();
          }
      });
      $("#six").on("click", function(e) {
          if($(e.target).attr('src')===firstImage){
            count++;
          }
          $(e.target).attr('src', images[cOrder[5]]);
          imageArray.push(images[cOrder[5]]);
          // count++;
          if(count === 2){
            countClicks();
          }
      });
      $("#seven").on("click", function(e) {
          if($(e.target).attr('src')===firstImage){
            count++;
          }
          $(e.target).attr('src', images[cOrder[6]]);
          imageArray.push(images[cOrder[6]]);
          // count++;
          if(count === 2){
            countClicks();
          }
      });
      $("#eight").on("click", function(e) {
          if($(e.target).attr('src')===firstImage){
            count++;
          }
          $(e.target).attr('src', images[cOrder[7]]);
          imageArray.push(images[cOrder[7]]);
          // count++;
          if(count === 2){
            countClicks();
          }
      });

  }

  function countClicks(){
      //console.log(imageArray);
      checkTwo();
      count = 0;
      imageArray = [];
      setTimeout(resetGame,500);

  }

  function checkTwo(){//check for same
    for(var x = 0; x < cardList.length; x++){
      for(var y = 0; y < cardList.length; y++){
        if (x!==y){//check every other card except itself
          if($(cardList[x]).attr('src')===$(cardList[y]).attr('src') && $(cardList[x]).attr('src') !== firstImage && $(cardList[y]).attr('src') !== firstImage){
            console.log("Match!");
            alert("Match!");
            cOrder = returnRandomSelected();
            return;
          }
        }
      }

    }
  }

  function resetGame(){
    $(".img").attr("src",firstImage);
  }

  listeners();



// var cardList = ["#one","#two"];
// var images = [
//   "https://s3.amazonaws.com/rapgenius/bboy11.jpg",
//   "https://farm1.staticflickr.com/389/20298537230_cdce4787ee_o_d.jpg",
//   "http://www.photoshopytutoriales.com/wp-content/uploads/2011/12/tutorial_breakdance_fotomanipulacion.jpg",
//   "http://farm2.static.flickr.com/1281/4660602801_3065267f18.jpg"
// ]
//
// function listeners(){
//   $("#one").on("click", function(e) {
//     var self = this;
//     console.log(self);
//         $(e.target).attr('src', images[0]);
//     });
//   $("#two").on("click", function(e) {
//         $(e.target).attr('src',
//           images[1]);
//     });
//   $("#three").on("click", function(e) {
//         $(e.target).attr('src',            images[2]);
//     });
//   $("#four").on("click", function(e) {
//         $(e.target).attr('src',            images[3]);
//     });
//   $("#five").on("click", function(e) {
//         $(e.target).attr('src', "https://s3.amazonaws.com/rapgenius/bboy11.jpg");
//     });
//   $("#six").on("click", function(e) {
//         $(e.target).attr('src',
//           "https://farm1.staticflickr.com/389/20298537230_cdce4787ee_o_d.jpg");
//     });
//   $("#seven").on("click", function(e) {
//         $(e.target).attr('src',            "http://www.photoshopytutoriales.com/wp-content/uploads/2011/12/tutorial_breakdance_fotomanipulacion.jpg");
//     });
//   $("#eight").on("click", function(e) {
//         $(e.target).attr('src',            "http://farm2.static.flickr.com/1281/4660602801_3065267f18.jpg");
//     });
//
//   checkTwo();
// }
//
//
//
// listeners();
