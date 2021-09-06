var menuBtn=document.getElementsByClassName('burger');
menuBtn=menuBtn[0]
var ul=document.getElementById('nav-ul')

menuBtn.addEventListener("click",OpenMenu);

function OpenMenu(){
    var line1=document.getElementById("line1");
    var line2=document.getElementById("line2");
    var line3=document.getElementById("line3");
    if(ul.style.top!=='20px'){
        ul.style.top='20px';
        line1.classList.add('line1');
        line2.classList.add('line2');
        line3.classList.add('line3');
    }
    else{
        ul.style.top='-999px';
        line1.classList.remove('line1')
        line2.classList.remove('line2')
        line3.classList.remove('line3')
      
    }

}
