const fs = require('fs');
const path = require('path');

const converter = require('./scripts/convert');

let mdpath = path.join(__dirname, 'docs');
let htmlpath = path.join(__dirname, 'public');
let scriptpath = path.join(__dirname, 'components');

fs.readdir(scriptpath, (err, files) => {
    
    let assets = {}

    files.forEach(file => {
        
        let filecontent = fs.readFileSync(path.resolve(scriptpath, file), 'utf8');
        
        if(file == "header.html"){
            assets = {
                ...assets,
                ...{"header": filecontent}
            }
        }else if(file == "footer.html"){
            assets = {
                ...assets,
                ...{"footer": filecontent}
            }
        }
    
    });
    fs.readdir(mdpath, (err, files)=>{

        if (!fs.existsSync('./public')){
            fs.mkdirSync('./public');
        }
        if (err) throw err;
        converter.build(files, mdpath, htmlpath, assets);
    });
});
