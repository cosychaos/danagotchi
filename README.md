# :sparkling_heart: DANAGOTCHI :sparkling_heart:

## Makers Academy Week 9 Makerthon Project

As students at Makers, we can rely on Dana, [our Chief Joy Officer] (https://uk.linkedin.com/in/chiefjoyofficer), to help us with our wellbeing. Meditation, yoga, friendly chats, hugs and flash parties keep our spirits high during our twelve-week long bootcamp. Unfortunately, there is only one Dana, and far too many of us, so we have decided to share the joy and create a web app that will allow everyone to have their own personal Joy Officer.

##Setup

This app uses an Angular.JS front-end and a Sinatra back-end that have been deployed to [Heroku] (https://danagotchi.herokuapp.com). Please use `bundle install` to install the Ruby-related components, and `npm install` and `bower install` for the JavaScript-related components.

In order to run the app locally on your machine, ensure that the correct severs are running by opening `npm start` in one tab.

##Testing

We test-drove the development of this app using Karma and Protractor for the Angular.JS component, and Rspec for the Sinatra component. In order to run the tests, ensure that you have set up the app correctly by referring to the above instructions, and use `npm test` for unit tests using Karma, `npm run protractor` from end-to-end tests using Protractor, and `rspec` for tests using Rspec.

You will need to run `webdriver-manager start` in a different tab so as to start up a server.

Please note that you may have to run the following commands if you encounter errors with Protractor (you may also need to sudo them):

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

**User story 4:**
```
As a user,
So that I can reflect,
I would like to record something I'm grateful for.
```

**User story 5:**
```
As a busy user,
So that I don't miss yoga and meditation,
I would like to be reminded of an event 15min before it happens.
```
Team:
[Ina Tsetsova](https://github.com/tsetsova), [Joe Wroe](https://github.com/JoeWroe), [Marion LV](https://github.com/marion-lv) & [Vicky Gray](https://github.com/vickymg)
