import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import './build.mjs';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.mp4':'video/mp4','.woff2':'font/woff2','.ttf':'font/ttf','.avif':'image/avif'};
const server=createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let path=resolve(root,`.${pathname}`);
  if(path!==resolve(root)&&!path.startsWith(resolve(root)+sep)){res.writeHead(403);res.end('Forbidden');return;}
  try{if((await stat(path)).isDirectory())path=resolve(path,'index.html');}catch{}
  let data;let status=200;try{data=await readFile(path);}catch{path=resolve(root,'404.html');data=await readFile(path);status=404;}
  res.writeHead(status,{'Content-Type':mime[extname(path)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-store'});res.end(data);
 }catch{res.writeHead(400);res.end('Bad request');}
});
export {server};
const firstPort=Number(process.env.PORT||4173);
if(!Number.isInteger(firstPort)||firstPort<1||firstPort>65525)throw new Error('PORT must be a number between 1 and 65525.');
let port=firstPort;
server.once('listening',()=>console.log(`Local: http://127.0.0.1:${server.address().port}`));
server.on('error',async error=>{
 if(error.code!=='EADDRINUSE'){console.error(`Could not start Holifit: ${error.message}`);process.exitCode=1;return;}
 const address=`http://127.0.0.1:${port}`;
 try{
  const response=await fetch(address,{signal:AbortSignal.timeout(1500),redirect:'error'});
  const reader=response.body.getReader();let head='';
  try{while(head.length<8192){const {done,value}=await reader.read();if(done)break;head+=new TextDecoder().decode(value);}}finally{await reader.cancel();}
  if(response.ok&&head.includes('<title>Corporate Wellness Programs Philippines | HoliFit</title>')&&head.includes('href="/reference.css"')){
   console.log(`Holifit is already running. Open ${address}/ in your browser.`);
   console.log('You can close this extra window. The existing preview will keep running.');
   return;
  }
 }catch{/* A busy port is not assumed to belong to Holifit. */}
 if(port>=firstPort+10){console.error('No free preview port found. Close an unused preview or set PORT to another number.');process.exitCode=1;return;}
 console.log(`Port ${port} is occupied by another application. Trying ${port+1}.`);
 server.listen(++port,'127.0.0.1');
});
server.listen(port,'127.0.0.1');
