import { spawn } from 'child_process';

const auth = spawn('npx', ['json-server', 'auth-db.json', '--port', '3001'], { stdio: 'inherit' });
const data = spawn('npx', ['json-server', 'data-db.json', '--port', '3002'], { stdio: 'inherit' });

auth.on('error', (err) => console.error('Auth server error:', err));
data.on('error', (err) => console.error('Data server error:', err));

console.log('Auth server running on http://localhost:3001');
console.log('Data server running on http://localhost:3002');