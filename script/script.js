const write = document.querySelector("#write");

const mensagens = ["Web Developer", "Front-End", "Ciência da Computação"];



var textIndex=0;
var caracterIndex=0;
var timeOut=0;


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const writeText = async () => {

  

    
    if( caracterIndex >= mensagens[textIndex].length){
        if(timeOut == 0){
            if(await sleep(2000)){
                timeOut=1;
            }
        
        }
        write.innerHTML = write.innerHTML.slice(0,write.innerHTML.length-1);
        
        if(write.innerHTML.length == 0) {
            textIndex++;
            caracterIndex=0;
        }
    }else{
    
        write.innerHTML += mensagens[textIndex].slice('')[caracterIndex];
        caracterIndex++;
        timeOut=0;
    }
    if(textIndex == mensagens.length){
        textIndex=0;
    }

}


setInterval(writeText, 200);

   