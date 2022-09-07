const fsp = require('fs/promises')

const sourceDir = __dirname + '/source/';
const targetDir = __dirname + '/target/';


function copyFolder(source, target) {
    fsp.readdir(source, {withFileTypes: true})
        .then(files => {
            return new Promise( resolve => {
                files.forEach(file => {

                    if (file.isDirectory()) {
                        console.log(file.name)
                         fsp.mkdir(target +'/'+ file.name, {recursive: true})
                             .then(() => copyFolder(source +'/'+ file.name, target +'/'+ file.name))
                    }
                });
                resolve()
             })
            .then( ()=>{
                files.forEach(file => {
                    if (file.isFile()) {
                        //console.log(file.name)
                        fsp.copyFile(source +'/'+ file.name, target +'/'+ file.name, 1)
                            .then(() => console.log(file.name + ' copy result - ok!'))
                            .catch(err => console.log('Copy failed by reason', err));
                    }
                });
            })
        })
        .catch(err => {
            if (err !== undefined) console.log(err);
        });
}

copyFolder(sourceDir, targetDir)

// fsp.mkdir(__dirname + targetFolder + assetsFolder)
//     .then(() => copyFolder(__dirname + assetsFolder, __dirname + targetFolder + assetsFolder))
//     .catch(err => console.log('Folder making error by reason', err.code));