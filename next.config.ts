import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false, // Remove o header X-Powered-By
  reactStrictMode: true, // Habilita o modo estrito do React
  // swcMinify foi removido pois não é mais necessário especificar (já é o padrão no Next.js 13+)
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"], // Mantém console.error e console.warn em produção
          }
        : false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60, // Cache de imagens por 60 segundos
    domains: ["belloinfo.com.br"], // Domínios permitidos para imagens externas
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Tamanhos de dispositivos para otimização
  },
  experimental: {
    // Verificamos quais opções experimentais são suportadas no Next.js 15.3.3
    optimizePackageImports: ["lucide-react"], // Otimiza importações de pacotes específicos
    serverActions: {
      bodySizeLimit: "2mb", // Limite de tamanho para server actions
    },
    // Removida a opção optimizeCss que pode não ser suportada na versão atual
  },
  webpack: (config) => {
    // Adicione aqui suas configurações personalizadas do webpack, se necessário
    return config;
  },
};

export default nextConfig;
