
# Scripts for testing, starting, and building the app 


building: npm run build

testing: npm run test

starting: npm start 

Note on testing: To further verify that caching feature works, you can uncomment the console.log statements
which will print to the console after the given testing command is entered in the console.


# Endpoints to access for testing


Root: '/'

Entry point: '/api/images/'
Sends status 404 if query parameters are empty or filename doesn't match any existing file, and sends status 403 
if width and height are not both positive integers.

Resized image: '/api/images/?filename=tcr&width=[positive integer]&height=[positive integer]'


# Additional functionality

PNG images are converted into JPEG format.
