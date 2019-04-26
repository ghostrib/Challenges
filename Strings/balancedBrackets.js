/*
Balanced Brackets
Given a string, return true if its arrangement of 
parenthesis (), curly-brackets {}, and square-brackets [] 
would be considered valid in code and mathematics (is balanced).
*/

function isBalanced(str) {
  const open = { "(": ")", "[": "]", "{": "}" };
  const close = { ")": "(", "}": "{", "]": "[" };
  const stack = [];
  for (let i of str) {
    if (open[i]) stack.push(i);
    if (close[i]) {
      if (stack.pop() !== close[i]) return false;
    }
  }
  if (stack.length === 0) return true;
  return false;
}
