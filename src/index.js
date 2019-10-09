module.exports = function zeros(expression) {
  let result = 0;
  let temp = [];
  let deuces = false;
  let factor = expression.split('*');

  for (let item of factor) {
    if (item[item.length - 2] === '!') {
      for (let i = parseInt(item); i >= 1; i-= 2) {
        temp.push(i);
      }
    } else {
        for (let i = parseInt(item); i >= 1; i--) {
          temp.push(i);
        }
    }
  }

  for (let i = 0; i <temp.length; i++) {
    if (temp[i] % 5 === 0 && temp[i] / 5 !== 1) {
      temp.push(temp[i] / 5);
      temp[i] = 5;
      } else if (temp[i] % 2 === 0) {
      deuces = true;
    }
  }

  for (let item of temp) {
    if (item === 5) {
      if (deuces) {
        result++
      }
    } 
  }

  return result;
}
