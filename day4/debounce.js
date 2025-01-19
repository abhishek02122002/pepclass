function debounce(func,time){
     let timeOutId;
     return function(...args){
          clearTimeout(timeOutId);
              timeOutId = setInterval(()=>{
                    func.apply(this,args);
               },time)
          }
     
}