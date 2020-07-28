const tl = gsap.timeline({paused: true});

tl.from(
    ".gsap-swipe",
    {
      y: 20,
      x: 20,
      rotate: -40,
      duration: 3,
      transformOrigin: '30% 80%',
      ease: Elastic.easeOut.config(1, 0.5),
    }, 0
  )
  .fromTo(
    ".swipe",
    {
      xPercent: -100
    },
    {
      duration: 1,
      xPercent: 100,
      ease: Sine.easeInOut,
      stagger: {
        each: 0.15
      }
    }, 0
  )
  .from(
    ".maskSwipe",
    {
      xPercent: -100,
      ease: Sine.easeInOut
    },
    0.4
  )
  .from(
    "#hello",
    {
      duration: 1.5,
      drawSVG: "0%"
    },
    1
  )
  .from(
    ".swoop",
    {
      duration: 2,
      drawSVG: "0%"
    },
    1
  )
  .from(
    ".line",
    {
      drawSVG: "0%",
      duration: 0.5,
      stagger: {
        each: 0.2
      }
    },
    1
  )
  .from(
    ".shape",
    {
      scale: 0,
      duration: 1.3,
      transformOrigin: "50% 50%",
      rotate: '+=random(-60, 60)',
      ease: Elastic.easeOut.config(1, 0.8),
      stagger: {
        each: 0.2
      }
    },
    0.2
  );

// ScrubGSAPTimeline(tl);

let hover = document.querySelector('.js-hover');
let hover2 = document.querySelector('.js-hover-2');
let hover3 = document.querySelector('.js-hover-3');

hover.addEventListener('mouseover', playTl);
hover.addEventListener('mouseout', resetTl);

hover2.addEventListener('mouseover', playTl);
hover2.addEventListener('mouseout', resetTl);
hover3.addEventListener('mouseover', playTl);
hover3.addEventListener('mouseout', resetTl);

function playTl(){
    tl.timeScale(1.25).restart();
}

function resetTl(){
    tl.progress(0).pause();
}






let wrapper
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function writingAll (stringTarget, container){
  wrapper = document.querySelector('['+container+']')
  const stringsContainer = document.getElementsByClassName(stringTarget)

  while(wrapper){
    for (i=0; i <  stringsContainer.length ; i++){
      const string = stringsContainer[i].textContent
      await write(string)
      await sleep(1000)
      await erase()
      await sleep(1000)
    };
  }
};

async function write(text){
  let index = 0
  while(index < text.length){
    const timeout = 100
    await sleep(timeout)
    index++
    wrapper.innerHTML = text.substring(0, index)
  }
};


async function erase() {
  while(wrapper.textContent.length){
    const timeout = 100
    await sleep(timeout)
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2)
  }
};

writingAll('item', 'data-text');
