/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_SANITY_PROJECT_ID: process.env.NEXT_SANITY_PROJECT_ID,
        NEXT_SANITY_DATASET: process.env.NEXT_SANITY_DATASET,
        NEXT_SANITY_TOKEN: process.env.NEXT_SANITY_TOKEN,
    },
};

export default nextConfig;
