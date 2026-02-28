// Heto po iyong script para mag-auto populate iyong product field mula sa piniling order mula sa homepage 02/22/2026 -Aldo Gardose

  const params = new URLSearchParams(window.location.search);
  const product = params.get("product");

  if(product){
    document.getElementById("product").value = product;
  }
