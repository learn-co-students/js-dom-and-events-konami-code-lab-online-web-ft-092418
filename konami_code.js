
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;
const main = document.body
console.log(main)
main.addEventListener("keydown", init)

function init(e) {
  if (typeof(e) != "undefined"){
    const key = parseInt(e.detail);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
