// Users on longer flights like to start a second movie right when their first one ends,
// but they complain that the plane usually lands before they can see the ending.
// So you're building a feature for choosing two movies whose total runtimes will
// equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of
// integers movieLengths (in minutes) and returns a boolean indicating whether there are
// two numbers in movieLengths whose sum equals flightLength.

// When building your function:
// 1. Assume your users will watch exactly two movies.
// 2. Don't make your users watch the same movie twice.
// 3. Optimize for runtime over memory.

const moviesLengths = [70, 80, 60, 100];

let flightLength = 160;

// Using Loops

const findMoviesLoops = (moviesLengths, flightLength) => {
  for (x = 0; x < moviesLengths.length - 1; x++) {
    for (y = 1; y < moviesLengths.length; y++) {
      if (moviesLengths[x] + moviesLengths[y] === flightLength && y !== x) {
        return true;
      }
    }
  }
  return false;
};

console.log(findMoviesLoops(moviesLengths, flightLength));

// Using a Hash

const findMoviesHash = (moviesLengths, flightLength) => {
  const hashMovies = {};
  for (i = 0; i < moviesLengths.length; i++) {
    let match = flightLength - moviesLengths[i];
    if (hashMovies[match] === true) {
      return true;
    }
    hashMovies[moviesLengths[i]] = true;
  }
  return false;
};

console.log(findMoviesHash(moviesLengths, flightLength));

// Using a Set

const findMoviesSet = (moviesLengths, flightLength) => {
  const setMovies = new Set();
  for (let i = 0; i < moviesLengths.length; i++) {
    let match = flightLength - moviesLengths[i];
    if (setMovies.has(match)) {
      return true;
    }
    setMovies.add(moviesLengths[i]);
  }
  return false;
};

console.log(findMoviesSet(moviesLengths, flightLength));
