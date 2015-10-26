# Play List Assignment

This project is a simple play list module. In this module, users will be able to play 20 different videos by 4 artists.

## Framework Used

The client-side of the play list is built with AngularJS. The server-side is built with Express.

## How to run

1. Clone this repo with `git clone https://github.com/hongdp/playList.git`.
2. Get into root directory of this repo. 
3. Run `npm install` to install dependencies.
3. Run `node bin/www` to start server.
4. Enter localhost:3000/playlist to your browser.
5. Enjoy!
 
## Design

1. Users can not only play videos by clicking on images, but also redirect to the youtube page of videos by clicking on their titles.
2. The videos will not be auto played when switching to a new artist, but it will be auto played when switching between videos of same artist.
3. An RESTful API is provided to get video list of a specified artist. This design is used to protect our API key from being exposed to users.

## Limitation

1. The first play list is not rendered in server side, but rendered by Angular in client side. I choose to do this be cause this is more natual for Angular.
2. The artists list is hard coded in Angular controller and it's not editable. This can be provided by another RESTful API from server with SQL in the future version.
3. Only 5 videos of each artist is provided.
