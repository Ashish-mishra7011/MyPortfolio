let index = 0;

let cards_comment = document.querySelectorAll('.reviews .slids .cards .card');
let dots_comment = document.querySelectorAll('.reviews .slids .controls .dots .dot');

function next_slide(){
    index = index + 1;
    if(cards_comment.length == index){
        index = 0;
    }
    for(i=0;i<dots_comment.length;i++){
        dots_comment[i].classList.remove('active-dot');
    }
    for (i = 0; i < cards_comment.length; i++) {
        cards_comment[i].classList.remove('active-card');
        cards_comment[index].classList.add('active-card');
        dots_comment[index].classList.add('active-dot');
    }
}

function privious_slide(){
    index = index - 1;
    if(index < 0){
        console.log(cards_comment.length);
        index = cards_comment.length - 1; 
    }
    for(i=0;i<dots_comment.length;i++){
        dots_comment[i].classList.remove('active-dot');
    }
    for (i = 0; i < cards_comment.length; i++) {
        cards_comment[i].classList.remove('active-card');
        cards_comment[index].classList.add('active-card');
        dots_comment[index].classList.add('active-dot');
    }
}

function doted_slide(ind){
    for(i=0;i<dots_comment.length;i++){
        dots_comment[i].classList.remove('active-dot');
    }
    for (i = 0; i < cards_comment.length; i++) {
        cards_comment[i].classList.remove('active-card');
        cards_comment[ind].classList.add('active-card');
        dots_comment[ind].classList.add('active-dot');
    }
    console.log(i);
    index = ind;
}

for(i=0;i<dots_comment.length;i++){
   
}

// dots[i].className = dots[i].className.replace(" active", "");


