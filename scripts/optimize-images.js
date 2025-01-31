const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const path = require('path');

(async () => {
    // Optimize PNG images
    const pngFiles = await imagemin(['src/assets/images/*.png'], {
        destination: 'src/assets/images-optimized',
        plugins: [
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });

    // Convert to WebP
    const webpFiles = await imagemin(['src/assets/images/*.{jpg,png}'], {
        destination: 'src/assets/images-optimized',
        plugins: [
            imageminWebp({
                quality: 75,
                resize: {
                    width: 1200,
                    height: 800
                }
            })
        ]
    });

    console.log('Images optimized!');
    console.log('PNG files:', pngFiles.map(f => path.basename(f.destinationPath)));
    console.log('WebP files:', webpFiles.map(f => path.basename(f.destinationPath)));
})();
