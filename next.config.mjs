/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'pokeguessr.es' }],
        destination: 'https://www.pokeguessr.es/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'www.pokeguessr.es' },
          { type: 'header', key: 'x-forwarded-proto', value: 'http' },
        ],
        destination: 'https://www.pokeguessr.es/:path*',
        permanent: true,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/**',
      },
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
      },
    ],
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig