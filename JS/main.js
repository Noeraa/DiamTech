var nav=document.querySelector("nav");
var scrolled=false;
var gradient={
    red:80,
    black:120,
    deg:120
};
window.addEventListener("scroll",function () {
    if(window.pageYOffset>0){
        //nav.firstElementChild.firstElementChild.setAttribute("src","svgs/Diamtech Logo Nav.svg");            
       
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
        //nav.firstElementChild.firstElementChild.setAttribute("src","svgs/Diamtech Logo.svg");  
    }
 
},true);
