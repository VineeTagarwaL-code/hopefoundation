import withVideos from 'next-videos';  

/** @type {import('next').NextConfig} */
const baseConfig = {

};

const videoConfig = withVideos({});  


const nextConfig = {
  ...baseConfig,
  ...videoConfig,
};

export default nextConfig;
