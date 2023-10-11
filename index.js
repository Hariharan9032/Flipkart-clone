let right_s = document.getElementById('m-left');
let left_s = document.getElementById('m-right');
let scrollContainer = document.getElementsByClassName('scroll')[0];


left_s.addEventListener('click',()=>{
    scrollContainer.scrollBy({
        left:1485,
        behavior:'smooth'
    });
})
right_s.addEventListener('click',()=>{
    scrollContainer.scrollBy({
        left:-1485,
        behavior:'smooth'
    });
})
function scrollAndRepeat() {
    scrollContainer.scrollBy({
        left: 1485,
        behavior: 'smooth'
    });
}

// Initial scroll
scrollAndRepeat();

// Set an interval to repeat the scroll
setInterval(() => {
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
        // If at the end, reset to the start
        scrollContainer.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        // Otherwise, scroll by the specified amount
        scrollAndRepeat();
    }
}, 2000);



let lbtn = document.getElementById('lbtn');
let rbtn = document.getElementById('rbtn');
let min_container = document.getElementsByClassName('min-container')[0]

lbtn.addEventListener('click',()=>{
    min_container.scrollBy({
        left:-700,
        behavior:'smooth'
    });
})
rbtn.addEventListener('click',()=>{
    min_container.scrollBy({
        left:700,
        behavior:'smooth'
    });
})

let b_left = document.getElementById('b-left');
let b_right = document.getElementById('b-right');
let best_mobiles = document.getElementsByClassName('best-mobiles')[0];
b_left.addEventListener('click',()=>{
    best_mobiles.scrollBy({
        left:200,
        behavior:'smooth'
    });
})
b_right.addEventListener('click',()=>{
    best_mobiles.scrollBy({
        left:-200,
        behavior:'smooth'
    });
})

let scroll_left = document.getElementsByClassName('s-l')[0];
let scroll_right = document.getElementsByClassName('s-r')[0];
let scroll_container = document.getElementsByClassName('scroll-cover')[0];


scroll_left.addEventListener('click',()=>{
    scroll_container.scrollBy({
        left:200,
        behavior:'smooth'
    });
})
scroll_right.addEventListener('click',()=>{
    scroll_container.scrollBy({
        left:-200,
        behavior:'smooth'
    });
})


/*right_s.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 500,
        behavior: 'smooth'
    });
});

left_s.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -500,
        behavior: 'smooth'
    });
});
count = 0
function scrollLeft(){
        scrollContainer.scrollLeft +=1388
        count +=1388
        if(count==1388*2){
            scrollContainer.scrollLeft = 0
        }
}

function scrollRight(){
    scrollContainer.scrollLeft -=1388
    scrollContainer.scrollLeft = 0
}
setInterval(scrollRight, 1000);


let scrollDirection = 1; 

function autoScroll() {
    if (scrollDirection === 1) {
        scrollRight();
    } else {
        scrollLeft();
    }
    scrollDirection *= -1;
}

setInterval(autoScroll, 1000);

 */