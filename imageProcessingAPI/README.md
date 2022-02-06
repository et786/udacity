===================================================
Scripts for testing, starting, and building the app 
===================================================

building: npm run build

testing: npm run test

starting: npm start 

===============================
Endpoints to access for testing
===============================

Root: '/'

Resized image: '/api/images/?filename=tcr&width=[positive integer]&hieght=[positive integer]'

========================
Additional functionality
========================

PNG images are converted into JPEG format.