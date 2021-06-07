var b = 10;
(function(paras) {
    var a = 10
    console.log(a + paras)
    window.objA = a; // this is used to expose a to the window.
})(100)