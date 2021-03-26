const burguer = document.querySelector('.hero__burguer');
const menu = document.querySelector('.hero__menu');
var number =0;

burguer.addEventListener('click', function(){

    if(number==0){
        menu.classList.remove("hidden"); 
        number++;
    }else{
        menu.classList.add("hidden");
        number=0;
    }
    

} )