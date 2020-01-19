const fs = require('fs');
const path = require('path');
const markdown = require( "markdown" ).markdown;


exports.build = function(files, mdpath, htmlpath, assets){
    
    files.forEach(file => {
        fileDir = path.join(mdpath, file);

        file = file.slice(0, -3);

        fs.readFile(fileDir, (err, data) => {
            
            if (err) throw err;
            data = markdown.toHTML(data.toString());
            fs.writeFile(path.join(htmlpath, file) + ".html", assets.header, err => {
                if (err) throw err;
            });
            fs.appendFile(path.join(htmlpath, file) + ".html", data, err => { 
                if (err) throw err;
                console.log(`${file}.html: ok...`);
            });
            fs.appendFile(path.join(htmlpath, file) + ".html", assets.footer, err => {
                if (err) throw err;
            });
        })

    })
}