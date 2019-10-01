function powerCalculator(base, exp) {


    for (let i = 1 ; i < exp; i++ ){
        base *= base
        
    }
    return base
}

console.log(powerCalculator(2, 2))