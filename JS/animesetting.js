//anime navbar
(function(){
    var nav=document.querySelector("nav");
    var scrolled=false;
    var gradient={
        red:80,
        black:120,
        deg:120
    };
    window.addEventListener("scroll",function () {
        if(window.pageYOffset>0){          
           if(scrolled==false){
                var animation=anime({
                    targets : gradient,
                    delay:0,
                    endDelay:100,
                    duration:9000,
                    red:10,
                    black:60,
                    deg:30,
                    update:function () {
                        nav.style.background="linear-gradient("+gradient.deg+"deg, #f0eaea "+gradient.red+"%, #706575 "+gradient.black+"%)"
                    },
                    easing:"easeInQuad",
                    loop:true,
                    direction:"alternate"
                });
                scrolled=true;
            }
        }
        if(window.pageYOffset==0){
            anime.remove(gradient);
            nav.style.background="transparent";
            scrolled=false; 
        } 
    },true);
    })();
    //anime loader
var loader=document.querySelector("#loader");
var webpage=document.querySelector("#webpage");
    window.addEventListener("load",function(){
        setTimeout(function(){
            loader.style.display="none";
            webpage.style.display="block";
            anime({
                targets:webpage,
                opacity:1,
                duration:500,
                delay:0,
                direction:"normal",
                easing: "easeInQuad",
                loop:false,
                complete : function(anim){
                    if(anim.completed){
                        var body=document.querySelector("body");
                        var script=document.createElement("script");
                        var text=document.createTextNode('AOS.init({duration:900,delay:100,easing: "ease-in-out-sine",anchorPlacement: "top-bottom",offset:100,disable: function(){return window.innerWidth<720;}});');
                        script.appendChild(text);
                        
                        webpage.appendChild(script);
    
                        
                    }
                }              
            });
        },1500);
    },false);


    //anime section/why you choose Diamtech
var animation= new anime({
    targets: "aside .card",
    duration: 1000,
    delay : anime.stagger(300),
    loop: true,
    easing: "easeOutBounce" ,
    direction: "alternate",
    keyframes:[
        {translateY:-20},
        {translateY:20},
    ],
    endDelay:300,
});
//anime the layout section
var layout=document.querySelector(".layout-section");
window.addEventListener("load",function(){
    var svgdoc=layout.contentDocument;
    var gradient=svgdoc.getElementById("linearGradient873");
    var forme=svgdoc.getElementById("rect1470");
   anime({
    targets: gradient,
    duration:3000,
    endDelay:2000,
    direction:"alternate",
    easing:"easeInQuad",
    x1:31.645231,
       y1:317.11902,
       x2:271.09726,
       y2:234.24977,
    loop:true
   });

   anime({
    targets:forme,
    direction:"alternate",
    easing:"easeInOutQuart",
    loop:true,
    delay:1000,
    d: [
            {
        value:"m -0.37797621,208.93153 c 68.00162621,66.24811 178.06741621,6.30373 270.25298621,0 v 70.68155 c -86.78531,-63.50603 -179.890572,-5.35314 -270.25298621,0 z",
        duration:100
      },
      {
        value:"m -0.37797621,208.93153 c 172.70269621,-2.45384 154.47836621,90.53469 270.25298621,0 v 70.68155 c -250.302205,37.11567 -246.07543,-4.81604 -270.25298621,0 z",
        duration:2000
      },
      {
        value:"m -0.37797621,208.93153 c 110.21703621,35.71075 218.01291621,-49.3719 270.25298621,0 v 70.68155 c -263.3688074,-69.38907 -256.106678,-8.30517 -270.25298621,0 z",
        duration:2000
      }
    ]
  });

},false);