const http = require("http");
const path = require("path");
const handler = require("serve-handler");

const port = Number(process.env.PORT) || 3000;
const host = "0.0.0.0";

const server = http.createServer((request, response) => {
  handler(request, response, {
    public: path.join(__dirname, "out"),
    cleanUrls: true,
    rewrites: [{ source: "**", destination: "/index.html" }],
  });
});

server.listen(port, host, () => {
  console.log(`Static server running on http://${host}:${port}`);
});
