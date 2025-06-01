import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 18,
    height: 18,
};

export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                className="flex h-full w-full items-center justify-center bg-[#111] text-white font-bold rounded-full font-['Arial', 'sans-serif']"
            >
                BI
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    );
}
