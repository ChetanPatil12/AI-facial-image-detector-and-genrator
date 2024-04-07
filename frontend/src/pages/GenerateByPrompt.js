import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const GenerateByPrompt = () => {
  //prompt generation
  const [selectedAge, setSelectedAge] = useState("1-10 years old");
  const [Age, setAge] = useState(1);
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedEthnicity, setSelectedEthnicity] = useState("Asian");
  const [selectModel, setSelectModel] = useState("Stability")
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_STABILITY_API_KEY;

  const handleAgeChange = (e) => {
    if (e.target.value === "1-10 years old") {
      const arr = [1, 3, 6, 8, 10];
      const Index = Math.floor(Math.random() * arr.length);
      setAge(arr[Index]);
      setSelectedAge(e.target.value);
    } else if (e.target.value === "10-18 years old") {
      const arr = [10, 13, 16, 18];
      const Index = Math.floor(Math.random() * arr.length);
      setAge(arr[Index]);
      setSelectedAge(e.target.value);
    } else if (e.target.value === "18-25 years old") {
      const arr = [18, 22, 25];
      const Index = Math.floor(Math.random() * arr.length);
      setAge(arr[Index]);
      setSelectedAge(e.target.value);
    } else if (e.target.value === "25-35 years old") {
      const arr = [25, 28, 31, 35];
      const Index = Math.floor(Math.random() * arr.length);
      setAge(arr[Index]);
      setSelectedAge(e.target.value);
    } else if (e.target.value === "35-50 years old") {
      const arr = [36, 38, 41, 44, 48, 50];
      const Index = Math.floor(Math.random() * arr.length);
      setAge(arr[Index]);
      setSelectedAge(e.target.value);
    } else {
      const arr = [52, 58, 61, 66, 70, 75, 80, 85];
      const Index = Math.floor(Math.random() * arr.length);
      setAge(arr[Index]);
      setSelectedAge(e.target.value);
    }
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleEthnicityChange = (e) => {
    setSelectedEthnicity(e.target.value);
  };

  const handleModelChange = (e)=>{
    setSelectModel(e.target.value);
  }

  const generateImageByStability = async () => {
    try {
      setLoading(true);
      if (!apiKey) {
        throw new Error("Missing Stability API key.");
      }

      const response = await fetch(
        `https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            text_prompts: [
              {
                text: prompt,
              },
            ],
            cfg_scale: 7,
            height: 1024,
            width: 1024,
            steps: 30,
            samples: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Non-200 response: ${await response.text()}`);
      }

      const responseJSON = await response.json();

      const newImages = responseJSON.artifacts.map((image, index) => ({
        index,
        src: `data:image/png;base64,${image.base64}`,
      }));

      setImages(newImages);
    } catch (error) {
      console.error("Error generating image:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const createPromptAndRun = () => {

    //  const para  = `Create a strikingly realistic image of an individual who is ${Age} year old ${selectedGender}, belonging to the ${selectedEthnicity} community, facing the camera directly. Emphasize natural facial features, expression, and lighting, aiming to produce an image that convincingly simulates an unaltered photograph taken in real-life conditions, without a blurred background`
    const para = `Generate a highly realistic portrait of a person, aged ${Age}, with a ${selectedGender} identity, representing the ${selectedEthnicity}. The individual should be depicted facing the camera directly, with a focus on capturing natural facial features, expression, and lighting. The aim is to produce an image that authentically simulates an unaltered photograph taken in real-life conditions, without any background blurring`
    setPrompt(para);

    //generateImage();
  };

  useEffect(() => {
    if (prompt.trim() !== "") {
      console.log(prompt);
      // if(selectModel === "Stability"){
        generateImageByStability();
      // }
      
    }
  }, [prompt]);

  return (
    <div>
      <Navbar />
      <div className="text-white px-12">
        <div className="flex bg-[#343434] p-2 rounded-full mt-14 w-[30vw] mx-auto text-xl">
          <p className="bg-[#CACACA] text-black flex-1 text-center rounded-full py-4">
            Generation
          </p>
          <a className="flex-1 text-center py-4" href="/detection">
            Detection
          </a>
        </div>
        <div className="flex">
          <div className="mt-10 w-[50%] px-10 ">
            <p className="text-2xl font-semibold text-center">
              Generate your image
            </p>
            <div className="flex gap-10 mt-4 font-semibold justify-around">
              <div className="flex-1/3 text-black">
                <p className="text-white mb-2">Age:</p>
                <select
                  onChange={handleAgeChange}
                  value={selectedAge}
                  className="p-2 rounded-lg "
                >
                  <option>1-10 years old</option>
                  <option>10-18 years old</option>
                  <option>18-25 years old</option>
                  <option>25-35 years old</option>
                  <option>35-50 years old</option>
                  <option>50+ years old</option>
                </select>
              </div>
              <div className="flex-1/3 text-black">
                <p className="text-white mb-2">Gender:</p>
                <select
                  onChange={handleGenderChange}
                  value={selectedGender}
                  className="p-2 rounded-lg "
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="flex-1/3 text-black">
                <p className="text-white mb-2">Ethnicity:</p>
                <select
                  onChange={handleEthnicityChange}
                  value={selectedEthnicity}
                  className="p-2 rounded-lg "
                >
                  <option>Asian</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Indian</option>
                  <option>Middle Eastern</option>
                  <option>Latino Hispanic</option>
                </select>
              </div>
            </div>
            <div className="">
              <div className="mt-10">
                <p className="text-white font-bold mb-2">Model:</p>
                <div className="flex ">
                  <div className="w-1/2 text-black">
                    <select
                      onChange={handleModelChange}
                      value={selectModel}
                      className="p-2 rounded-l-lg w-full"
                    >
                      {/* <option>Select..</option> */}
                      <option>Stability</option>
                      <option>Open ai</option>
                    </select>
                  </div>

                  <button
                    onClick={createPromptAndRun}
                    className="bg-[#A259FF]  w-1/2 text-md font-bold rounded-r-lg  "
                  >
                    Generate
                  </button>
                </div>
                <div className="text-center">
                  <p className="mt-8 font-semibold text-lg">OR</p>
                  <Link to="/GenerateByImage">
                    <button className="hover:bg-[#A259FF] border-4 border-[#A259FF]  px-4 py-4 text-sm font-bold rounded-2xl mt-8">
                      Select image to generate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] mt-6 h-[500px] ">
            <div className="bg-[#343434] drop-shadow-lg w-[412px] h-[412px] mx-auto rounded-lg text-white text-center">
              {loading ? (
                <div className="w-full h-full flex flex-col justify-center">
                  <Loader />
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
      <Footer/>
    </div>
  );
};

export default GenerateByPrompt;
