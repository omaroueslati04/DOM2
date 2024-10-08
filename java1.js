

//card1
var plus=document.getElementById('plus1');
var moins=document.getElementById('moins1');
var trash=document.getElementById('trash1');
var heart=document.getElementById('heart1');
var flex=0;
var card=document.getElementById('card1');
var price=document.getElementById('price1');
var nmbr=document.getElementById('nombre');
var prixf=document.getElementById('total-price')

plus.addEventListener('click',function(){
    var currentPrice = parseInt(price.textContent, 10);
    price.textContent = currentPrice + 100;
    nmbr.textContent++;
    


})
moins.addEventListener('click',function(){
    var currentPrice2 = parseInt(price.textContent, 10);
    if(currentPrice2>0)
        price.textContent = currentPrice2 - 100;
    
    if(nmbr.textContent>0)
        nmbr.textContent--;
       
})
heart.addEventListener('click',function(){
    if(flex==0){
        flex=1;
    }
    else{
        flex=0;
    }

    if (flex==0){
        heart.style.color='black';
    }
    else {
        heart.style.color='red';
    }
})
trash.addEventListener('click',function(){
    card.innerHTML="";
})

//card 2 
var plus2=document.getElementById('plus2');
var moin2=document.getElementById('moins2');
var trash2=document.getElementById('trash2');
var heart2=document.getElementById('heart2');
var flex2=0;
var card2=document.getElementById('card2');
var price2=document.getElementById('price2');
var nmbr2=document.getElementById('nombre2');

plus2.addEventListener('click',function(){
    var currentPrice3 = parseInt(price2.textContent, 10);
    price2.textContent = currentPrice3 + 150;
    nmbr2.textContent++;
})
moins2.addEventListener('click',function(){
    var currentPrice4 = parseInt(price2.textContent, 10);
    if(currentPrice4>0)
        price2.textContent = currentPrice4 - 150;
    if(nmbr2.textContent>0)
        nmbr2.textContent--;
})
heart2.addEventListener('click',function(){
    if(flex2==0){
        flex2=1;
    }
    else{
        flex2=0;
    }

    if (flex2==0){
        heart2.style.color='black';
    }
    else {
        heart2.style.color='red';
    }
})
trash2.addEventListener('click',function(){
    card2.innerHTML="";
})

//card3


var plus3=document.getElementById('plus3');
var moin3=document.getElementById('moins3');
var trash3=document.getElementById('trash3');
var heart3=document.getElementById('heart3');
var flex3=0;
var card3=document.getElementById('card3');
var price3=document.getElementById('price3');

plus3.addEventListener('click',function(){
    var currentPrice5 = parseInt(price3.textContent, 10);
    price3.textContent = currentPrice5 + 220;
})
moins3.addEventListener('click',function(){
    var currentPrice6 = parseInt(price3.textContent, 10);
    if(currentPrice6>0)
        price3.textContent = currentPrice6 - 220;
})
heart3.addEventListener('click',function(){
    if(flex3==0){
        flex3=1;
    }
    else{
        flex3=0;
    }

    if (flex3==0){
        heart3.style.color='black';
    }
    else {
        heart3.style.color='red';
    }
})
trash3.addEventListener('click',function(){
    card3.innerHTML="";
})





