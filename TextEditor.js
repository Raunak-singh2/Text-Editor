

function formatDoc(cmd,value=null){
    if(value){
        document.execCommand(cmd,false,value); 
    }else{
        document.execCommand(cmd);
    }
}
 
function rrrkk(){
    const url=prompt('Inset url');
    formatDoc("createLink",url)
}