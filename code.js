window.onload=function(){
    let task = document.querySelector(".BOX2");
    
    let list = document.querySelector(".line");
    
    let addTask = document.querySelector(".btn");
    
    
    addTask.addEventListener("click" , ()=>{
        
        list.insertAdjacentHTML(`afterbegin` , `<li>
        
                    <i class="fas fa-trash-alt deleteTask"></i>
                    
                    <h4>${task.value}</h4>
                    
                </li>`);
                
                task.value = "";
                
                let deleteTask = document.querySelectorAll(".deleteTask");
                
                deleteTask.forEach(del =>{
                    
                    del.addEventListener("click" , ()=>{
                        
                        del.parentElement.remove();
                        
                    })
                    
                })
                
    })}
    