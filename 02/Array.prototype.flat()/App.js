var flat = function (arr, depth) {
  {

    if (depth === undefined) {
			depth = 1;
		}
    // If depth is 0, return the array as-is
    if (depth < 1) {
      return arr.slice();
    }

    // Otherwise, concatenate into the parent array
    return arr.reduce(function (acc, val) {
      return acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val);
    }, []);
  }

  return flat(this, depth);
};
