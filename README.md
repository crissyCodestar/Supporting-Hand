# SupportingHand

A search engine powered by Donors Choose API. Using Google Map to display the users search results as well as saving registered searches in users localhost. Links are provided to the donors url so users can donate to the school of their choosing

# Getting Started

You will only need Node.js installed on your environmemnt as well as [React JS](https://reactjs.org/), npm or Yarn to get a copy of this project up and running on you local machine for development and testing. I am also using [Grommet.io](http://grommet.io) for UI.

## Yarn or npm

In your terminal, if you do not have Node.js installed please go to [Node.js for assistance](https://nodejs.org/en/download/) & don't forget [Yarn](https://yarnpkg.com/en/) or [NPM](https://www.npmjs.com/), whichever you prefer.

```
$ yarn -v
1.5.1


$ npm -v
5.6.0
```

## React JS

This App is built on the [React Js](https://reactjs.org) framework so, yea it is totally needed.

```
$ npm info react version
16.3.2
```
***


# Installing

To install the app we will begin by cloning the repository. You may also change the name of the folder on your end.

```JavaScript
$ git clone https://github.com/crissygrant82/SupportingHands.git <YOUR_DIR_NAME>
$ cd <YOUR_DIR_NAME>
$ npm install
```
Everything should compile from package.json and install your node_modules.

## Configure App

You will need your own [Donors Choose](https://data.donorschoose.org) and [Google Maps](https://cloud.google.com/maps-platform/) Api Key's, just register for a free account and you are in there.

### ../utils/donorsApi.js
**_//Located in DonorsComponents folder_**

```JavaScript
const donorsKey = 'INSERT_DONORS_API_KEY';
```

### ../DonorsMapContainer/DonorsMapContainer.js
**_//Located in DonorsMapComponents folder_**

```JavaScript
export default GoogleApiWrapper({
  apiKey: (`INSERT__GOOGLE__API__KEY`),
  LoadingContainer: LoadingContainer,
  v:3.13,
})(DonorsMapContainer)
```

# Start App

Now you can explore. Run the start command for React...

```JavaScript
$ npm start
```

***

# Languages & Tools

## JavaScript

* React JS for UI framework
* Grommet component based design library
* Babel JS syntax compiler

## API's

* DonorsChoose.org educational institution donation database
* Google Maps Api Platform great to know and learn, lots of info

***

# Authors

Crystal Grant - Initial work

> Programming today is a race between software engineers striving to build bigger and better idiot-proof
> programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.

> ―- Rick Cook, The Wizardry Compiled

# SupportingHand
