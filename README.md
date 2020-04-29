# Teachable Machine Image Demo

This project demonstrates a machine learning model made using [Teachable Machine](https://teachablemachine.withgoogle.com/).

This project yells when you place your hands on your head.

## How to Hack

If you want to remix this project there are a few ways to get started:

### Change the Model

If you train your own Teachable Machine model, when you export the model you will get a URL for it. In the `index.html` file, 
if you set the `URL` variable equal to your new model, the site will load your classes and run your model.

### Change the Callback

Everytime the model makes a prediction, we have the bar graph update using the prediction. We tell the model to do this when we call 
`setupModel` in the `index.html` file. The second parameter to the `setupModel` function is a callback that takes the prediction data 
from the model and does something with it. If you want someything else to happen using the prediction data, feel free to modify the 
callback function:
```
setupModel(URL, data => {
    updateBarGraph(data);
    // Do more with the prediction data here.
});
```
The callback function takes in a `data` parameter. This `data` parameter is an array of objects that store a `className` and a `probability`. 
An example of prediction data returned by the model to use in your callback might look like this:
```
data = [
    { className: 'Class 1', probability: .25 },
    { className: 'Class 2', probability: .75 },
]
```

## More Details and Documentation
This project uses the `tmImage` library. To learn more about this library,
how to use it, read the [documentation](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image).


