import http from 'http';
import { promises as fs } from 'fs';
import path from 'path';

const PORT = Number(process.env.PORT || 3001);
const LOG_DIR = path.resolve('logs');
const LOG_FILE = path.join(LOG_DIR, 'model-requests.log');

const ensureLogDirectory = async () => {
  try {
    await fs.mkdir(LOG_DIR, { recursive: true });
  } catch (error) {
    console.error('Failed to create log directory:', error);
    throw error;
  }
};

const appendLog = async (entry) => {
  await ensureLogDirectory();
  await fs.appendFile(LOG_FILE, `${entry}\n`, 'utf-8');
};

const collectBody = (req) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString()));
    req.on('error', reject);
  });

const server = http.createServer(async (req, res) => {
  try {
    const body = await collectBody(req);
    const parsedBody = (() => {
      try {
        return JSON.parse(body);
      } catch {
        return body;
      }
    })();

    const logEntry = JSON.stringify({
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: parsedBody,
    });

    await appendLog(logEntry);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: 'ok' }));
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: 'error', message: 'unable to process request' }));
  }
});

server.listen(PORT, () => {
  console.log(`Local model provider running on http://localhost:${PORT}`);
  console.log(`Requests are appended to ${LOG_FILE}`);
});
