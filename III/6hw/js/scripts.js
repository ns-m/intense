window.addEventListener('load', function(){

    const formElements = document.querySelectorAll('.check');
    const btnElements = document.querySelector('.btnSend');
    const mainForm = document.querySelector('.form');  
     
    
    mainForm.addEventListener('submit', function(e){     
        
        const validationObj = {
            'name': () => console.log(1),
            // 'phone': console.log('2'),
            // 'email': console.log('3')
        } 
        
        let hasError = false;        
        
        formElements.forEach(function(item){
                        
            if(item.value === '' && item.name === 'name'){   
                validationObj['name']           
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
            
});