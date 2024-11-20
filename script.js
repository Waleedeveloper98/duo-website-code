function init(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();

var crsr =document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
      crsr.style.left = dets.x+20 +"px"
      crsr.style.top = dets.y +20 +"px"
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 30%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h1" ,{
    x:-70,
},"anim")
tl.to(".page1 h2", {
    x:80
},"anim")
tl.to(".page1 video",{
    width:"80%"
},"anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      start:"top -130%",
      end:"top 100%",
      scrub:3
  }
})
tl2.to(".main",{
  backgroundColor:"white"
})


var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      start:"top -280%",
      end:"top -300%",
      scrub:3
  }
})
tl3.to(".main",{
  backgroundColor:"black"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width = "300px"
    crsr.style.height = "250px"
    crsr.style.borderRadius = "0"
    crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.width = "10px"
    crsr.style.height = "10px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = "none"
  })
})
var purple = document.querySelector("#purple")
var nav = document.querySelectorAll("#nav h4")
nav.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    purple.style.display = "block"
    purple.style.opacity = "1"
  })
  elem.addEventListener("mouseleave",function(){
    purple.style.display = "none"
    purple.style.opacity = "0"
  })
})