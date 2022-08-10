module.exports = {
    async rewrites() {
        return [
            {
                source: "/(json|xml|csv|line)(.*)",
                destination: "/api/ip"
            }
        ]
    }
}