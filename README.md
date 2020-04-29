# Hands On Head Detection - A Teachable Machines Image Demo

This project demonstrates a machine learning model made using [Teachable Machine](https://teachablemachine.withgoogle.com/).

This project yells when you place your hands on your head.

## How to Get Started

If you want to remix this project there are a few ways to get started:

### Change the Model

If you train your own Teachable Machine model, when you export the model you will get a URL for it. In the `index.html` file,
if you set the `URL` variable equal to your new model, the site will load your classes and run your model.

### Change the Triggers

I created a triggers function that takes in a stream of data. This data consists of the class names from your model and their probability.
The probability is the percentage of certainty that what the camera sees _matches_ with the predictive class model.

You can add your own triggers to the triggers() function in the triggers.js file.

For example, `data[0]` is my 'hands on head' class, a class that represents me putting my hands on top of my head in dismay.

In my code, if the model thinks the camera shows 'hands on head' with at least 75% probability, then it will play the audio file

I have two classes, so my first class is data[0] and my second is data[1].

**You may need to tweak the amount of acceptable probability.**

```
   if(data[0].probability > 0.75){
      audio.play(); //play sound 'oh no!'
  }
```

### How Does it do This?

Everytime the model makes a prediction, we have the bar graph update using the prediction. We tell the model to do this when we call
`setupModel` in the `index.html` file. The second parameter to the `setupModel` function is a callback that takes the prediction data
from the model and does something with it. If you want something else to happen using the prediction data, feel free to modify the
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

This project uses the `tmImage` library. To learn more about this library, [Documentation](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image).

### Resources

- [Bananameter](https://medium.com/@warronbebster/teachable-machine-tutorial-bananameter-4bfffa765866) classifier tutorial
- More Teachable Machine [projects](https://glitch.com/@teachablemachine) on Glitch

# Credit

This project builds on Teachable Machine Image [Demo](https://glitch.com/edit/#!/tm-image-demo?path=README.md%3A1%3A0).

Alterations, improvements, obfuscations: Lee2sman 2020
