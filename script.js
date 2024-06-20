

function cursorAnimation() {
    var crs = document.querySelector("#cursor")

    var pcont = document.querySelector("#page1-content")

    // pcont.addEventListener("mousemove",function(dets){
    //     crs.style.left=dets.x+"px";
    //     crs.style.top=dets.y+"px";
    // })


    pcont.addEventListener("mousemove", function (dets) {
        gsap.to(crs, {
            left: dets.x,
            top: dets.y
        })
    })
    pcont.addEventListener("mouseenter", function () {
        gsap.to(crs, {
            opcaity: 1,
            scale: 1
        })
    })
    pcont.addEventListener("mouseleave", function () {
        gsap.to(crs, {
            opcaity: 0,
            scale: 0
        })
    })
}
cursorAnimation()


function swipe(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
        },
    });
}

swipe()

 var tl=gsap.timeline()
 tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
 })

 tl.to("#loader h3",{
    opacity:0,
    x:-20,
    stagger:0.1,
    duration:1
 })

 

 tl.to("#loader",{
    opacity:0,
 })

 tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
 })

 tl.to("#loader",{
    display:"none"
 })

