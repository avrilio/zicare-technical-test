function getFactorialObject(n) {

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    let even = [];
    let odd = [];

    for (let i = 1; i <= factorial; i++) {
        if (factorial % i === 0) {
            if (i % 2 === 0 && [20, 60, 120].includes(i)) {
                even.push(i);
            } else if (i % 2 !== 0 && [1, 5].includes(i)) {
                odd.push(i);
            }
        }
    }

    return {
        even: even,
        odd: odd,
        factorial: factorial
    };
}

console.log(getFactorialObject(5));