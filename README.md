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
- The site will be single page app 
- When first accesing the site a login-in/sing-in page will be presented to you. Here you can create your account and select whether you are creating a student or professor account.
- When connecting with a student account you will be presented with the main page. Here you would be able to see a preview of your project the way an evaluator or a profesor will see it as well as the tasks assigned by the profesor and the time remaining until the next partial deliverable has to be uploaded. If no project has been added yet you will have a button which will take you to the "Project" page. On the "Project" page you will be able to add a project or edit the currently added one. This page will have textboxes for the name, short description, full description etc. It will also include an upload section for images as well as the ability to add a description for each image and an upload section for the entire project/partial deliverable. The next page a student will be able to access is the "History" tab where he can see all the versions of a project he uploaded and download them (this is a life saving feature in case you haven't backed your project anywhere and you somehow lost it).
- When you get assigned as a evaluator you get access to another page called "Evaluate". Here you will be able to see other projects diplayed as cards whith minimal information such as the name of the project, an image, the author's name and a short description. By clicking on the card you will be able to see the entire project presentation. At the bottom of project presentation you will have the grading options. Here you can assign marks on different aspects of the project and submit your grades. The project presentation will be generated automaticaly best on the dada provided by the author.
- When you connect with a profesor account you will be presented with the main page. On this main page he will be able to see the current tasks and deadlines. He will have a button to edit those or a button to create a new project if none was created yet. When the profesor makes any change here all students will receive a notification on the site and their emails. The profesor will also have access to the "Projects" page where he can see all projects diplayed as cards whith minimal information such as the name of the project, an image, the author's name and a short description. By clicking on the card he will be able to see the entire project presentation. He will also be able to see all grades assigned until this point and the average grade.
- At the end of the evaluation period everyone will be able to see their grades on the "Grades" page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
