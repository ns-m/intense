window.addEventListener('load', function(){

    const formElements = document.querySelectorAll('.check');
    const btnElements = document.querySelector('.btnSend');
    const mainForm = document.querySelector('.form');    
    
    mainForm.addEventListener('submit', function(e){        
        
        let hasError = false;        

        formElements.forEach(function(item){
            if(item.value === ''){                
                item.classList.add('err');
                disabledBtn();                
            }else{
                item.classList.remove('err');
                hasError = true;
            }
        });        

        if (hasError){            
            e.preventDefault();            
        }
        
    });

    function disabledBtn(){
        btnElements.disabled = true;
    }

    function enabledBtn(e){
        btnElements.disabled = false;
        e.target.classList.remove('err');
    }

    formElements.forEach(el => el.addEventListener('focusin', enabledBtn));
    // mainForm.addEventListener('focusin', function(e){        
    //     if(e.target.classList.contains('.check')){
    //         console.log(e)
    //         e.target.classList.remove('err');
    //         btnElements.disabled = false;
    //     }
    // })
        
});