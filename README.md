# :sparkling_heart: DANAGOTCHI :sparkling_heart:

## Makers Academy Week 9 Makerthon Project

As students at Makers, we can rely on Dana, [our Chief Joy Officer] (https://uk.linkedin.com/in/chiefjoyofficer), to help us with our wellbeing. Meditation, yoga, friendly chats, hugs and flash parties keep our spirits high during our twelve-week long bootcamp. Unfortunately, there is only one Dana, and far too many of us, so we have decided to share the joy and create a web app that will allow everyone to have their own personal Joy Officer.

**Design**

This challenge was designed to help us consolidate our knowledge of Ruby on Rails and Angular.JS. We decided to settle for Sinatra when building our Minimum Viable Product as there was no need for us to store data permanently, and none of our features required anything more than for our back-end to display our front-end. 

**Tools**

In order to complete this challenge, we used [Trello] (trello.com/danagotchi) to plan our (tiny) sprint and manage our project. We used [Waffle] (https://waffle.io/marion-lv/danagotchi) to track and record progress and changes made to our Github repository, and worked using git workflow and the [Thoughtbot Project Design Sprint] (https://robots.thoughtbot.com/the-product-design-sprint) guide.

**Future challenges**

Given the very short timeframe given to complete this challenge (3-4 days including planning and setup), we have had to keep the number of features we wanted to add to our MVP to the bare minimum. In the future, we would like to migrate to Rails so as to allow users to sign up directly or with third parties, save their progress and access personalised resources. We would also like to allow users to access resources on mindfulness, wellbeing, meditation, exercise, etc, as well as expand our gratitude logger. 

##Setup

This app uses an Angular.JS front-end and a Sinatra back-end that have been deployed to [Heroku] (https://danagotchi.herokuapp.com). 

Should you wish to work on this app (pull requests welcome!), please fork this repository to your own machine. You will need to use `bundle install` to install the Ruby-related components, and `npm install` as well as `bower install` for the JavaScript-related components.

In order to run the app locally on your machine, ensure that the correct severs are running by opening `npm start` in one tab.

##Testing

We test-drove the development of this app using Karma and Protractor for the Angular.JS component. In order to run the tests, ensure that you have set up the app correctly by referring to the above instructions, and use `npm test` for unit tests using Karma and `npm run protractor` from end-to-end tests using Protractor.

You will need to run `webdriver-manager start` in a different tab so as to start up a server for Protractor to run.

Please note that you may have to run the following commands if you encounter errors with Protractor (you may also need to sudo those commands):

* `npm install -g protractor`
* `webdriver-manager update --standalone`
* `webdriver-manager start --standalone`

##Screenshots

##User Stories

**User story 1:** :heavy_check_mark:
```
As a user,
So that the website feels personalised,
I want to be greeted by name.
```

**User story 2:** :heavy_check_mark:
```
As a user,
So that I can be inspired,
I would like a motivational message to be displayed.
```

**User story 3:**
```
As a user,
So that I can be mindful of my emotional state,
I would like to note my emotions.
```

**User story 4:** :heavy_check_mark:
```
As a user,
So that I can reflect,
I would like to record something I'm grateful for.
```

**User story 5:** :heavy_check_mark:
```
As a busy user,
So that I don't miss yoga and meditation,
I would like to add an event to my calendar.
```
Team:
[Ina Tsetsova](https://github.com/tsetsova), [Joe Wroe](https://github.com/JoeWroe), [Marion LV](https://github.com/marion-lv) & [Vicky Gray](https://github.com/vickymg)
