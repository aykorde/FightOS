# FightOS
PCOS detection using ultra sound images
## Problem Statement
In today's world women are working, perusing dreams but while doing this most of them are facing challenges on all levels and on physical level PCOS is on top. If left undiagnosed it can cause serious health issues like diabetes, infertility and many more. Having PCOS affects woman's not only health but also her performance and confidence. FightOS acknowledges this problem and brings you a platform to detect PCOS with the help of machine learning model.
 ## About Project
We developed 'FightOS' website to provide support for every woman who may or may not have PCOS. We took data from our friends used image augmentation methods and with the help of convolution neural networks (CNN) we developed a model with 98% accuracy. User need to upload the image of ultrasound and our model will provide with result whether she has PCOS or not and also gives some possible solution along with information about its symptoms, doctors opinion, link of videos for awareness, our contact.

## Data 
The data was not directly available on internet easily when we did the project so, we gathered primary data, used image augmentation methods and also uploaded the data on kaggle.

Data link - https://www.kaggle.com/code/aykorde/fightos-cnn-models/data

The data folder contains 2 subfolders 'train' and 'test' where data is already splitted for machine learning model and each train and test folder has 2 subfolders 'infected' and 'notinfected' folders.

## Preprocessing and Model Building
The file for preprocessing, bulinding a CNN model is uploded here for reference. During preprocessing images are converted into gray format and a folder called 'graydata' is generated when you run that file.

## Integration
The integration of project is done in python flask.

## To use this reference
- Download all folders and upload 'data' folder and 'FightOS_CNN_Models.ipynb'  on google drive
- Using google colab, open the 'FightOS_CNN_Models.ipynb file', mount the drive and run the file
- Download the saved model 
- Setup your Xampp in that create database named 'fightos' in mysql database (note the case sensitivity)
-  Import 'fightos.sql' from Fightos repository
-  Run 'flaskapp.py' from it's location
-  Fullfill the dependencies of libraries using 'pip'
-  See website at url: 'localhost:5000'

## Implementation video
- https://www.linkedin.com/posts/anagha-choudhari19_project-imageprocessing-deeplearning-activity-6921739280012779520-Vkzr?utm_source=linkedin_share&utm_medium=member_desktop_web


 The html template was taken from https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/ for UI
