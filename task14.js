let sliderCircle = document.querySelector('.slider_circle');
let moneyAmount = document.querySelector('.money');
let switchButton = document.querySelector('.switch');
let Checkbox = document.querySelector(".switch input");
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let viewers = document.querySelector('.pageviewers');

for(i=0; i<sliderCircle.length; i++){
    sliderCircle.length.style.backgroundColor = '#A4F3EB'
}


sliderCircle.addEventListener('input', function(){
    if(sliderCircle.value == 1){
        moneyAmount.value = '$' + '4.00';
        viewers.value = '25K ' + 'PAGEVIEWS';
    }
    if(sliderCircle.value == 2){
        moneyAmount.value = '$' + '8.00';
        viewers.value = '50K ' + 'PAGEVIEWS';
    }
    if(sliderCircle.value == 3){
        moneyAmount.value = '$' + '16.00';
        viewers.value = '100K ' + 'PAGEVIEWS';
    }
    if(sliderCircle.value == 4){
        moneyAmount.value = '$' + '32.00';
        viewers.value = '150K ' + 'PAGEVIEWS';
    }
    if(sliderCircle.value == 5){
        moneyAmount.value = '$' + '64.00';
        viewers.value = '200K ' + 'PAGEVIEWS';
    }
})

switchButton.addEventListener('click', function(){
    if(Checkbox.checked == true){
        month.style.display = 'none';
        year.style.display = 'block';
        if(sliderCircle.value == 1){
            moneyAmount.value = '$' + '36.00';
            viewers.value = '25K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 2){
            moneyAmount.value = '$' + '72.00';
            viewers.value = '50K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 3){
            moneyAmount.value = '$' + '144.00';
            viewers.value = '100K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 4){
            moneyAmount.value = '$' + '288.00';
            viewers.value = '150K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 5){
            moneyAmount.value = '$' + '576.00';
            viewers.value = '200K ' + 'PAGEVIEWS';
        }
    }else{
        year.style.display = 'none';
        month.style.display = 'block';
        if(sliderCircle.value == 1){
            moneyAmount.value = '$' + '4.00';
            viewers.value = '25K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 2){
            moneyAmount.value = '$' + '8.00';
            viewers.value = '50K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 3){
            moneyAmount.value = '$' + '16.00';
            viewers.value = '100K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 4){
            moneyAmount.value = '$' + '32.00';
            viewers.value = '150K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 5){
            moneyAmount.value = '$' + '64.00';
            viewers.value = '200K ' + 'PAGEVIEWS';
        }
    }
})



