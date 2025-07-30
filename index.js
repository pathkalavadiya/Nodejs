// 
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
   const log = `${Date.now()}: New request received\n`;  // Fixed Date.now()
   fs.appendFile('log.txt', log, (err) => {
      if (err) {
         console.error("Error writing to log file", err);
         res.statusCode = 500;
         res.end("Internal Server Error");
         return;
      }
      res.end("Hello from the server");
   });
});

server.listen(3000, () => {
   console.log("Server is running on port 3000");
});
