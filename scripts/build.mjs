import {mkdir,cp,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {getPages} from '../src/pages.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const dist=new URL('../dist/',import.meta.url);
await mkdir(dist,{recursive:true});
await cp(new URL('../public/',import.meta.url),dist,{recursive:true});
for(const page of getPages()){
 const dir=new URL(`.${page.path}`,dist);
 await mkdir(dir,{recursive:true});
 await writeFile(new URL('index.html',dir),page.html);
}
await writeFile(new URL('404.html',dist),getPages().find(p=>p.path==='/404/').html);
console.log(`Built ${getPages().length} static pages in ${root}dist`);
