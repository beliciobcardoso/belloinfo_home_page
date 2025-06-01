// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharp = require('sharp');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

// Função para criar um diretório se não existir
const ensureDirectoryExists = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

// Diretório onde os ícones serão salvos
const iconsDir = path.join(__dirname, '../public/icons');
ensureDirectoryExists(iconsDir);

// Tamanhos de ícones necessários
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Criar um SVG inline com as iniciais "BI" em um círculo
const createIconSvg = (size) => {
  const fontSize = Math.floor(size * 0.43);
  const yPosition = Math.floor(size / 2 + size * 0.1);
  
  return Buffer.from(`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
    <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#111" />
    <text x="${size/2}" y="${yPosition}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="white" text-anchor="middle">BI</text>
  </svg>`);
};

// Função assíncrona para criar os ícones
async function createIcons() {
  for (const size of sizes) {
    try {
      const svgBuffer = createIconSvg(size);
      const outputPath = path.join(iconsDir, `icon-${size}x${size}.png`);
      
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`Ícone ${size}x${size} criado: ${outputPath}`);
    } catch (error) {
      console.error(`Erro ao criar o ícone ${size}x${size}:`, error);
    }
  }
}

// Executar a função
createIcons().then(() => {
  console.log('Todos os ícones PNG foram gerados com sucesso!');
}).catch(err => {
  console.error('Erro ao gerar os ícones:', err);
});
