const { doc } = require("prettier");

// TODO: Get the form submission as an object
const form = document.querySelector("form");
const tipAmtP = document.querySelector("#tip-amt");
const totalAmtP = document.querySelector("#total");

function calcTotalWithTip(total, tipPct) {
  return Number(total) + total * (tipPct / 100);
}

function handleSubmit(e) {
  e.preventDefault();

  const submission = {
    total: e.target.total.value,
    tip: e.target.tip.value,
  };

  const totalWithTip = calcTotalWithTip(submission.total, submission.tip);

  renderTipInfo(totalWithTip, submission.tip);
}

function renderTipInfo(totalAmt, tipAmt) {
  tipAmtP.textContent = `Tip Amount: $${tipAmt}`;
  totalAmtP.textContent = `Total Amount: $${totalAmt}`;
}
// TODO: Write a function to calculate the total amount

// TODO: Output the information showing voff, the tip amount and the total in 'p' tags
