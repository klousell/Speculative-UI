let model, webcamEl, predictionCallback

async function setupModel(modelURL, predCB = p => {}) {
    //store the prediction callback
    predictionCallback = predCB
    // the json file (model topology) has a reference to the bin file (model weights)
    const checkpointURL = `${modelURL}model.json`
    // the metatadata json file contains the text labels of your model and additional information
    const metadataURL = `${modelURL}metadata.json`

    // load the model
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    model = await tmImage.load(checkpointURL, metadataURL)

    // optional function for creating a webcam
    // webcam has a square ratio and is flipped by default to match training
    const webcamFlipped = true
    webcamEl = await tmImage.getWebcam(200, 200, 'front', webcamFlipped)
    webcamEl.play()
    document.getElementById('webcam-wrapper').appendChild(webcamEl)

    window.requestAnimationFrame(loop) // kick of pose prediction loop
}

async function loop(timestamp) {
    await predict()
    window.requestAnimationFrame(loop)
}

async function predict() {
    // predict can take in an image, video or canvas html element
    // we set flip to true since the webcam was only flipped in CSS
    const flip = true
    const prediction = await model.predict(webcamEl, flip)
    console.log(prediction)
    predictionCallback(prediction)
}
