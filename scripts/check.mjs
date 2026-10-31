import assert from 'node:assert/strict';
import {access} from 'node:fs/promises';
import {getPages} from '../src/pages.mjs';
import {site,services} from '../src/content.mjs';
const pages=getPages();const routes=new Set(pages.map(p=>p.path));
assert.equal(routes.size,pages.length,'Routes must be unique');
for(const page of pages){
 assert.equal((page.html.match(/<h1[ >]/g)||[]).length,1,`${page.path}: exactly one h1`);
 assert.ok(page.html.includes('<main id="main">'),`${page.path}: main landmark`);
 for(const [,href] of page.html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){
  if(href.includes('.'))await access(new URL(`../public${href}`,import.meta.url));
  else assert.ok(routes.has(href),`${page.path}: broken internal link ${href}`);
 }
 for(const [,src] of page.html.matchAll(/(?:src|poster)="(\/[^"?#]+)"/g))await access(new URL(`../public${src}`,import.meta.url));
}
assert.equal(site.formEndpoint,'','Review endpoint behavior before enabling live submission');
assert.ok(services.length>0,'At least one service is configured');
assert.equal(new Set(services.map(s=>s.slug)).size,services.length,'Service slugs must be unique');
console.log(`PASS: ${pages.length} pages, internal navigation, media references, semantic headings, and disconnected integration defaults.`);
