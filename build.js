const fs = require('fs');
const path = require('path');
const markdown = require( "markdown" ).markdown;

let mddir = path.join(__dirname, 'docs');
let htmldir = path.join(__dirname, 'public');

fs.readdir(mddir, (err, files)=>{

    if (err) throw err;

    files.forEach(file => {
        
        fileDir = path.join(mddir, file);

        file = file.slice(0, -3);

        fs.readFile(fileDir, (err, data) => {
            
            if (err) throw err;
            data = markdown.toHTML(data.toString());
            fs.writeFile(path.join(htmldir, file) + ".html", data, err => { 
                if (err) throw err;
                console.log(`file: ${file}.html - status: OK`);
            });

        })

    })

})