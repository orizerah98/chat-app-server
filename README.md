# Chat App Server

## Installation
[Ensure that you have a MongoDB server running locally](https://www.mongodb.com/try/download/community)

## Environment Variables

You can create a `.env` file inside the root folder

`MONGODB_CONNECTION_STRING={mongo_url}`
`SESSION_SECRET={session_secret}`
`WEBSERVER_URL={webserver_url}`

## Execution

`ts-node src/server.ts`
