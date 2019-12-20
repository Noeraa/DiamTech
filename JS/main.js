
if(screen.availWidth>=855){
    var header=document.querySelector("header");
    header.style.height=window.innerHeight+"px";
}
var typed=new Typed("#banner-tittle",{
        strings: ["DIAMTECH","&ldquo; UN CYBER CAF&Eacute; QUI R&Eacute;POND &Agrave; VOS BESOINS &rdquo;"],
        typeSpeed:20,
        startDelay:100,
        backDelay:2000,
        backSpeed:20,
        showCursor: true,
        cursorChar: "_",
        loop:true
});
