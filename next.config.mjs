/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {hostname:"cdn.pixabay.com"},
            {hostname:"utfs.io"}
        ]
    }
};

export default nextConfig;
