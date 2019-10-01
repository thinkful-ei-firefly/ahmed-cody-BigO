

function hanoi(n, source, dest, temp){
 
    if(n===1){
      
      console.log(`${source}->${dest}`);
    }
    if(n === 2){
      
      hanoi(n-1,source, temp, dest);
  
      hanoi(n-1,source, dest,temp);
  
      hanoi(n-1,temp, dest,source);
      //console.log(`moved 2 discs from ${source} to ${dest}`)
    }
  
    if(n > 2 ){
  
      hanoi(n-1, source, temp, dest);
  
      hanoi(1, source, dest, temp);
  
      hanoi(n-1, temp,dest,source);
      //console.log(`moved 3 discs from ${source} to ${dest}`);
    }
   
  }
  
  hanoi(2,'A','C','B');
