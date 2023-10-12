let btn = document.getElementById('menu-btn') 
let overlay = document.getElementById('overlay') 
let showMenu = document.getElementById('mobile-menu') 
let  openEl =  document.querySelector('.open')
let counters = document.querySelectorAll('.counter')
let scrollStarted = false


btn.addEventListener('click', avTogglen);
document.addEventListener('scroll', scrollPage);


function avTogglen(){
    openEl.classList.toggle('open')
    overlay.classList.toggle('overlay')
    document.body.classList.toggle('stop-scrolling')
    showMenu.classList.toggle('show-menu')
}

function scrollPage(){
    const scrollPos = window.scrollY

    if( scrollPos > 100 && !scrollStarted){
        countUp ();
        showMenu.style.background = 'transparent'
    }else if(scrollPos < 100 && scrollStarted){
        reset()
        scrollStarted = false
    }
}


function countUp(){
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 100;
            if(c < target){
                counter.innerText  = `${Math.ceil(c + increment)}` 
                setTimeout(updateCounter, 60)
            }else{
                counter.innerText  = target
            }
        }
        updateCounter()
    })
}

function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'))
} 
