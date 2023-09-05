/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/(json|xml|csv|line)(.*)",
                destination: "/api/ip"
            }
        ]
    }
}

module.exports = nextConfig
