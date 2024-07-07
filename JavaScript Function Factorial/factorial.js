function getFactorialObject(n) {
    let factorial = 1;
    let even = [];
    let odd = [];
    
    for (let i = n; i >= 1; i--) {
        
        if (factorial % 2) { 
            odd.push(factorial);
        } else {
            even.push(factorial);
        }
        factorial *= i;
    }
    
    return {
        even: even,
        odd: odd,
        factorial: factorial
    };
}

console.log(getFactorialObject(5));