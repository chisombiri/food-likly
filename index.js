const icons = document.querySelectorAll('.section-1-icons i');
let i = 1; //counter variable

setInterval(() => {
    i++
    const icon1 = document.querySelector('.section-1-icons .change');

    icon1.classList.remove('change');

    //when last icon is reached, return to the first icon, else keep going.
    if(i > icons.length){
        icons[0].classList.add('change');
        i = 1;
    } else {
        icon1.nextElementSibling.classList.add('change');  
    } 

}, 3000);