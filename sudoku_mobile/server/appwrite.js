import { Client, Account, ID } from "appwrite";

const server = (function () {

    const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('6785db7d00238518c0a9');

    return { client, Account, ID }
})()

export default server



