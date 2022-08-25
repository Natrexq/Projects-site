function Main(){
        let gh = document.getElementById('git');

        let but = document.getElementById('hm');
        let conpro = document.getElementById('con_pro');
        let contxt =  document.getElementById('contxt');

        let test =  document.getElementById('test');
        but.addEventListener('click', function Do(){
                conpro.style.display = "flex";
                contxt.style.display = "none";
        });
    
    
       
        let search = document.getElementById('butsrch');
        let butsrch = document.getElementById('srh');

        const Srch = () => {
                   
        let search = document.getElementById('butsrch');
        let butsrch = document.getElementById('srh');

                if(butsrch.value == ""){

                        if(butsrch.className == "inp_bef"){
                                butsrch.style.transition = "0.5s ease-in";
                                butsrch.className = "inp_after";
                                
                                
                        }

                        else if(butsrch.className == "inp_after"){
                                butsrch.style.transition = "0.5s ease-in";
                                butsrch.className = "inp_bef";
        
                                
                        }

                }
                else{
                        alert("Soon");
                }
        
                      
                      
                
        }

        const Git = () => {
                window.open("https://github.com/Natrexq");  
        }

        
        
       
        gh.addEventListener('click',Git,false);
        search.addEventListener('click',Srch,false);

}

function Gallery(){

        var but1  = document.querySelector('#galbut1');
        var but2  = document.querySelector('#galbut2');
        var but3  = document.querySelector('#galbut3');
      
        
      

       
        function ImgFunc(call){
                
              
                
                var newimg = document.createElement('div');
                var pos = document.getElementById('gallery');

                newimg.className = "message";
                newimg.style.opacity = "0";
                pos.appendChild(newimg);
                
                setTimeout(function(){ 
                        newimg.style.transition = "ease-in 300ms";
                        if(call == 1){
                                newimg.style.backgroundImage = "url('/dev/css/image1.png')"
                        }
                        else if(call == 2){
                                newimg.style.backgroundImage = "url('/dev/css/image2.png')"
                        }
                        else{
                                newimg.style.backgroundImage = "url('/dev/css/image3.png')"
                        }

                        
                        newimg.style.backgroundSize = "cover";
                        newimg.className = "st2";
                        
                        newimg.style.opacity = "1";  
                        
                        var exitbut =  document.createElement('button');
                        newimg.appendChild(exitbut)
                        exitbut.className = "exbut";
                        exitbut.textContent = "X";

                        

                        const Exit = () => {
                                newimg.style.transition = "ease-in 300ms";
                                newimg.className = "message";
                                newimg.style.opacity = "0";

                                setTimeout(function(){ 
                                        
                                        
                                        pos.removeChild(newimg);
                                }, 300);
                               
                        }
                        exitbut.addEventListener('click',Exit,false);

                    }, 300);
        }

        but1.addEventListener('click',function(){ ImgFunc(1);},false)
        but2.addEventListener('click',function(){ ImgFunc(2);},false)
        but3.addEventListener('click',function(){ ImgFunc(3);},false)
     
}

function NavBar(){

        const bh = document.querySelector('#bthome');
        const ba = document.querySelector('#btinfo');
        const bi = document.querySelector('#btauth');
        const bc = document.querySelector('#btcont'); 

       bh.addEventListener('click',function(){ CheckNav(1);},false)
       ba.addEventListener('click',function(){ CheckNav(2);},false)
       bi.addEventListener('click',function(){ CheckNav(3);},false)
       bc.addEventListener('click',function(){ CheckNav(4);},false)

       function CheckNav(x){

        if(x == 1){
              
                location.reload();

        }
        else if(x == 2){
                const info = document.getElementById('info');
                info.scrollIntoView();
        }
        else if(x == 3){
                const author = document.getElementById('aut');
                author.scrollIntoView();
        }
        else if(x == 4){
                const contact = document.getElementById('conedn');
                contact.scrollIntoView();;  
        }

        

       }
        



}
function SearchSmh(){

        const dwff = document.querySelector('#dwffc');
        const dwfc = document.querySelector('#dwffc');
        const adfc = document.querySelector('#dwffc');
        const dwps = document.querySelector('#dwps');

        const ChcDow = (y) => {

                if(y == 1){
                        window.open("https://github.com/Natrexq/FileFormatChanger-Website");
                }
                else if(y == 2){
                        window.open("https://github.com/Natrexq/Projects-site");     
                }
                else if(y == 3){
                        window.open("https://github.com/Natrexq/Projects-site");     
                }
                else if(y == 4){
                        window.open("https://github.com/Natrexq/Projects-site");     
                }
                //
        }
        dwff.addEventListener('click',function(){ChcDow(1);},false);
        dwfc.addEventListener('click',function(){ChcDow(2);},false);
        adfc.addEventListener('click',function(){ChcDow(3);},false);
        dwps.addEventListener('click',function(){ChcDow(4);},false);


}
window.addEventListener('load',SearchSmh,false);
window.addEventListener('load',NavBar,false);
window.addEventListener('load',Gallery,false);
window.addEventListener('load',Main,false);