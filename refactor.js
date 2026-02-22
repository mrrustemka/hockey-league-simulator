const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const dir = path.join(__dirname, 'src', 'data', 'Teams');
const files = fs.readdirSync(dir);

files.forEach(f => {
  if (!f.endsWith('.ts')) return;
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/(\n\s+)id:\s*['"`]?[\w\-]+['"`]?\s*,/g, (m, p1) => {
    return p1 + `id: '${crypto.randomUUID()}',`;
  });
  fs.writeFileSync(p, content);
  console.log(f + ' updated');
});
