/*
function a() {
  console.log('A');
}
*/
let a = function () {
  console.log('A');
}

// a();

function slowfunc(callback) {
  callback();
}

slowfunc(a);