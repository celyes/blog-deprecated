const fs = require('fs');
const path = require('path');

const converter = require('./scripts/convert');

let mdpath = path.join(__dirname, 'docs');
let htmlpath = path.join(__dirname, 'public');
let scriptpath = path.join(__dirname, 'components');


let assets = {}
fs.readdir(scriptpath, (err, files) => {
    files.forEach(file => {
        let filename = file.slice(0, -5);
        let filepath = fs.readFileSync(path.resolve(scriptpath, file), 'utf8')
        if(filename == "header"){
            
            assets = {
                ...assets,
                ...{"header": filepath}
            }
        }else if(filename == "footer"){
            assets = {
                ...assets,
                ...{"footer": filepath}
            }
        }
    });
});

fs.readdir(mdpath, (err, files)=>{

    if (!fs.existsSync('./public')){
        fs.mkdirSync('./public');
    }
    if (err) throw err;
    converter.build(files, mdpath, htmlpath, assets);

})