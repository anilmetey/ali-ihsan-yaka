const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3456);
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const urlParts = req.url.split('?');
  let reqPath;
  try {
    reqPath = decodeURI(urlParts[0]);
  } catch (_) {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }

  // Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Consultation details are drafted in the visitor's email app; the website
  // does not accept or persist form submissions.
  if (reqPath === '/api/consultation' || reqPath === '/api/consultations') {
    res.writeHead(410, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ success: false, error: 'Form gönderimleri bu siteye alınmamaktadır.' }));
    return;
  }

  // --------------------------------------------------------------------------
  // STATIC FILE SERVING WITH CLEAN URL RESOLUTION
  // --------------------------------------------------------------------------
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  // Use one canonical service URL.
  if (reqPath === '/hizmetler' || reqPath === '/hizmetler.html') {
    res.writeHead(301, { Location: '/klinik-pratik.html' });
    res.end();
    return;
  }

  let filePath = path.resolve(PUBLIC_DIR, `.${reqPath}`);
  if (filePath !== PUBLIC_DIR && !filePath.startsWith(PUBLIC_DIR + path.sep)) {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }
  const requestedRelativePath = path.relative(PUBLIC_DIR, filePath).split(path.sep).join('/');
  const pathSegments = requestedRelativePath.split('/');
  const privateDocument = /(?:^|\/)(?:CV_Ali_Ihsan_Yaka_UPDATED|Mission order_employment|YAKA__Ali_MISSION_ORDER|certificate-trust-safety-advanced-practitioner[^/]*)\.pdf$/i.test(requestedRelativePath);
  if (privateDocument || pathSegments.some(segment => segment === 'data' || segment.startsWith('.')) || /\.(?:db|sqlite|sqlite3|jsonl)$/i.test(requestedRelativePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }
  
  // If file doesn't exist, check with .html extension
  if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  if (!fs.existsSync(filePath)) {
    const publicRoot = path.resolve(PUBLIC_DIR, 'public');
    filePath = path.resolve(publicRoot, `.${reqPath}`);
    if (filePath !== publicRoot && !filePath.startsWith(publicRoot + path.sep)) {
      res.writeHead(400);
      res.end('Bad request');
      return;
    }
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    const notFoundPage = path.join(PUBLIC_DIR, '404.html');
    if (fs.existsSync(notFoundPage)) {
      res.end(fs.readFileSync(notFoundPage));
    } else {
      res.end('<h1>404 Not Found</h1>');
    }
    return;
  }

  let stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    filePath = path.join(filePath, 'index.html');
    stat = fs.statSync(filePath);
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Cache-Control': 'no-cache'
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Website server running at http://127.0.0.1:${PORT}`);
});
