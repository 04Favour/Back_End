const OS = require('node:os');

// const checkOS = OS.cpus();
// const checkOS = OS.freemem();
// const checkOS = OS.totalmem();
const checkOS = OS.platform();
module.exports = {checkOS} // Output: [ { model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz', speed: 2808, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } } ]