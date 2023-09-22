exports = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
      },
    ],
    domains: ["https://tailwindui.com/img/logos/"],
  }
};
