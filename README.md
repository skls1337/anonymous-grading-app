# Echipa i7 mai putin Seby care are i5, dar are pe laptop i7

*Objective:* Developing a web application which allows student projects to be graded by anonymous juries of colleagues.


## Description
The application allows students projects to be graded by anonymous juries of peers.
The application is built on a Single Page Application architecture and is accessible from the browser on the desktop, mobile devices or tablets (depending on user preference).

## Functionality 
- Student member in a project team (PM) can add a project and define a series of partial project deliverables. By registering, the studen automatically becomes eligible as an evaluator.
- PM can add a demonstrative video or a link to a server hosting the deployed project for any partial deliverable.
- When a partial deliverable is due, any student who is not a PM for a particular project can be randomly selected to be part of the project jury. A student which is a member of said jury can grade the project. 
- The grade for the project is anonymous and the total grade is calculated by omitting the lowest and highest grades and then averaging the remaining ones. The grades are 1-10 with at most 2 fractional digits.
- The professor can see the results of the evaluation for each project, without being able to see the identity of the jury members.
- The application has a system of permissions. Only a member of the jury can add/modify grades and they can only modify their own grades. Grades can only be modified for a limited period of time.
 
## Site layout and features
- The site will a be single page app 
- When first accessing the site a login/sign-in page will be displayed. Here you can create your account and select whether you are creating a student or professor account.
- When connecting with a student account you will be presented with the main page. Here you would be able to see a preview of your project the way an evaluator or a professor will see it as well as the tasks assigned by the professor and the time remaining until the next partial deliverable has to be uploaded. If no project has been added yet you will have a button that will take you to the "Project" page. On the "Project" page you will be able to add a project or edit the currently added one. This page will have textboxes for the name, short description, full description, etc. It will also include an upload section for images as well as the ability to add a description for each image and an upload section for the entire project/partial deliverable. The next page a student will be able to access is the "History" tab where he can see all the versions of a project he uploaded and download them (this is a life-saving feature in case you haven't backed your project anywhere and you somehow lost it).
- When you get assigned as an evaluator you get access to another page called "Evaluate". Here you will be able to see other projects displayed as cards with minimal information such as the name of the project, an image, the author's name, and a short description. By clicking on the card you will be able to see the entire project presentation. At the bottom of the project presentation, you will have the grading options. Here you can assign marks on different aspects of the project and submit your grades. The project presentation will be generated automatically best on the data provided by the author.
- When you connect with a professor's account you will be presented with the main page. On this main page, he will be able to see the current tasks and deadlines. He will have a button to edit those or a button to create a new project if none was created yet. When the professor makes any change here all students will receive a notification on the site and their emails. The professor will also have access to the "Projects" page where he can see all projects displayed as cards with minimal information such as the name of the project, an image, the author's name, and a short description. By clicking on the card he will be able to see the entire project presentation. He will also be able to see all grades assigned until this point and the average grade.
- At the end of the evaluation period everyone will be able to see their grades on the "Grades" page.


# Installation Guide

- Step 1. Clone/Download the repository on your machine
- Step 2. In the terminal change the directory to the location of your copy of this project
- Step 3. At a time, change the directory to the 'backend'folder and run the associated script to start the backend part. Same as for the 'frontend' directory
- Step 4. After starting both frontend and backend part, a browser web page should open. If nothing happens please insert the following address into the search bar of the browser: http://localhost:3000
- Step 5. If nothing happened or you encountered issues, please review again the installation steps starting with Step 1.



## All the available scrips are associated to the 'frontend' and 'backend' folder

