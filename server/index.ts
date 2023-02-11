import { createServer as createServerHttp } from 'http'
import { createServer as createServerHttps } from 'https'
import { parse } from 'url'
import next from 'next'
import * as fs from "fs";

const port = parseInt(process.env.PORT || '3001', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const createServer = dev ? createServerHttp : createServerHttps;

let options = {};
if (!dev) {
  options = {
    key: fs.readFileSync('/var/www/blockgamings/blockgaming-client/ssl/blockgamings.com.key'),
    cert: fs.readFileSync('/var/www/blockgamings/blockgaming-client/ssl/blockgamings.com.crt'),
  };
}

app.prepare().then(() => {
  createServer(options, (req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port);
})
