const { program } = require('commander');
const fs = require('fs');

program
  .requiredOption('-i, --input <file>')
  .option('-o, --output <file>')
  .option('-d, --display');

program.parse();
const options = program.opts();

if (!options.input) {
  console.log("Please, specify input file");
}

if (!fs.existsSync(options.input)) {
  console.log("Cannot find input file");
}

const data = fs.readFileSync(options.input, 'utf8');
const jsonData = JSON.parse(data);


if (options.output) {
  fs.writeFileSync(options.output, data, 'utf8');
} 

if (options.display) {
  console.log(data);
}

let minElement = jsonData[0];

jsonData.forEach(element => {
  if (element.value < minElement.value) {
    minElement = element;
  }
});

const result = `${minElement.txt}:${minElement.value}`;

fs.writeFileSync('output.txt', result, 'utf8');
