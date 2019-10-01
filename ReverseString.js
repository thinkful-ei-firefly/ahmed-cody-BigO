function revStr(str){
  newStr = ''
  for(let i in str){
    newStr += str[(str.length+(-i-1))]
  }
  console.log(newStr)
}

revStr('hello')