const investmentOptions = {
    Basic: {
        minReturnRate: 0.012,
        maxReturnRate: 0.024,
        fee: 0.0025,
    },
    Saving: {
        minReturnRate: 0.03,
        maxReturnRate: 0.055,
        fee: 0.003,
    },
    MSI: {
        minReturnRate: 0.04,
        maxReturnRate: 0.23,
        fee: 0.013,
    }
}

function calculate_tax(years, profit) {
    if (years === 1)
        return 0;

    else if (years < 10)
        return profit > 12000 ? (profit - 12000) * 0.1 : 0;
    else
    return profit > 40000 ? ((profit - 40000) * 0.2 +2800): profit > 12000 ? ((profit - 12000) * 0.1) : 0;
}

function onSubmitForm(event) {
    event.preventDefault();
    let initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    let monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    let investmentType = document.getElementById('investmentType').value;
    let investmentDuration = parseInt(document.getElementById('duration').value);

    let minReturn = initialInvestment * investmentOptions[investmentType].minReturnRate
    let maxReturn = initialInvestment * investmentOptions[investmentType].maxReturnRate
    let yearlyProfit = minReturn * investmentDuration
    let yearlyFee = investmentOptions[investmentType].fee * (initialInvestment + monthlyInvestment * 12) * investmentDuration
    let yearlyTax = calculate_tax(investmentDuration, yearlyProfit)
cminReturn=minReturn;
cmaxReturn=maxReturn;
cyearlyProfit=yearlyProfit;
cyearlyFee=yearlyFee;
cyearlyTax=yearlyTax;
    let resultContainer = document.querySelector("div#quote-results");

    resultContainer.innerHTML = `
    <div class="result"><div class="result-label">Investment Type:</div> ${investmentType}</div>
    <div class="result"><div class="result-label">Investment Duration:</div> ${investmentDuration} ${investmentDuration > 1 ? 'Years' : 'Year'}</div>
    <div class="result"><div class="result-label">Minimum Return:</div> £${minReturn}</div>
    <div class="result"><div class="result-label">Maximum Return:</div> £${maxReturn}</div>
    <div class="result"><div class="result-label">Yearly Profit:</div> £${yearlyProfit}</div>
    <div class="result"><div class="result-label">Yearly Fee:</div> £${yearlyFee}</div>
    <div class="result"><div class="result-label">Yearly Tax:</div> £${yearlyTax}</div>
    `
}
document.querySelector("form#sip-form").addEventListener('submit', onSubmitForm, false)
document.querySelector("button#reset-form").addEventListener('click', () => {
    document.querySelector("div#quote-results").innerHTML = "";
}, false)

$(document).ready(function(){
   var cminReturn;
 
    var cmaxReturn ;
    var cyearlyProfit ;
    var cyearlyFee;
    var cyearlyTax;

});
function myFunction() {
   debugger;
let canvasElement= document.getElementById("cookiechart");
let config={
    type:"bar",
    data: {
        labels: ["maxReturn","minReturn","yearlyProfit","yearlyFee","yearlyTax"],
        datasets:[
            {
                label:"SIP Grpah",
                data: [cmaxReturn,cminReturn,cyearlyProfit,cyearlyFee,cyearlyTax],
                backgroundColor:[
                    "rgba(255,255,64,0.2)",//orange
                    "rgba(255,99,132,0.2)",//Red
                    "rgba(54,162,235,0.2)",//Blue
                    "rgba(75,255,192,0.2)",//Green
                    "rgba(153,102,255,0.2)",//Purple                    
                    ],
                borderColor:[
                    "rgba(255,159,64,1)",//orange
                    "rgba(255,99,132,1)",//Red
                    "rgba(54,162,235,1)",//Blue
                    "rgba(75,192,192,1)",//Green
                    "rgba(153,102,255,1)",//Purple 
                    ],
                borderWidth: 1,
            },
        ],
    },
};
var cookiechart= new Chart(canvasElement,config);
}