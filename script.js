function loadingAnimation(){
  var tl=gsap.timeline();
tl.from(".line h1",{
  y:150,
  opacity:0,
  stagger:0.2,
  duration:0.6,
  delay:0.2
})
tl.from("#line-part-1",{
  opacity:0,
  onStart:function(){
    var h5timer = document.querySelector("#line-part-1 h5");
    var grow = 0;
    setInterval(function(){
  if(grow<100){
    h5timer.innerHTML = grow++
  }
  else{
    h5timer.innerHTML = grow
  }
},35);

  }
});

tl.to(".line h2",{
  animationName:"anime",
  opacity:1
});
tl.to("#loader",{
  opacity:0,
  duration:0.4,
  delay:4
});
tl.from("#page1",{
  delay:0.2,
  y:1600,
  opacity:0,
  duration:0.4,
  ease:Power4
});
tl.to("#loader",{
  display:"none"
});
}
loadingAnimation()