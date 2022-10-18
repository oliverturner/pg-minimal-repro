# pg-minimal-repro

This repo exists to investigate why routes for a SPA aren't resolving as expected

Steps to reproduce:
1. Clone and install dependencies
1. Run `npm run build:app` to compile the Svelte app in `/app` to the `/public` directory
1. Run `npm run dev:api` to spin up the arc sandbox
1. Navigate to http://localhost:3333 and click the links to load `/app/app-1` or `app-2`. 
1. Refresh to verify that routes not defined in `app.arc` are correctly handled by index.html
1. Deploy (or visit [this URL](http://pgminimalreprostaging-staticbucket-vwwug9vr4hj7.s3-website-us-west-2.amazonaws.com)) and attempt to navigate: links can be followed within the app but deep linking to the resource fails because `/app/app-1` is routed to `/app/app-1/index.html`

Example URLs
- http://pgminimalreprostaging-staticbucket-vwwug9vr4hj7.s3-website-us-west-2.amazonaws.com/
- http://pgminimalreprostaging-staticbucket-vwwug9vr4hj7.s3-website-us-west-2.amazonaws.com/app/app-1
- http://pgminimalreprostaging-staticbucket-vwwug9vr4hj7.s3-website-us-west-2.amazonaws.com/app/app-2
