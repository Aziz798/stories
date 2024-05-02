/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {hostname:"cdn.pixabay.com"},
            {hostname:"utfs.io"}
        ]
    },
    env:{
        NEON_DATABASE_URL:process.env.NEON_DATABASE_URL,
        AI_API_KEY:process.env.AI_API_KEY
    }
};

export default nextConfig;
