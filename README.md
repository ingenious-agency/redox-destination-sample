# Redox Destination Sample

This is an example of how to use the [@ingenious-redox/destination-middleware](https://github.com/ingenious-agency/destination-middleware) package.

## Instructions

To build a Redox Engine destination you should follow the ["Create Destination"](https://developer.redoxengine.com/getting-started/create-a-destination/) guide from the Redox documentation, once you have that setup, you can then configure this project.

## Install

```bash
$ git clone https://github.com/ingenious-agency/destination-middleware-sample
$ cd destination-middleware-sample
$ npm install
$ touch .env
```

## Create an .env file

At this point you should have an empty .env file that should have two declared variables:

```
PORT=3000
VERIFICATION_TOKEN=something-from-redox
```

The `VERIFICATION_TOKEN` key should be the same that's configured on the redox site.

## Set up a tunnel

Because the Redox engine will call your app over the internet it's convenient to develop using a tunnel, this app uses the `localtunnel` package that lets you choose a subdomain of the `localtunnel.me` domain that you can configure as your API endpoint on Redox.

Go to the `package.json` and change the `tunnel` task with a subdomain name that makes sense to you like `redox-dev-app`, go ahead and turn on your local tunnel with `npm run tunnel` something similar to this should appear on the console:

```bash
$ npm run tunnel

$ redox-integration@1.0.0 tunnel /Users/cherta/workspace/ingsw/redox-integration
$ lt --port 3000 --subdomain redox-dev-app

your url is: https://redox-dev-app.localtunnel.me
```

After the tunnel is up you can go to the Redox portal and configure your destination API Endpoint to the tunnel url.

## Start the server

Start the server by executing the two provided tasks in two different sessions:

```bash
$ npm run dev
```

```bash
$ npm run tunnel
```

This should start your server with live reload and also the tunnel to make your dev environment accessible from the internet.
