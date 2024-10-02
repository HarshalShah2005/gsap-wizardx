function page1Animation() {
        var tl = gsap.timeline()    

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        duration: 0.7,
        opacity: 0,
        stagger: 0.15,
    })  

    tl.from("nav i", {
        y: -30,
        delay: 1,
        duration: 0.7,
        opacity: 0,
        rotate: 360,
        scale: 2
    },"-=2.5") 

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.5
    })  

    tl.from(".center-part1 p", {
        x: 200,
        opacity: 0,
        duration: 0.4
    },"-=0.5")  

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    })  

    tl.from(".center-part2 img", {
        x: 200,
        opacity: 0,
        duration: 0.5
    },"-=0.5")  

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.5
    })
}

function page2Animation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 50%",
            scrub: 2,
            end: "top 0"
        }
    })
    
    tl.from(".services", {
        y: 30,
        opacity: 0,
        duration: 1
    })
    
    tl.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    },"1")
    
    tl.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    },"1")
    
    tl.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    },"2")
    
    tl.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    },"2")
}

function page3Animation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            start: "top 50%",
            scrub: 2,
            end: "top 0"
        }
    })

    tl.from(".part12", {
        x: -800,
        opacity: 0,
        duration: 1
    })

    tl.from(".part22", {
        y: 30,
        opacity: 0,
        duration: 1
    })

    tl.from(".part32", {
        x: 800,
        opacity: 0,
        duration: 1
    })

}

function cardAnimation() {
    var cards = document.querySelectorAll(".elem");
    cards.forEach(card => {
        card.addEventListener("mouseenter", (dets) => {
            gsap.to(card, {
                scale: 1.075,
                backgroundColor: "gray",
            });
        });

        card.addEventListener("mouseleave", (dets) => {
            gsap.to(card, {
                scale: 1,
                backgroundColor: card.classList.contains("black") ? "black" : "white"
            });
        });
    });
}

page1Animation()
page2Animation()
page3Animation()
cardAnimation()
