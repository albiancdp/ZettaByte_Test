import dotenv from 'dotenv';
import http from 'http';
import https from 'https';
import fs from 'fs';
import appDev from './src/app';
import appProd from './dist/app';
import configs from './src/configs/global_config';

const app = configs.node_env === 'production' ? appProd : appDev;
const PORT = configs.server.port;
const HTTPS_ENABLE = configs.server.https_enable;
const SSL_CERT_DIR = configs.server.ssl_cert_dir;

dotenv.config();
app.set('port', PORT);

if (HTTPS_ENABLE) {
  const httpsOptions = {
    key: fs.readFileSync(`${SSL_CERT_DIR}/key.pem`),
    cert: fs.readFileSync(`${SSL_CERT_DIR}/cert.pem`),
    ca: [
      fs.readFileSync(`${SSL_CERT_DIR}/chain.pem`),
      fs.readFileSync(`${SSL_CERT_DIR}/fullchain.pem`)
    ]
  };
  https.createServer(httpsOptions, app).listen(PORT, (err) => {
    if (err) {
      process.exit(1);
    } else {
      //console.log(`Server running on port ${PORT}`);
    }
  });
} else {
  http.createServer(app).listen(PORT, (err) => {
    if (err) {
      process.exit(1);
    } else {
      //console.log(`Server running on port ${PORT}`);
    }
  });
};
