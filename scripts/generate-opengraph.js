/* eslint-disable @typescript-eslint/no-require-imports */
 
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Função para criar um diretório se não existir
const ensureDirectoryExists = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

async function createOpenGraphImage() {
  // Criar a imagem OpenGraph
  const width = 1200;
  const height = 630;
  
  console.log('Iniciando criação de imagem OpenGraph...');
  
  // Criar um SVG com o texto e elementos visuais para o OpenGraph
  const svgString = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${width}" height="${height}" fill="#f8f9fa" />
      <rect x="0" y="0" width="${width}" height="${height * 0.4}" fill="#111" />
      <text x="${width * 0.5}" y="${height * 0.25}" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">BelloInfo</text>
      <text x="${width * 0.5}" y="${height * 0.6}" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#333" text-anchor="middle">Soluções em Tecnologia da Informação</text>
      <text x="${width * 0.5}" y="${height * 0.75}" font-family="Arial, sans-serif" font-size="36" fill="#555" text-anchor="middle">Desenvolvimento Web • Suporte Técnico • Hospedagem</text>
    </svg>
  `;
  
  console.log('SVG criado, convertendo para buffer...');
  const svgBuffer = Buffer.from(svgString);
  
  const outputPath = './public/opengraph-image.png';
  console.log(`Tentando salvar em: ${outputPath}`);

  try {
    console.log('Iniciando processamento com sharp...');
    await sharp(svgBuffer)
      .png()
      .toFile(outputPath);
    
    // Verificar se o arquivo foi criado
    if (fs.existsSync(outputPath)) {
      console.log(`Imagem OpenGraph gerada com sucesso em ${outputPath}!`);
      console.log(`Tamanho do arquivo: ${fs.statSync(outputPath).size} bytes`);
    } else {
      console.error(`Arquivo não encontrado após tentativa de criação: ${outputPath}`);
    }
  } catch (error) {
    console.error('Erro ao gerar a imagem OpenGraph:', error);
  }
}

// Executar a função
createOpenGraphImage();
