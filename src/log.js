(() => {
  let quiet = false;
  let msgcounter = 0;

  exports.log = (message, object) => {
    if (quiet) {
      return;
    }
    msgcounter++;
    let dt = new Date();
    let fullMsg = `${msgcounter} (${dt.toISOString()}): ${message}`;
    if (object) {
      console.log(fullMsg, object);
    } else {
      console.log(fullMsg);
    }
  };
})();