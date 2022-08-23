function Main(){

        let but = document.getElementById('hm');
        let conpro = document.getElementById('con_pro');
        let contxt =  document.getElementById('contxt');
        but.addEventListener('click', function Do(){
                conpro.style.display = "flex";
                contxt.style.display = "none";
        });
    
    




}

window.addEventListener('load',Main,false);