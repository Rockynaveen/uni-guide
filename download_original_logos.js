import fs from 'fs';
import path from 'path';
import https from 'https';
import dns from 'dns';
import { fileURLToPath } from 'url';

dns.setServers(['8.8.8.8']);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logosDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

const customLookup = (hostname, options, callback) => {
  dns.resolve4(hostname, (err, addresses) => {
    if (err || !addresses || addresses.length === 0) {
      dns.resolve6(hostname, (err2, addresses2) => {
        if (err2 || !addresses2 || addresses2.length === 0) {
          callback(err || err2 || new Error(`ENOTFOUND ${hostname}`));
        } else {
          if (options.all) {
            callback(null, addresses2.map(addr => ({ address: addr, family: 6 })));
          } else {
            callback(null, addresses2[0], 6);
          }
        }
      });
    } else {
      if (options.all) {
        callback(null, addresses.map(addr => ({ address: addr, family: 4 })));
      } else {
        callback(null, addresses[0], 4);
      }
    }
  });
};

const universities = [
  { id: "northumbria", domain: "northumbria.ac.uk" },
  { id: "uel", domain: "uel.ac.uk" },
  { id: "derby", domain: "derby.ac.uk" },
  { id: "regent", domain: "rcl.ac.uk" },
  { id: "yorksj", domain: "yorksj.ac.uk" },
  { id: "arden", domain: "arden.ac.uk" },
  { id: "ulaw", domain: "law.ac.uk" },
  { id: "bpp", domain: "bpp.com" },
  { id: "teesside", domain: "tees.ac.uk" },
  { id: "walbrook", domain: "walbrook.ac.uk", fallbackDomain: "libf.ac.uk" },
  { id: "ucb", domain: "ucb.ac.uk" },
  { id: "ulster", domain: "ulster.ac.uk" },
  { id: "greenwich", domain: "gre.ac.uk" }
];

function download(domain, dest) {
  return new Promise((resolve, reject) => {
    const url = `https://unavatar.io/${domain}`;
    const file = fs.createWriteStream(dest);
    
    https.get(url, { lookup: customLookup }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Status Code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const uni of universities) {
    const dest = path.join(logosDir, `${uni.id}.png`);
    console.log(`Downloading original logo for ${uni.id} from domain: ${uni.domain}...`);
    try {
      await download(uni.domain, dest);
      console.log(`Successfully downloaded ${uni.id}.png (size: ${fs.statSync(dest).size} bytes)`);
    } catch (err) {
      console.warn(`Failed downloading for domain ${uni.domain}: ${err.message}`);
      if (uni.fallbackDomain) {
        console.log(`Trying fallback domain ${uni.fallbackDomain} for ${uni.id}...`);
        try {
          await download(uni.fallbackDomain, dest);
          console.log(`Successfully downloaded fallback ${uni.id}.png (size: ${fs.statSync(dest).size} bytes)`);
        } catch (fbErr) {
          console.error(`Failed fallback too: ${fbErr.message}`);
        }
      }
    }
  }
}

main().then(() => console.log("All logo downloads finished."));
