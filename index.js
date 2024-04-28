gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

let tl = gsap.timeline({});
tl.to("#page2>h1",{
  y:-1000,
  duration:4,
  // delay:5,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main" ,
    // markers: true,
    start : "top 0%",
    end : "top -20%",
    scrub: 4,
    pin:true,
  },
})
tl.to("#page3>h1",{
  y:-1000,
  duration:4,
  // delay:5,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main" ,
    // markers: true,
    start : "top 0%",
    end : "top -20%",
    scrub: 4,
    pin:true,
  },
})
let scrollbar = document.querySelector('.c-scrollbar_thumb ');
gsap.to("#page4",{
  onStart:function() {
    console.log("page 4");
    document.querySelector("#page4").addEventListener("mouseenter", function(e) {
      scrollbar.style.backgroundColor = "Black"
    })
    document.querySelector("#page4").addEventListener("mouseover", function(e) {
      scrollbar.style.backgroundColor = "Black"
    })
    document.querySelector("#page4").addEventListener("mouseleave", function(e) {
      scrollbar.style.backgroundColor = "white"
    })
  },
})