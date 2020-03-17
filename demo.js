window.onload=function(){
    var button=document.querySelector('.btn');
    var bg=document.querySelector('.bg');
    var container=document.querySelector('.container');
    var text=document.querySelector('.text');
    var flag=false;
    
    button.onmousedown=function(e){
        var clientX=event.clientX;
        button.onmousemove=function(){
            var moveX=event.clientX-clientX;


            if(moveX>0){
            this.style.left=moveX+"px";
            bg.style.width=moveX+"px";
               if(moveX>=(container.offsetWidth-this.offsetWidth)){
                   text.innerText="验证成功";
                   text.style.color="#fff";
                    flag=true;
                   this.onmousemove=null;
                   this.onmousedown=null;
               }
        
        
        }

        }
            



        button.onmouseup=function(e){
           
            this.onmousemove=null;
            if(flag){return};

            this.style.left=0;
            bg.style.width=0;
        }
    }








}