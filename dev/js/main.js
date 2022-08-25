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

window.addEventListener('load',Gallery,false);
window.addEventListener('load',Main,false);