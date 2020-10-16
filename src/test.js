const fs = require("fs");

(()=>{
  console.log("MAIN: HELLO TEST");
  
  const dpFinder = require ("./index");
  
  const filePath = "../es_samples/simple.json";
  const dataPath = "property3.property32[].property444[].name";
  
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  const result = dpFinder.Find(data, dataPath);
  
  console.log(result);

})();