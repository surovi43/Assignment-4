function calculateMoney(ticketSale) {
  const income = ticketSale * 120 - (500 + 8 * 50);
  return income >= 0 ? income : "Invalid Number";
}

function checkName(name) {
  if (typeof name === "string") {
    const lastChar = name.charAt(name.length - 1).toLowerCase();
    if (
      lastChar === "a" ||
      lastChar === "e" ||
      lastChar === "y" ||
      lastChar === "w" ||
      lastChar === "i" ||
      lastChar === "o" ||
      lastChar === "u"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }

  return "invalid";
}

function deleteInvalids(array) {}

function password(obj) {}

function monthlySavings(arr, livingCost) {}

// Testing
console.log();
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));

console.log();
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName("Surovi"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
