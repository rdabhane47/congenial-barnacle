// /** @type {import('next').NextConfig} */

const nextConfig = {
    
    images: {
      domains: ['via.placeholder.com','cdn.dummyjson.com'],
    },
    env: {
      CUSTOM_URL: 'via.placeholder.com',
    },

  };
// images: {
    //   domains: ['reqres.in' ,"img.freepik.com"],
    // },
    // env: {
    //   CUSTOM_URL: 'https://reqres.in',
    // },
  
  module.exports = nextConfig;
  