

var loadR;
let bot = document.getElementById('myBtn');
let root = document.getElementById('root')

$('#carousel-example').on('slide.bs.carousel', function (e) {
  /*
      CC 2.0 License Iatek LLC 2018 - Attribution required
  */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $('.carousel-item').length;

  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});


function change(){
    if(window.pageYOffset >  500  ){
     bot.style.display = 'inline';
    }
    if(window.pageYOffset <  500  ){
        bot.style.display = 'none';
    }
}
setTimeout(function(){
 root.style.overflow ='visible'
},10000)

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 };


 let theme = localStorage.getItem('theme');
 if(theme == null){
  setTheme('light')
 }else{
  setTheme(theme)
 }
 
 
 let themeDots = document.getElementsByClassName('theme-dot');
 
 for(var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click',function(){
   let swip = this.dataset.mode
   console.log(swip)
   setTheme(swip);
  })
 }
 
 function setTheme(swip){
  if(swip == 'light'){
   document.getElementById('theme-style').href = './assets/css/style.css'
  }
  if(swip == 'red'){
   document.getElementById('theme-style').href = './assets/css/red.css'
  }
  if(swip == 'green'){
   document.getElementById('theme-style').href = './assets/css/green.css'
  }
  if(swip == 'blue'){
   document.getElementById('theme-style').href = './assets/css/blue.css'
  }
  localStorage.setItem('theme', swip)
 }