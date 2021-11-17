const display = document.querySelector(".calc-display");

function insert(data) {
  let currentData = display.innerText;
  //   display.innerText = currentData + data;

  if (
    isNotDuplicable(data) &&
    isNotDuplicable(
      currentData.substr(currentData.length - 1, currentData.length)
    )
  ) {
  } else {
    display.innerText = currentData + data;
  }
}

function isNotDuplicable(sign) {
  return (
    sign == "+" || sign == "-" || sign == "*" || sign == "/" || sign == "."
  );
}
