const fs = require("fs");
const log = require("./log").log;

(() => {
  function find(dataObject, dataPath) {
    log("findInDataPath", {dataObject, dataPath});

    const segments = dataPath.split(".");

    return findSegments(dataObject, segments);
  }

/**
 * Finds the provided segments recursively inside the provided data object
 * @param {type} data Dataobject
 * @param {type} segments Segments Array
 * @returns {value, object or array}
 */
  function findSegments(data, segments) {
    let part = data;
    let breakFlag = false;
    segments.forEach((segment, index, arreglo) => {
      if (!breakFlag) {
        const remainingSegments = segments.slice(index + 1);

        if (segment.endsWith("[]")) {
          let arraySegment = segment.substring(0, segment.length - 2);
          let arrayPart = part[arraySegment];

          let resultArrayPart = [];
          arrayPart.forEach(item => {
            resultArrayPart.push(findSegments(item, remainingSegments));
          });//arrayPart.forEach

          part = resultArrayPart;
          breakFlag = true;
        } else {
          part = part[segment];
        }
      }
    });//segments.forEach
    return part;
  }//parseDataPath

  exports.Find = find;
})();