
# ICT Skills 2 Assignment.

Name: Brian Kinsella

## Overview.

This is a react application that allows users to interact with the movies in the TMDB. This is an extensive database of Movie information, accessed via apis.

e.g. 
+ Upcoming - A list of upcoming movies
+ Movie Details - Extensive hyperlinking with cast 
+ Actors - A list of actors, hyperlinking with "known for" movies
+ Fanmovie - A form to submit a fantasy movie (incomplete)
+ Login - A login form to allow access to protected routes

## Setup requirements.

In order to run locally, a react key is obtained from TMDB (see instructions https://developers.themoviedb.org/3/getting-started/introduction)
The key needs to be stored to global variable (REACT_APP_TMDB_KEY) in .env file in project root.
Node must be installed on the local machine
From project root, run "npm install" to install project dependencies
From project root, run "npm run start" to run development server.
Application runs on localhost:3000 in the browser
To run storybook, type run "npm run storybook"

## App Design.

The app is designed with the user in mind for the best possible UX
The login page was built with material-ui components
### Routing/Navigation.

Routes supported

+ /actors/:id - detailed information on a specific actor.
+ /movies/upcoming - lists movies soon to be shown in cinemas.
+ /actors/popular - list of popular actors
+ /login - login page for authentication
+ /fantasymovie - for submitting a fantasy movie 


### Views/Pages.

>Lists upcoming movies from the upcoming endpoint. Filtering on title and genre attributes is supported.

![][u1]

![][u2]

>Lists actors from the popular actors endpoint. Filtering on name attribute is supported.

![][a1]

![][a2]

>Shows detailed information on a specific actor and "known for" movies (hyperlinked)

![][a1]
![][a2]

>Allows a user to login to access protected pages on the app

![][login]

>Lists the cast members in a movie (hyperlinked)

![][moviecast]

>Allows the user to submit a fantasy movie (incomplete)

![][fantasymovie]


### Component catalogue.

Components: 
+ Actor Card
+ Actor Lists
+ Filter Actors card

![][stories]

## Caching.

TMDB server state cached by the app

+ Upcoming movies
+ Cast
+ Popular Actors
+ Actor details

![][c1]
![][c2]
![][c3]
![][c4]

## Authentication

Authentication is basic and is in-memory. Protected routes are:

+ /fantasymovie
+ /movies/favourites

A user can authenticate via the login page at:
+ /login


[u1]: ./public/upcoming1.png
[u2]: ./public/upcoming2.png
[a1]: ./public/actors1.png
[a2]: ./public/actors2.png
[ab1]: ./public/actorsbio1.png
[ab2]: ./public/actorsbio2.png
[login]: ./public/login.png
[moviecast]: ./public/moviecast.png
[fantasymovie]: ./public/fantasymovie.png
[c1]: ./public/cachingupcoming.png
[c2]: ./public/cachingcast.png
[c3]: ./public/cachingpopular.png
[c4]: ./public/cachingbio.png
[stories]: ./public/storybook.png