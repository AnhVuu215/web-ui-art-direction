const fs=require('node:fs');
const http=require('node:http');
const path=require('node:path');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.ttf':'font/ttf','.png':'image/png','.jpg':'image/jpeg'};
async function serve(root,port=0){
 const server=http.createServer((req,res)=>{let file;try{file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));}catch{res.writeHead(400).end();return;}if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}fs.readFile(file,(error,data)=>{if(error){res.writeHead(404).end();return;}res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(data);});});
 await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(port,'127.0.0.1',resolve);});
 return {server,base:`http://127.0.0.1:${server.address().port}`,close:()=>new Promise(resolve=>server.close(resolve))};
}
module.exports={serve};
if(require.main===module)serve(path.resolve(__dirname,'..'),Number(process.argv[2])||8046).then(({base})=>console.log(`${base}/evals/benchmark/review/index.html`)).catch(error=>{console.error(error);process.exitCode=1;});
