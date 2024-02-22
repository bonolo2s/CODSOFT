const display = document.querySelector('#display');
const btn = document.querySelectorAll('.btn');

const equalTo = document.querySelector('#equalityBtn');
const correction = document.querySelector('#delete')
const clear = document.querySelector('#clear')


display.value = '';

btn.forEach(function(button) {
    button.addEventListener('click', function() {
        display.textContent += button.textContent;
    });
});


equalTo.addEventListener('click', function() {
    display.value = Math.round(eval(display.value) * 100) / 100;
});

correction.addEventListener('click', function(){
    display.textContent= display.textContent.toString().slice(0.-1)
})

clear.addEventListener('click', function(){
    display.value = ''
})

