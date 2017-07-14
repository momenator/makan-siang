# makan-siang
This is a web app for managing lunch orders of sense team members in bandung

# How does it work (roughly)
1. Manager fills in the items and their respective prices into the menu
2. Manager creates an order for that day
3. A slack notification will prompt user to login to web app to get what they want for lunch that day
4. User logs in and fill in what they want
5. The user data is collected in a form

# Domain models
1. Manager - one who gets the food and manage the menu
2. Order - the list of foods that people ordered that day for lunch
3. Menu - list of available foods
4. food - the food that people can choose from menu, each of them has a price
5. User - the one that orders food
6. form - stores information of what the users have ordered

# Stack?
1. React app
2. Backend
  - nodejs
  - express
  - mongo / **sql db

# What to do
1. Create the front end 
  - add react router - done
  - add blueprint.js - done
  - create views for user, orders, order, menu
2. Define the data that we want to keep in JSON format
3. Write the backend - (probably won't have time)
