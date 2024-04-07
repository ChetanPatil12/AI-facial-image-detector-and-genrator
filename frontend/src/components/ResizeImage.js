// export default function resizeImage(image) {
//   return new Promise((resolve, reject) => {
//       if (!image || !image.width || !image.height) {
//           reject("Invalid image input");
//           return;
//       }

//       // Check if image is already square
//       if (image.width === image.height) {
//           // If square, resize directly to 1000x1000
//           const canvas = document.createElement('canvas');
//           canvas.width = 1000;
//           canvas.height = 1000;
//           const ctx = canvas.getContext('2d');
//           ctx.drawImage(image, 0, 0, 1000, 1000);
//           resolve(canvas.toDataURL('image/jpeg')); // Return the resized image
//       } else {
//           // If not square, calculate the square dimension
//           const size = Math.min(image.width, image.height);
//           const xOffset = (image.width - size) / 2;
//           const yOffset = (image.height - size) / 2;

//           // Create a temporary canvas to draw the cropped image
//           const tempCanvas = document.createElement('canvas');
//           tempCanvas.width = size;
//           tempCanvas.height = size;
//           const tempCtx = tempCanvas.getContext('2d');
//           tempCtx.drawImage(image, -xOffset, -yOffset);

//           // Create a new canvas for resizing to 1000x1000
//           const canvas = document.createElement('canvas');
//           canvas.width = 1000;
//           canvas.height = 1000;
//           const ctx = canvas.getContext('2d');
//           ctx.drawImage(tempCanvas, 0, 0, 1000, 1000);
//           resolve(canvas.toDataURL('image/jpeg')); // Return the resized image
//       }
//   });
// }



export default function resizeImage(image) {
    return new Promise((resolve, reject) => {
        if (!image || !image.width || !image.height) {
            reject("Invalid image input");
            return;
        }

        // Check if image is already square
        if (image.width === image.height) {
            // If square, resize directly to 1000x1000
            const canvas = document.createElement('canvas');
            canvas.width = 1024;
            canvas.height = 1024;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, 1000, 1000);
            canvas.toBlob((blob) => {
                const resizedImage = new File([blob], image.name, { type: image.type });
                resolve(resizedImage); // Return the resized image
            }, 'image/jpeg');
        } else {
            // If not square, calculate the square dimension
            const size = Math.min(image.width, image.height);
            const xOffset = (image.width - size) / 2;
            const yOffset = (image.height - size) / 2;

            // Create a temporary canvas to draw the cropped image
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = size;
            tempCanvas.height = size;
            const tempCtx = tempCanvas.getContext('2d');
            tempCtx.drawImage(image, -xOffset, -yOffset);

            // Create a new canvas for resizing to 1000x1000
            const canvas = document.createElement('canvas');
            canvas.width = 1000;
            canvas.height = 1000;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(tempCanvas, 0, 0, 1000, 1000);
            canvas.toBlob((blob) => {
                const resizedImage = new File([blob], image.name, { type: image.type });
                resolve(resizedImage); // Return the resized image
            }, 'image/jpeg');
        }
    });
}
