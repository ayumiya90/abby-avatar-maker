const sharp = require('sharp');
const path = require('path');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#06C755"/>
  <text x="600" y="290" text-anchor="middle" font-size="110" font-weight="900" fill="#fff"
        font-family="'PingFang TC','Microsoft JhengHei','Noto Sans TC','Helvetica',sans-serif">
    LINE 大頭照產生器
  </text>
  <text x="600" y="390" text-anchor="middle" font-size="38" fill="#fff" opacity="0.9"
        font-family="'PingFang TC','Microsoft JhengHei','Noto Sans TC','Helvetica',sans-serif">
    免費 · 自訂底色 · 文字 · LOGO · 一鍵下載
  </text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, 'og.png'))
  .then(info => console.log('Generated og.png:', info.size, 'bytes', info.width + 'x' + info.height))
  .catch(err => { console.error('Failed:', err); process.exit(1); });
