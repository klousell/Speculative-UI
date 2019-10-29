let model, webcamEl, predictionCallback

// This function sets up the model trained in Teachable Machine.
// it takes in the URL to the model, and a function to be run
// each time the model makes a new prediction.
async function setupModel(modelURL, predictionCB) {
    //store the prediction callback function
    predictionCallback = predictionCB
    // the model.json file stores a reference to the trained model
    const checkpointURL = `${modelURL}model.json`
    // the metatadata.json file contains the text labels of your model and additional information
    const metadataURL = `${modelURL}metadata.json`

    // Load the model using the tmImage library
    model = await tmImage.load(checkpointURL, metadataURL)

    // Webcam has a square ratio and is flipped by default to match training
    const webcamFlipped = true
    // this function from the tmImage library returns a video element that
    // shows a video feed from the webcam
    webcamEl = await tmImage.getWebcam(200, 200, 'front', webcamFlipped)
    webcamEl.play()
    // add the video element to the page
    document.getElementById('webcam-wrapper').appendChild(webcamEl)

    // kick off the model prediction loop
    window.requestAnimationFrame(loop)
}

// This function will run forever in a loop
async function loop(timestamp) {
    // make a prediction using the model
    await predict()
    // then call loop again
    window.requestAnimationFrame(loop)
}

// This function uses the model we loaded to make a prediction on the webcam data
async function predict() {
    // predict can take in an image, video or canvas html element
    // we set flip to true since the webcam was only flipped in CSS
    const flip = true
    const prediction = await model.predict(webcamEl, flip)
    // Call the prediction callback function now that we have new prediction data
    predictionCallback(prediction)
}
