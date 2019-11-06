# Teachable Machine Image Demo

This project demonstrates a machine learning model made using [Teachable Machine](https://teachablemachine.withgoogle.com/),
a tool that let's anyone make machine learning models without writing any code. 

We trained a model that determines banana ripeness, but you can train your own model to do anything you want! 
Read more about how to train an image model in our [blog post](todo/image url).

## How to Hack

If you want to remix this project there are a few ways to get started:

### Change the Model

If you train your own Teachable Machine model, when you export the model you will get a URL for it. In the `index.html` file, 
if you set the `URL` variable equal to your new model, the site will load your classes and run your model.

### Change the Callback

Everytime the model makes a prediction, we have the bar graph update to show it's prediction. We tell the model to do this when we call 
`setupModel` in the `index.html` file. The second parameter to the 