const request =  require('request');
const fs = require('fs');

const argv = process.argv.slice(2);
const url = argv[0];
const filePath = argv[1];
request(url, (error, response, body) => {
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err)
      return
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
    //file written successfully
  })
  // console.log('response', response);
  console.log('body', body);

});