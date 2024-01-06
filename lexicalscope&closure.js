// lexical scope
function outer() {
    let name = 'javascript'
    function inner() {
        console.log('inner',name);
    }
    inner()
}
outer()

// cloure
function myfun() {
    let email = 'mk@.com'
    function innerfun() {
        console.log(email);
    }
    return innerfun
}

const fun = myfun()
fun()