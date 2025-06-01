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
const createSvgIcon = (size) => {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
    <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#111" />
    <text x="${size/2}" y="${size/2 + size*0.1}" font-family="Arial, sans-serif" font-size="${size*0.43}" font-weight="bold" fill="white" text-anchor="middle">BI</text>
  </svg>`;
};

// Gerar ícones para cada tamanho
sizes.forEach(size => {
  const svgContent = createSvgIcon(size);
  const filePath = path.join(iconsDir, `icon-${size}x${size}.svg`);
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`Ícone ${size}x${size} criado: ${filePath}`);
});

console.log('Todos os ícones SVG foram gerados com sucesso!');
console.log('Para converter para PNG, use um navegador ou ferramenta online de conversão SVG para PNG.');
