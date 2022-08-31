# api-examples

documentation: https://gathertown.notion.site/Gather-HTTP-API-3bbf6c59325f40aca7ef5ce14c677444

## setup

install NodeJS and npm

get an API key [here](https://gather.town/apiKeys)

create a file called `config.js` that looks like this, but with your own data instead:
```js
module.exports = {
	SPACE_ID: "oFz81x6whatever\\SpaceName", // note the \, NOT / as is in the URL
	API_KEY: "YOUR KEY HERE",
};
```

`npm install`

## run

example: `node auto-upload-poster-room.js`

## examples

### create-space.js

Simplest example of creating a new space, using an existing one as a template

### get-map.js

Simplest example of fetching map data, with axios

### set-map.js

Simplest example of setting map data, with axios

### `auto-upload-poster-room.js`

Example of generating a poster session room given a set of poster URLs, including generating impassible tiles, etc.

Demonstrates `setMap` and `uploadImage` endpoints

