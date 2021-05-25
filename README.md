## What is it?

A simple scaffolding for building a discord bot with slash commands. The example here uses a fork of discord.js, but it works pretty well. will look at using the proper one in the future.

to use: Fill in all .env details and update roles.json to have slash commands matching roles. For example if the slash command is `finalfantasyxiv` then this must also be the role name. Make sure it's all lower case and no spaces.

## Uses

- eslint
- prettier
- dotenv
- typescript

## Todo

- [x] Set up with discord.js defaults using a test application account.
- [x] Set up intial ping pong slash command NO BOT YET
- [ ] Add reaction control defaults
- [ ] Link into a third party example library

## Quick Notes

Create a command to offer oauth access (use the package discord-oauth for this)
Discord.js package used has a proken snowflake function. It should be snowflakeUtils not snowflake being called. Needs a PR
