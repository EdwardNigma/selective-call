function debounce (f, ms) {
    debounce.counter = 0;
    let start = Date.now();
    return function () {
        let end = Date.now();
        if (((end - start) >= ms) || (debounce.counter == 0)) { 
            f.apply(this, arguments);
            debounce.counter++;
        }
        start = end;
    }
}

let f = debounce(alert, 1000);
f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)