const nextConfig = {
    reactStrictMode: false,
   
     async rewrites() {
       return [
   
         { source: '/Genre/History', destination: '/Pages/Genre/History' },
         { source: '/Genre/Fantasy', destination: '/Pages/Genre/Fantasy' },
         { source: '/Country/:Path*', destination: '/Pages/Country/:Path*' },
         
   
       ];
     },
   
     images: {
       domains: ['images.dog.ceo'],
     }
   
   
   
   }
   module.exports = nextConfig 
   