const extractLayout = dir => {
    fs.readdir(dir, (err, files) => {

        if(err) throw err;
        console.log(files);
        files.forEach(file =>{
            fs.readFile(path.join(scriptpath, file), (err, data)=> {
                if(err) throw err;
                if(file == 'footer.txt');
            });
        })
    })
}