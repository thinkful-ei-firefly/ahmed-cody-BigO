function strSplitter(str, sep){
  newStr = ''
  for(let i in str){
    if(str[i] !== sep){
      newStr += str[i]
    }
  }

  console.log(newStr)
}

strSplitter('20/20/2020', '/')