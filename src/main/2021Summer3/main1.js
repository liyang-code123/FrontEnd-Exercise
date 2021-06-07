var res = (function() {
    var a = 20
    console.log(a)

    return a;
})()

function a() {

}

function b() {

}

function c() {
    return a() + b();
}

