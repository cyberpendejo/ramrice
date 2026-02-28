// Heto po iyong script para sa submit button 02/22/2026 -Aldo Gardose
document.getElementById("orderForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const payload = {
    product: document.getElementById("product").value,
    firstName: document.querySelector("input[name='firstName']").value,
    lastName: document.querySelector("input[name='lastName']").value,
    mobile: document.querySelector("input[name='contactNumber']").value,
    mail: document.querySelector("input[name='emailAddress']").value
  };

  const response = await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  alert(result.message);
});

