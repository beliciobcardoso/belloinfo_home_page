'use client';

import { useEffect } from 'react';

export default function PreloadImages() {
    useEffect(() => {
        // Lista de imagens críticas para pré-carregar para melhorar o LCP (Largest Contentful Paint)
        const imagesToPreload = [
            '/images/hero-image.svg',
            '/logo.svg',
            '/window.svg',
            '/globe.svg',
            '/file.svg',
        ];

        // Função para pré-carregar uma imagem
        const preloadImage = (src: string) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        };

        // Pré-carrega todas as imagens críticas
        imagesToPreload.forEach(preloadImage);

        // Limpa os links de preload ao desmontar
        return () => {
            const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
            preloadLinks.forEach((link) => {
                document.head.removeChild(link);
            });
        };
    }, []);

    return null;
}
