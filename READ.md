# Svelte Front End
## Description
The svelte front end is an implementation of the mockups given as requirements for the project. Tailwind Css was utilized for rapid css development. I chose to implement a full serverless approach for the project so that I could host the front end on free static solution, with all api's being done serverless (also free). 

## Notes
This cloud function is linked to my gcp (google cloud platform) account. My gcp account has access to the Google Cloud Vision API and the usage billing of this API is done to my account. Therefore, this function will not work strait off the bat, unless you have access to the resources linked to this GCP project.


## What I learnt
Front end development is definitly a strong point of mine and i did not have allot of trouble developing the look and feel of the app. What i did struggle with was figuring out how to learn and integrate the firebase services to encoperate them withing the architecture of the application.

## What could be made better
A ton, starting with supporting desktop views. The preloading of images could be cleaned up for greater speed. A realtime database with socket implementations could be used for automatically loading new images. An option to change the device camera (front or back). An alternative approach to using a classification API would have been to serve a tensorflow js model with the front end application. This approach would have resulted in a large initial download of the model but would have made querying the model (locally) much much faster. 