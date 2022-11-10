/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: 'custom',
        imageSizes: [64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    env: {
        nextImageExportOptimizer_imageFolderPath: 'public/images',
        nextImageExportOptimizer_exportFolderPath: 'out',
        nextImageExportOptimizer_quality: 80,
        nextImageExportOptimizer_storePicturesInWEBP: true,

        // If you do not want to use blurry placeholder images, then you can set
        // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
        // `placeholder="none"` to all <ExportedImage> components.
        //
        // If nextImageExportOptimizer_generateAndUseBlurImages is false and you
        // forget to set `placeholder="none"`, you'll see 404 errors for the missing
        // placeholder images in the console.
        nextImageExportOptimizer_generateAndUseBlurImages: false,
    },
    assetPrefix: './',
};

module.exports = nextConfig;
