const fs = require('fs');
var imageDir = './images';

fs.readdir(imageDir, (err, fileNames) => {
  fileNames.forEach((fileName) => {

    fs.readFile(`${imageDir}/${fileName}`, 'base64', (err, base64Data) => {

      if (err) {
        console.log('err')
      } else {
        var variant = {
          "name":fileName,
          "png":base64Data
        }
      };

      let data = JSON.stringify(variant, null, 2);

      fs.appendFile('data.json', data, (err) => {
          if (err) throw err;
          console.log('Data written to file');
      });


    });

  });
});
