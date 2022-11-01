const { doc } = require("prettier");

// TODO: Get the form submission as an object
const form = document.querySelector("form");

function calcTotalWithTip(total, tipPct) {
  return total + total * (tipPct / 100);
}

function handleSumbit(e) {
  e.preventDefault();

  const submission = {
    total: e.target.total.value,
    tip: e.target.tip.value,
  };
}

form.addEventListener("submit", handleSumbit);
// TODO: Write a function to calculate the total amount

// TODO: Output the information showing voff, the tip amount and the total in 'p' tags
