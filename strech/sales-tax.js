var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var output = {};
  for (object of salesData) {        //loops objects
    var companyName = object.name;
    var getSum = (accumulator, currentValue) => accumulator + currentValue;

    for (prov in taxRates) {
      if (object.province === prov) {
      var provTax = taxRates[prov];
      var totalSales = object.sales.reduce(getSum);
      var tax = totalSales * provTax;

      if (output[companyName]) {
        var company = output[companyName];
        company.totalSales += totalSales;
        company.totalTaxes += tax;
      } else {
        var company = {
          totalSales: totalSales,
          totalTaxes: tax
        }
      }
      output[companyName] = company;
      };
    }
  }
  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
