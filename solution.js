
const args = process.argv.slice(2);

function calculateSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function calculateAvg(numbers) {
  return calculateSum(numbers) / numbers.length;
}

function main() {

  if (args.length < 2) {
    console.log(" [sum/avg] num1 num2 num3 ...");
    process.exit(1);
  }

  const operation = args[0];
  const numbers = args.slice(1).map(Number);

  if (operation === "sum") {

    const result = calculateSum(numbers);
    console.log("Ergebnis der Addition:", result);

  } else if (operation === "avg") {

    const result = calculateAvg(numbers);
    console.log("Ergebnis des Durchschnitts:", result);

  } else {
    console.log("Ungültige Operation. Bitte geben Sie 'sum' oder 'avg' ein." );
  }
}

main();


