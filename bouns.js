// Part3: Bonus
// Task 1  ( Counter || )

var createCounter = function (init) {
  let count = init;
  function increment() {
    return ++count;
  }
  function decrement() {
    return --count;
  }
  function reset() {
    return count = init;
  }
  return { increment, decrement, reset };
};

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4