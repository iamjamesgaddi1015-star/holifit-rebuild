import {createServer} from 'node:http';
import {once} from 'node:events';
import assert from 'node:assert/strict';
const occupied=createServer((req,res)=>res.end('Synthetic unrelated application'));
occupied.listen(0,'127.0.0.1');await once(occupied,'listening');
process.env.PORT=String(occupied.address().port);
let preview;
try{
 ({server:preview}=await import('./server.mjs'));
 // EADDRINUSE is handled by the preview; don't reject this wait on that expected event.
 await new Promise(resolve=>preview.once('listening',resolve));
 assert.equal(preview.address().port,Number(process.env.PORT)+1);
 const response=await fetch(`http://127.0.0.1:${preview.address().port}/`);
 assert.equal(response.status,200);await response.body.cancel();
 console.log('PASS: unrelated occupied port is preserved; Holifit starts on the next port.');
}finally{preview?.closeAllConnections();preview?.close();occupied.closeAllConnections();occupied.close();}
