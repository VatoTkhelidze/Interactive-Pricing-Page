let sliderCircle = document.querySelector('.slider_circle');
let moneyAmount = document.querySelector('.money');
let moneyMobile = document.querySelector('.moneyMobile');
let switchButton = document.querySelector('.switch');
let Checkbox = document.querySelector(".switch input");
let monthMobile = document.querySelector('.monthMobile');
let yearMobile = document.querySelector('.yearMobile');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let viewers = document.querySelector('.pageviewers');
let viewersMobile = document.querySelector('.pageviews')

for(i=0; i<sliderCircle.length; i++){
    sliderCircle.length.style.backgroundColor = '#A4F3EB'
}


sliderCircle.addEventListener('input', function(){
    if(sliderCircle.value == 1){
        if(Checkbox.checked == true){
            moneyAmount.value = '$' + '36.00';
            moneyMobile.value = '$' + '36.00';
        }else{
            moneyAmount.value = '$' + '4.00';
            moneyMobile.value = '$' + '4.00';
        }
        viewers.value = '25K ' + 'PAGEVIEWS';
        viewersMobile.value = '25K ' + 'PAGEVIEWS';
    }
    if(sliderCircle.value == 2){
        if(Checkbox.checked == true){
            moneyAmount.value = '$' + '72.00';
            moneyMobile.value = '$' + '72.00';
        }else{
            moneyAmount.value = '$' + '8.00';
            moneyMobile.value = '$' + '8.00';
        }
        viewers.value = '50K ' + 'PAGEVIEWS';
        viewersMobile.value = '50K ' + 'PAGEVIEWS';
    }
    if(sliderCircle.value == 3){
        if(Checkbox.checked == true){
            moneyAmount.value = '$' + '144.00';
            moneyMobile.value = '$' + '144.00';
        }else{
            moneyAmount.value = '$' + '16.00';
            moneyMobile.value = '$' + '16.00';
        }
        viewers.value = '100K ' + 'PAGEVIEWS';
        viewersMobile.value = '100K ' + 'PAGEVIEWS';
    }
    if(sliderCircle.value == 4){
        if(Checkbox.checked == true){
            moneyAmount.value = '$' + '288.00';
            moneyMobile.value = '$' + '288.00';
        }else{
            moneyAmount.value = '$' + '32.00';
            moneyMobile.value = '$' + '32.00';
        }
        viewers.value = '150K ' + 'PAGEVIEWS';
        viewersMobile.value = '150K ' + 'PAGEVIEWS';
    }
    if(sliderCircle.value == 5){
        if(Checkbox.checked == true){
            moneyAmount.value = '$' + '576.00';
            moneyMobile.value = '$' + '576.00';
        }else{
            moneyAmount.value = '$' + '64.00';
            moneyMobile.value = '$' + '64.00';
        }
        viewers.value = '200K ' + 'PAGEVIEWS';
        viewersMobile.value = '200K ' + 'PAGEVIEWS';
    }
})

switchButton.addEventListener('click', function(){
    if(Checkbox.checked == true){
        month.style.display = 'none';
        year.style.display = 'block';
        monthMobile.style.display = 'none';
        yearMobile.style.display = 'block';
        if(sliderCircle.value == 1){
            moneyAmount.value = '$' + '36.00';
            moneyMobile.value = '$' + '36.00';
            viewers.value = '25K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 2){
            moneyAmount.value = '$' + '72.00';
            moneyMobile.value = '$' + '72.00';
            viewers.value = '50K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 3){
            moneyAmount.value = '$' + '144.00';
            moneyMobile.value = '$' + '144.00';
            viewers.value = '100K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 4){
            moneyAmount.value = '$' + '288.00';
            moneyMobile.value = '$' + '288.00';
            viewers.value = '150K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 5){
            moneyAmount.value = '$' + '576.00';
            moneyMobile.value = '$' + '576.00';
            viewers.value = '200K ' + 'PAGEVIEWS';
        }
    }else{
        year.style.display = 'none';
        month.style.display = 'block';
        monthMobile.style.display = 'block';
        yearMobile.style.display = 'none';
        if(sliderCircle.value == 1){
            moneyAmount.value = '$' + '4.00';
            moneyMobile.value = '$' + '4.00';
            viewers.value = '25K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 2){
            moneyAmount.value = '$' + '8.00';
            moneyMobile.value = '$' + '8.00';
            viewers.value = '50K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 3){
            moneyAmount.value = '$' + '16.00';
            moneyMobile.value = '$' + '16.00';
            viewers.value = '100K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 4){
            moneyAmount.value = '$' + '32.00';
            moneyMobile.value = '$' + '32.00';
            viewers.value = '150K ' + 'PAGEVIEWS';
        }
        if(sliderCircle.value == 5){
            moneyAmount.value = '$' + '64.00';
            moneyMobile.value = '$' + '64.00';
            viewers.value = '200K ' + 'PAGEVIEWS';
        }
    }
})



