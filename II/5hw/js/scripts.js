window.addEventListener('load', function(){

    const formElements = document.querySelectorAll('.check');
    const btnElements = document.querySelector('.btnSend');
    const mainForm = document.querySelector('.form');    
    
    mainForm.addEventListener('submit', function(e){        
        
        let hasError = false;
        

        formElements.forEach(function(item){
            if(item.value === ''){                
                item.classList.add('err');
                disabledBtn()
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

    function enabledBtn(){
        btnElements.disabled = false;
        item.classList.remove('err');
    }

    formElements.forEach(el => el.addEventListener('input', enabledBtn));
        
});