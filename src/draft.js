const fs = require("fs");
var msgcounter = 0;

((p) => {
  log("**************************************************");
  log("**************************************************");
  log("**************************************************");

  //const dataPath = "hits";
  //const dataPath = "hits.hits";
  //const dataPath = "hits.hits[]._source";
  //const dataPath = "hits.hits[]._source.name";
  
  const dataPath = "property3.property32[].property444[].name";

  const segments = dataPath.split(".");

  const jsonData = fs.readFileSync("es_samples/simple.json");
  //const jsonData = fs.readFileSync("es_samples/buyers.json");
  
  const data = JSON.parse(jsonData);

  let result = parseDataPath(data, segments);

  log("*** PATH: ", dataPath);
  log("*** RESULT: ", result);

  function parseDataPath(data, segments) {
    log("parseDataPath", segments);
    let part = data;
    let breakFlag = false;
    segments.forEach((segment, index, arreglo) => {
      if (!breakFlag) {
        log("segments.forEach", {segment, index, arreglo});
        const remainingSegments = segments.slice(index + 1);

        if (segment.endsWith("[]")) {
          let arraySegment = segment.substring(0, segment.length - 2);
          let arrayPart = part[arraySegment];

          let resultArrayPart = [];
          arrayPart.forEach(item => {
            resultArrayPart.push(parseDataPath(item, remainingSegments));
          });//arrayPart.

          part = resultArrayPart;
          log("Part Returned (Array)", part);
          breakFlag = true;
        } else {
          part = part[segment];
          log("Part Returned (Value)", part);
        }
      }
    });//segments.forEach
    return part;
  }//parseDataPath


  function log(message, object) {
    msgcounter++;
    let dt = new Date();
    let fullMsg = `${msgcounter} (${dt.toISOString()}): ${message}`;
    if (object) {
      console.log(fullMsg, object);
    } else {
      console.log(fullMsg);
    }
  }

})("X");
