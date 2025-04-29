function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};
const currencies = {
      GBP: "British Pound",
      USD: "American Dollar",
      EUR: "Euro",
      BRL : "Brazilian Real",
      JPY: "Japanese Yen",
      TRY: "Turkish Lira"
    };

    const primaryCurrency = document.getElementById("primary");
    const secondaryCurrency = document.getElementById("secondary");
    primaryCurrency.innerHTML = getOptions(currencies);
    secondaryCurrency.innerHTML = getOptions(currencies);

    function getOptions(data) {
      return Object.entries(data)
        .map(([country, currency]) => `<option value="${country}">${country} | ${currency}</option>`)
        .join("");
    }

    document.getElementById("btn-convert").addEventListener("click", fetchCurrencies);
    function fetchCurrencies() {
      const primary = primaryCurrency.value;
      const secondary = secondaryCurrency.value;
      const amount = document.getElementById("amount").value;
      fetch("https://v6.exchangerate-api.com/v6/d14eeee6a4f935aab34c335e/latest/" + primary)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("NETWORK RESPONSE ERROR");
          }
        })
        .then((data) => {
          console.log(data);
          displayCurrency(data, primary, secondary, amount);
        })
        .catch((error) => console.error("FETCH ERROR:", error));
    }

    function displayCurrency(data, primary, secondary, amount) {
        if (amount >=300 && amount<=500 )
        {
      const calculated = amount * data.conversion_rates[secondary];
      const calculated1 = calculated - (0.035 * calculated);
      document.getElementById("result").setAttribute("style", "display:block");
      document.getElementById("txt-primary").innerText = " With Fee 3.5% ( "+amount + " " + primary + " = ";
      document.getElementById("txt-secondary").innerText = calculated1 + " " + secondary+")";
    } 
    else if (amount >500 && amount <=1500)
    {
      const calculated = amount * data.conversion_rates[secondary];
      const calculated1 = calculated - (0.027 * calculated);
      document.getElementById("result").setAttribute("style", "display:block");
      document.getElementById("txt-primary").innerText = " With Fee 2.7% ( "+amount + " " + primary + " = ";
      document.getElementById("txt-secondary").innerText = calculated1 + " " + secondary+")";
    }
    else if(amount >1500 && amount <=2500) {
      const calculated = amount * data.conversion_rates[secondary];
      const calculated1 = calculated - (0.02 * calculated);
      document.getElementById("result").setAttribute("style", "display:block");
      document.getElementById("txt-primary").innerText = " With Fee 2% ( "+amount + " " + primary + " = ";
      document.getElementById("txt-secondary").innerText = calculated1 + " " + secondary+")";
    }
    else if(amount >2500 && amount <=5000){
      const calculated = amount * data.conversion_rates[secondary];
      const calculated1 = calculated - (0.015 * calculated);
      document.getElementById("result").setAttribute("style", "display:block");
      document.getElementById("txt-primary").innerText = " With Fee 1.5% ( "+amount + " " + primary + " = ";
      document.getElementById("txt-secondary").innerText = calculated1 + " " + secondary+")";
    }
    else{
      alert("enter amount between 300 to 5000");
    }
  }