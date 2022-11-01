const form = document.querySelector("form");
const p = document.querySelector("p")

function createResponsemessages(formInfo) {
  return `
  Thank you ${infoName} for your message!
  We will get back to you at ${formInfo.email}`
}

form.addEventListener("submit", handleSubmit {
  event.preventDefault();


  const data = new FormData(e.target);
  const userIputs = Object.fromEntries(data.entries());
  p.textContent = createResponsemessages(userIputs);

  p.innerHTML = createResponsemessages(userInputs)
}
