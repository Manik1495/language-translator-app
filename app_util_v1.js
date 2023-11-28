
import fs from "fs";
function readFileLines(filename) {
  return new Promise((resolve, reject) => {

    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Split lines and remove '\r' from each line
        const lines = data.split('\n').map(line => line.replace('\r', ''));
        resolve(lines);
      }
    });
  });
}

readFileLines('data/output-data.txt').then(lines => {
  console.log(lines);
});

export default readFileLines;