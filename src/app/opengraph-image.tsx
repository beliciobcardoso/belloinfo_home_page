import { ImageResponse } from 'next/og';

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
            <div
                style={{
                    fontSize: 48,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 48,
                }}
            >
                <div style={{
                    display: 'flex',
                    fontSize: 64,
                    fontWeight: 'bold',
                    color: '#000',
                    marginBottom: 24
                }}>
                    Bello<span style={{ color: '#0066CC' }}>Info</span>
                </div>
                <div style={{
                    display: 'flex',
                    fontSize: 36,
                    textAlign: 'center',
                    color: '#666',
                    maxWidth: 800
                }}>
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
