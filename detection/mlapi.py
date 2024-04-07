from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import numpy as np
import io
from tensorflow.keras.models import load_model

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Load the model using tf.keras.models.load_model
model = load_model('./model.h5')

def predict_image(image: Image.Image):
    # Preprocess the image
    resized_image = image.resize((128, 128))
    image_array = np.array(resized_image) / 255.0
    input_data = np.expand_dims(image_array, axis=0)

    # Make predictions
    prediction = model.predict(input_data)

    # Assuming your model outputs class indices, convert it to a string or category label
    op = np.argmax(prediction, axis=-1)
    if op==[0]:
        return('Fake Face')
    else:
        return('Real Face')


@app.post("/predict")
async def predict_endpoint(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents))
        prediction = predict_image(image)
        return JSONResponse(content={"prediction": prediction}, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
