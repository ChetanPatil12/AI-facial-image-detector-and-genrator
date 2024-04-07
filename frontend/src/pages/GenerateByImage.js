import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader';
import ImageUploader from '../components/ImageUploader';
import resizeImage from '../components/ResizeImage';
import FormData from 'form-data';
import Footer from '../components/Footer';


const GenerateByImage = () => {
    const [selectedImagePreview, setSelectedImagePreview] = useState(null);

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resizedImg , setResizedImg] = useState(null);
    const engineId = 'stable-diffusion-xl-1024-v1-0'
    const apiHost = 'https://api.stability.ai'
    const apiKey = process.env.REACT_APP_STABILITY_API_KEY;
    const prompt = 'create extreamly realistic image of this person and make it so real that it looks like that the picture is taken from the camera in real life'
    
    if (!apiKey) throw new Error('Missing Stability API key.')

    useEffect(() => {
        if (selectedImagePreview) {
            resizeImage(selectedImagePreview)
                .then((resizedImg) => {
                    setResizedImg(resizedImg);
                    console.log(resizedImg)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [selectedImagePreview]);

    const handleFileSelect = (file) => {
        if (file) {
            console.log(file)
            const imgObject = new Image();
            imgObject.onload = function () {
                setSelectedImagePreview(imgObject);
            };
            imgObject.src = URL.createObjectURL(file);
        }
    };



    
    const generateImage = async ()=>{
        try {
            console.log("inside genrateImage function");
            setLoading(true); 
            if (!apiKey) {
              throw new Error('Missing Stability API key.');
            }

            const formData = new FormData()

            if(!resizedImg){
                console.error("problem with resizing image.");
                return
            } 

            formData.append('init_image', resizedImg);
            formData.append('init_image_mode', 'IMAGE_STRENGTH')
            formData.append('image_strength', 0.35)
            formData.append('text_prompts[0][text]', prompt)
            formData.append('cfg_scale', 7)
            formData.append('samples', 1)
            formData.append('steps', 30)

        const response = await fetch(
            `${apiHost}/v1/generation/${engineId}/image-to-image`,
            {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${apiKey}`,
                },
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error(`Non-200 response: ${await response.text()}`)
          }

        const responseJSON = await response.json();
      
        const newImages = responseJSON.artifacts.map((image, index) => ({
          index,
          src: `data:image/png;base64,${image.base64}`,
        }));

        setImages(newImages);
        } catch (error) {
            console.error('Error generating image:', error.message);
        }finally{
            setLoading(false);
        }

    }



    const createImage = () => {
        if (!resizedImg ) {
            alert("No image selected");
            console.error('No image selected.');
            return;
        }

        generateImage();
    }








  return (
<div>
      <Navbar/>
      <div className='text-white px-20'>
        <div className='flex bg-[#343434] p-2 rounded-full mt-14 w-[30vw] mx-auto text-xl'>
          <p className='bg-[#CACACA] text-black flex-1 text-center rounded-full py-4'>Generation</p>
          <a className='flex-1 text-center py-4' href="/detection">Detection</a>
        </div>
        <div className='flex text-white'>
            <div className='flex-1'>
                <h1 className='text-center mt-4 text-2xl font-bold'>Select image from your device</h1>
                <div className='px-10 pt-10 w-full flex justify-center'>
                    <ImageUploader onFileSelect={handleFileSelect}/>
                </div>
                <div className='w-full text-center'>
                    <button onClick={createImage} className='bg-[#A259FF] px-20 py-4 text-lg font-bold rounded-full mt-4 '>
                        Generate
                    </button>
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='text-center mt-4 text-2xl font-bold'>Generated Image</h1>
                <div className='w-full h-[412px] p-10 '>
                    <div className='w-[412px] h-[412px] bg-[#343434] drop-shadow-lg mx-auto rounded-lg'>
                    {loading ? (
                        <div className='w-full h-full flex flex-col justify-center'>
                            <Loader/>
                        </div>
                        ) : (
                        images.map(({ index, src }) => (
                            <img key={index} src={src} alt={`Generated Image ${index}`} />
                        ))
                        )}
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
      </div>
  )
}

export default GenerateByImage
