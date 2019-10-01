function fact(n){
  let total = 1
  for(let i=1; i<=n; i++){
    total *= i
  }
  console.log(total)
}

fact(5)