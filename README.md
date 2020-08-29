# create-project-cli
Custom create project cli for speed up works

Since creating and defining folder structure for each project is painful 

I decide to make a custom cli for automating this job

This code source based on blog post : 

https://www.twilio.com/blog/how-to-build-a-cli-with-node-js?utm_source=youtube&utm_medium=video&utm_campaign=node-cli-howto

this project includes templates below : 

- Javascript
- Canvas
- Webpack
- React

#### Hot to use it?

just clone the repo and then run this line on command prompt:

`
npm install
`

Then run this line to link (creat-project) command to this project:

`
npm link
`

now You can test your new create-project command without any prefixes

#### How to add new Templates?

you need to add your desire template in templates directory with lowercase name

for example , if i want to add vue.js template, i just need to make a vue.js folder and create a new vue.js project in it

after that You need to add Vue.js name on templates array which can be found on 

src/cli.js - line 5

**Note**

You don't need to include node_module in your new template

### Args

**--git or --g**

initialize a git repo for your new project

**--install or --i**

install all npm dependencies automatically after creating a new project

cheers!
