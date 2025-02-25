/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'static.wikia.nocookie.net',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'logos-world.net',  // เพิ่มอันนี้เข้าไป
                pathname: '**',
            },
        ],
    },
}

export default nextConfig
