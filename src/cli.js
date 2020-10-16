  const fs = require("fs");
  const dpFinder = require("./index");
  const log = require("./log").log;
  
  let args = process.argv;
  let caller = args[0];
  let script = args[1];
  let jsonFilePath = args[2];
  let dataPathString = args[3];

  let msgcounter = 0;
  if (jsonFilePath && dataPathString && script.indexOf("cli.js") !== -1) {
    log("---------------------------------------------------------------");
    log("---------------------------------------------------------------");
    log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");

    log("WELCOME to data-path-finder CLI Tool");
    log("Finding Data Path in JSON");
    log(`File Path: ${jsonFilePath}`);
    log(`Data Path: ${dataPathString}`);

    const jsonData = fs.readFileSync(jsonFilePath);
    const data = JSON.parse(jsonData);

    const result = dpFinder.Find(data, dataPathString);

    log("FINAL RESULT", result);
    log("ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ");
    log("---------------------------------------------------------------");
    log("---------------------------------------------------------------");
  }