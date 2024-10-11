const { program } = require('commander');
const fs = require('fs');

program
.requiredOption('-i, --input <file>')
.option('-o, --output <file>')
.option('-d, --display');

program.parse();
const options = program.opts();

if(!fs.existsSync(options.input))
{
    console.log("Cannot find input file")
} 

const data = fs.readFileSync(options.input, 'utf8')

if(options.output)
{
    fs.writeFile(options.output, data, 'utf8', (err) => 
    {
        if(err){
            console.log(err);
            return;
        }
    });
}

if(options.display)
    {
        console.log(data);
    }