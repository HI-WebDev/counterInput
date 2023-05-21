let input = document.querySelector('input');
let maxlength = input.getAttribute('maxlength');
let progress = document.querySelector('.progress');
let count = document.querySelector('.count');


// set the default count
count.innerHTML = maxlength;

input.oninput = function () {
    //set the count dynamicly
    count.innerHTML = maxlength - this.value.length;
    // case 0
    if (count.innerHTML == 0) {
        count.classList.add('complete')
    } else {
        count.classList.remove('complete')
    }
    //set the progress
    progress.style.width=`${this.value.length *100 / maxlength}%`
}