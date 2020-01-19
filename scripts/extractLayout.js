const fs = require('fs');
const path = require('path');

const scriptpath = path.join(__dirname+'/../', 'components');

exports.extract = files => {
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
    return assets;
}