const chars = ['\r|   ', '\r/    ', '\r-    ', '\r\    ', '\r|    ', '\r|   ', '\r/    ', '\r-    ', '\r\    ', '\r|    '];
let timer = 0;

for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`${chars[i]}`);
  }, timer += 200);
}
setTimeout(() => { process.stdout.write('\n'); }, timer);