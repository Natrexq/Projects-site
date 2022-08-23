function Main(){
        let gh = document.getElementById('git');

        let but = document.getElementById('hm');
        let conpro = document.getElementById('con_pro');
        let contxt =  document.getElementById('contxt');
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

window.addEventListener('load',Main,false);