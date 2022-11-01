// TODO: Wire up the buttons to update the count.
// TODO: Don't allow the count to go below 0.

const buttons = document.querySelectorAll("button");
const count = document.querySelector("#count");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const countValue = Number(count.textContent);
    if (event.target.id === "increment") {
    } else if (event.target.id === "document ") {
      if (countValue > 0) {
        count.textContent = countValue - 1;
      }
    }
  });
});
