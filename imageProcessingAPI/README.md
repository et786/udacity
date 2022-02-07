
# Scripts for testing, starting, and building the app 


building: npm run build

testing: npm run test

starting: npm start 


# Endpoints to access for testing


Root: '/'

Entry point: '/api/images/'
Sends status 404 if query parameters are empty or filename doesn't match any existing file, and sends status 403 
if width and height are not both positive integers.

Resized image: '/api/images/?filename=tcr&width=[positive integer]&height=[positive integer]'


# Additional functionality

PNG images are converted into JPEG format.
