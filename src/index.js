module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  const openBrackets = bracketsConfig.map((pair) => pair[0]);
  const closedBrackets = bracketsConfig.map((pair) => pair[1]);
  
  const stack = [];
  const matchingBracket = bracketsConfig
    .reduce((acc, [openBrackets, closedBrackets]) =>
      ({ ...acc, [closedBrackets]: openBrackets }), {});

  for (const el of str) {
    if (el === matchingBracket[el] && stack.includes(matchingBracket[el])) {
      if (matchingBracket[el] !== stack.pop()) return false;
    } else if (openBrackets.includes(el)) {
      stack.push(el);
    } else if (closedBrackets.includes(el) && matchingBracket[el] !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};
