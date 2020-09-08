// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
  Object.is = function ObjectIs(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) {
      return true;
    } else if (a === b) {
      return true;
    }
    return false;
    
    // ******
    
    function sign(v) {
      return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
    }
  };

}

// tests:
console.log(Object.is(42, 42) === true, '42');
console.log(Object.is('foo', 'foo') === true, 'foo');
console.log(Object.is(false, false) === true, 'false');
console.log(Object.is(null, null) === true, 'null');
console.log(Object.is(undefined, undefined) === true, 'undefined');
console.log(Object.is(NaN, NaN) === true, 'NaN');
console.log(Object.is(-0, -0) === true, '-0');
console.log(Object.is(0, 0) === true, '0');

console.log('\n');

console.log(Object.is(-0, 0) === false, '-0, 0');
console.log(Object.is(0, -0) === false, '0, -0');
console.log(Object.is(0, NaN) === false, '0, NaN');
console.log(Object.is(NaN, 0) === false, 'NaN, 0');
console.log(Object.is(42, '42') === false, "42, '42'");
console.log(Object.is('42', 42) === false, "'42', 42");
console.log(Object.is('foo', 'bar') === false, "'foo', 'bar'");
console.log(Object.is(false, true) === false, 'false, true');
console.log(Object.is(null, undefined) === false, 'null, undefined');
console.log(Object.is(undefined, null) === false, 'undefined, null');
