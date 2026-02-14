function generateReceipt() {
  const bank = document.getElementById("bank").value;
  const sender = document.getElementById("sender").value;
  const receiver = document.getElementById("receiver").value;
  const amount = document.getElementById("amount").value;

  if (!bank || !sender || !receiver || !amount) {
    alert("Please fill all fields");
    return;
  }

  const date = new Date().toLocaleString();
  const transactionId = "TX" + Math.floor(Math.random() * 1000000000);

  document.getElementById("r-bank").innerText = bank;
  document.getElementById("r-sender").innerText = sender;
  document.getElementById("r-receiver").innerText = receiver;
  document.getElementById("r-amount").innerText = Number(amount).toLocaleString();
  document.getElementById("r-date").innerText = date;
  document.getElementById("r-id").innerText = transactionId;

  document.getElementById("receipt").style.display = "block";
}

function downloadReceipt() {
  html2canvas(document.getElementById("receipt")).then(canvas => {
    const link = document.createElement("a");
    link.download = "receipt.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
