var income = document.querySelector("#income");
var incomeOutput = document.querySelector("#income-output");
var currentCosts = document.querySelector("#current-costs");
var incomeSavings = document.querySelector("#income-savings");
var incomeSavingsText = document.querySelector("#income-savings-text");

var employees = document.querySelector("#employees");
var averageSalary = document.querySelector("#average-salary");
var payrollOutput = document.querySelector("#payroll-output");
var currentPremiums = document.querySelector("#current-premiums");
var payrollSavings = document.querySelector("#payroll-savings");
var payrollSavingsText = document.querySelector("#payroll-savings-text");

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


function calculateIncomeTax() {
	var taxableIncome = income.value - 29000;
	var incomeTaxRate = 0.04;
	var tax = Math.max(taxableIncome * incomeTaxRate, 0);
	var savings = currentCosts.value - tax;
	incomeSavings.classList.remove("more-taxes");
		incomeSavingsText.innerHTML="savings";
	if(savings<0){
		incomeSavings.classList.add("more-taxes");
		incomeSavingsText.innerHTML="more";
	}
	incomeOutput.innerHTML = format(tax);
	incomeSavings.innerHTML = format(Math.abs(savings));
}

function calculatePayrollTax() {
	var payroll = employees.value * averageSalary.value;
	var taxablePayroll = payroll - 1000000;
	var payrollTaxRate = 0.075;
	var tax = Math.max(taxablePayroll * payrollTaxRate, 0) / Math.max(employees.value,1);
	var savings = currentPremiums.value - tax;
	payrollSavings.classList.remove("more-taxes");
		payrollSavingsText.innerHTML="total savings";
	if(savings<0){
		payrollSavings.classList.add("more-taxes");
		payrollSavingsText.innerHTML="more total";
	}

	payrollOutput.innerHTML = format(tax);
	payrollSavings.innerHTML =format(Math.abs(savings * employees.value));
}
function format(value){
	return formatter.format(Math.round(value)).replace(/\D00$/, '');
}

calculateIncomeTax();
calculatePayrollTax();