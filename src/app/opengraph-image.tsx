import { ImageResponse } from 'next/og';
import './opengraph-image.css';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'BelloInfo - Tecnologia da Informação';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    // Fonte para usar no OG Image
    const interRegular = fetch(
        new URL('./Inter-Regular.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());

    const interBold = fetch(
        new URL('./Inter-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div className="container">
                <div className="title">
                    Bello<span className="title-span">Info</span>
                </div>
                <div className="description">
                    Soluções em Tecnologia da Informação para o seu Negócio
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
            fonts: [
                {
                    name: 'Inter',
                    data: await interRegular,
                    style: 'normal',
                    weight: 400,
                },
                {
                    name: 'Inter',
                    data: await interBold,
                    style: 'normal',
                    weight: 700,
                },
            ],
        }
    );
}
