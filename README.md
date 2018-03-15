
Trail of Bands


USER STORIES
1. Jack is a 15 year old music fan and knows only what he hears on the radio but gets access to Last.fm finally and wants to learn more about similar bands than what he's listening to.

2. Mary is in her 30's and has been listening to the same music for 20 years, Trail of Bands makes a nice list for her to expand her horizons. 

February 26th
Worked on the 3 ideas I had but couldn't settle on one.
February 27th
Settled on Trail of Bands, a search method to find similar bands to one you typed in. Got the API to to spit out the info i needed.
February 28th
Got the search function to work and bring back the name and image for each band.
March 1st
With Matt's help, got the databases connected and the favorite list to populate
March 2nd
With Steve's help, got the buttons to turn green after clicked and got help with the databases not syncing up. Deployed to heroku, helluva time  getting it connected because my API key was named differently than what was written on the heroku site.
March 3rd
Started styling
March 4th
Finished styling, for the most part. Hardest part was getting the bands that came up to list horizontally. <ul class="col-md-4"> was all I needed after moving the <li> items into a full table and all other craziness.

Next Steps
Still can't get the home page how I would like it. Footer wouldn't work on the home page so i scrapped it. Image wouldnn't work so i scrapped it.

Verb    Path    Action    Used for
GET    /favorites   index    pulls a list of similar artists to your favorite
GET    /signup    new    sign up form for website
GET    /login   new    renders login
POST    /favorites    create    create a page with 9 similar artists
POST    /signup    create    create a page with 9 similar artists
POST    /login    create    authenticates sign in
GET    /logout   new    renders logout
GET    /api   new   initial pull from API
PUT    /teams/:name    update    update a specific team (using form data from /teams/:name/edit)
DELETE    /delete/:id   destroy    deletes an artist from your favorites

Technologies Used
Node.js
Express
SQL
Postgres
Sequelize
JavaScript
jQuery
Bootstrap
BCrypt
EJS


Wireframes

![img_20180305_085600418](https://user-images.githubusercontent.com/35078480/37439815-20355afa-27b7-11e8-9bf8-ac4618bf7d98.jpg)
![img_20180305_085707398](https://user-images.githubusercontent.com/35078480/37439816-2051d004-27b7-11e8-9da0-779d864beced.jpg)
![img_20180305_085722694](https://user-images.githubusercontent.com/35078480/37439817-206d6634-27b7-11e8-89f0-d56b3fd83952.jpg)
![img_20180305_090039017](https://user-images.githubusercontent.com/35078480/37439818-208abc5c-27b7-11e8-9ef6-49795a55d856.jpg)
![img_20180305_090047878](https://user-images.githubusercontent.com/35078480/37439819-20a2ce6e-27b7-11e8-9015-bdeb6e2d87e6.jpg)
