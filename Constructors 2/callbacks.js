'use strict';

function logBefore (func, message) {
  console.log(message);
  func();
}

function runIf (func, bool) {
  if (bool) {
    func();
  }
  else {
    return;
  }
}

function wrap (func, value) {
  return function () {
    return func(value);
  }
}
