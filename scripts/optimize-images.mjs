import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
