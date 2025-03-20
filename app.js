let input = document.querySelector("#em"); // أو document.getElementById('sumbit')
console.log(input);
let btn = document.querySelector(".submit");
const mas='invalid email please enter valid email';
let error = document.querySelector(".mas");
error.innerHTML=mas;

console.log(error);
btn.addEventListener('click',function(e){
    if(input.value==null||input.value==''||input.value<10){
        e.preventDefault();
        input.style.border='red 1px solid;';
        error.classList.add('visible');
    }
    else{
        localStorage.setItem(input.value ,input.value);
        alert('thanks to subscribe....')
    }
})

