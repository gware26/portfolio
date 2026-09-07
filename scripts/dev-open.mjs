// Starts `next dev` on a dedicated port and automatically opens the app in
// the default browser once the server reports it is ready. A fixed, less
// common port is used (overridable via PORT env var) so this project never
// collides with other dev servers that default to port 3000.
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const nextBin = require.resolve('next/dist/bin/next');

const port = process.env.PORT || '3210';

const child = spawn(process.execPath, [nextBin, 'dev', '--port', port], {
  stdio: ['inherit', 'pipe', 'inherit'],
});

let opened = false;

function openBrowser(target) {
  if (opened) return;
  opened = true;
  const commands = {
    win32: ['cmd', ['/c', 'start', '""', target]],
    darwin: ['open', [target]],
    linux: ['xdg-open', [target]],
  };
  const [command, args] = commands[process.platform] ?? commands.linux;
  spawn(command, args, { stdio: 'ignore', detached: true }).unref();
}

child.stdout.on('data', (chunk) => {
  const text = chunk.toString();
  process.stdout.write(text);
  const match = text.match(/Local:\s+(http:\/\/localhost:\d+)/);
  if (match) openBrowser(match[1]);
});

child.on('exit', (code) => process.exit(code ?? 0));
process.on('SIGINT', () => child.kill('SIGINT'));
process.on('SIGTERM', () => child.kill('SIGTERM'));
