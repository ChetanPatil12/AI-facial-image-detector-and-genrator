import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ImageUploader from '../components/ImageUploader';
import Footer from '../components/Footer';
import FormData from 'form-data';

const DetectionPage = () => {
  const [model, setModel] = useState('Resnet-50');
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  function setImageFile(file) {
    setSelectedImage(file); 
    console.log('Image selected',file);
  }

  const handleSelectedModel = (event) => {
    setModel(event.target.value);
  };

  const handleDetection = async () => {
    try {
      if (!selectedImage) {
        alert('No image selected.');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedImage); 

      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error, Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Prediction:', data.prediction);
      setPrediction(data.prediction);


    } catch (err) {
      console.log('Error', err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='px-20 text-white'>
        <div className='flex bg-[#343434] p-2 rounded-full mt-14 w-[30vw] mx-auto text-xl'>
          <a className='flex-1 text-center py-4' href='/generate'>
            Generation
          </a>
          <p className='bg-[#CACACA] text-black flex-1 text-center rounded-full py-4 ' href=''>
            Detection
          </p>
        </div>
        <div className='text-xl text-center mt-10'>
          Choose an image to detect whether the image is AI-generated or not
        </div>
        <div className='flex gap-10 justify-center  mt-4'>
          <div className=''>
            <ImageUploader onFileSelect={setImageFile} />
          </div>
          <div className=''>
            <select onChange={handleSelectedModel} value={model} className='p-4 text-lg rounded-lg text-black'>
              <option>Resnet-50</option>
              <option>Alexnet</option>
              <option>VGG</option>
              <option>Inception</option>
              <option>Xception</option>
            </select>
          </div>
          <div className=''>
            <button onClick={handleDetection} className='bg-[#A259FF] px-20 py-4 text-lg font-bold rounded-full'>
              Detect
            </button>

            <div>
              <h4 className='mt-4'>
                {prediction}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetectionPage;
