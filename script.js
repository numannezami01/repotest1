

function loco(){
    gsap.registerPlugin(ScrollTrigger);

    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

}
loco();

  
 
var tl =gsap.timeline();
 
gsap.from("#h1 #s",{
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"8% 0%",
    end:"7%",
    // markers:true,
  },
  left:90,
  opacity:0
});
gsap.from("#h1 #n",{
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"10% 0%",
    end:"6%",
    // markers:true,
  },
  right:90,
  opacity:0
});
gsap.from("#h1 #u",{
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"12% 0%",
    end:"5%",
    // markers:true,
  },
  left:100,
  opacity:0
});
gsap.from("#left2 img",{
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"5% 0%",
    end:"9%",
    // markers:true,
  },
  right:100,
  opacity:0
});
gsap.from("#box1",{
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"1% 0%",
    end:"1%",
    // markers:true,
  },
  right:100,
  opacity:0
});
gsap.from(" #nu3",{
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"70% 0%",
    end:"75%",
    // markers:true,
  },
  left:700,
  opacity:0
});
gsap.from(" #fu",{
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"71% 0%",
    end:"75%",
    // markers:true,
  },
  right:900,
  opacity:0
});
gsap.from("#gu3",{
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"73% 0%",
    end:"75%",
    // markers:true,
  },
  left:900,
  opacity:0
});
gsap.from(" #su",{
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"74% 0%",
    end:"75%",
    // markers:true,
  },
  right:700,
  opacity:0
});

gsap.from("#gola4",{
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"5% 0%",
    end:"6%",
    // markers:true,
  },
   x: 60,
  // opacity:0
});
gsap.from("#circle2",{
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"6% 0%",
    end:"7%",
    // markers:true,
  },
   y:100,
  // opacity:0
});
gsap.from("#circle1",{
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"6% 0%",
    end:"7%",
    // markers:true,
  },
   x:100,
  // opacity:0
});
gsap.from(".circle3",{
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"6% 0%",
    end:"7%",
    // markers:true,
  },
   y:100,
  // opacity:0
});

