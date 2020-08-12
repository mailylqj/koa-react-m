function debounce(fn, delay){
    let timer;
    return function() {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}


function throttle(fn, delay) {
    let timer;
    return function() {
        if(timer) return;
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null;
        }, delay)
    }
}