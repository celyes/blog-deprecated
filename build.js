const fs = require('fs');
const path = require('path');
const converter = require('./scripts/convert');
const layout = require('./scripts/extractLayout');

const scriptpath = path.join(__dirname, 'components');
const mdpath = path.join(__dirname, 'docs');
const htmlpath = path.join(__dirname, 'public');


fs.readdir(scriptpath, (err, files) => {
    if(err) throw err;
    let assets = layout.extract(files);
    fs.readdir(mdpath, (err, files)=>{
        if (!fs.existsSync('./public')){
            fs.mkdirSync('./public');
        }
        if (err) throw err;
        converter.build(files, mdpath, htmlpath, assets);
    }); 
});
