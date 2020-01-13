var existingSolution = [];
function printLowest(n){
    console.log(fib(n));
}
function memorization(n){
    if(n == 1){
        return 0;
    }
    if(existingSolution[n] != null){
        return existingSolution[n];
    }

    var r = 1 + memorization(n-1);
    if(n%2 == 0){
        r = Math.min(r, 1+ memorization(n/2));
    }
    if(n%3 == 0){
        r = Math.min(r, memorization(n/3));
    }
    existingSolution[n] = r;
    return r;
}

function dynamic(n){
    var i;
    existingSolution[1] = 0;
    for(i = 2; i<= n; i++){
        existingSolution[i] = 1 + existingSolution[i-1];
        if(i%2==0){
            existingSolution[i] = Math.min(existingSolution[i], 1+existingSolution[i/2]);
        }
        if(i%3==0){
            existingSolution[i] = Math.min(existingSolution[i], 1+existingSolution[i/3]);

        }
        
    }
    return existingSolution[n];
}

function fib(n){
    if(n <= 1)
        return n;
    if(existingSolution[n] != null){
        return existingSolution[n];
    }
    var soln = fib(n-1) + fib(n-2);
    existingSolution[n] = soln;
    return soln;
}