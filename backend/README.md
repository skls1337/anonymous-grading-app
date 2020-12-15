# Backend

## Backend API calls:

# Auth API calls
- post('/register')
- post('/login')
- get('/me')
- put('/updatedetails')
- put('/updatepassword')
- post('/forgotpassword')
- put('/resetpassword/:resettoken')

# Project API calls:
- get('/project')
- post('/createproject')
- get('/:id/project')
- put('/:id/updateproject')
- get('/:id/deleteproject')

# Requirments API calls:
- get('/projectrequirments')
- put('/updateprojectrequirments')

 # Reviews API calls:
 - get('/sentreviews')
 - post('/:id/createreview')
 - get('/:id/getprojectreviews/:id')
 
## Backend Design


## Available Scripts

Change the directory to 'backend' directory using this command in the terminal:
### `cd .\backend`

You can start the backend using the following command in the terminal:
### `npm run dev`
