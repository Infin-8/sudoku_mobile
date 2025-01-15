import appwrite from "../server/appwrite"
const { client, Account, ID } = appwrite

export const createSession = async () => {
    try {
        const id = client
            .setProject('6785db7d00238518c0a9');
        return new Account(client)
            .createEmailPasswordSession('nathaniel.a.vazquez@gmail.com', 'testing123')
            .then(res => res)
    } catch (error) {
        console.log("error creating account", error)
    }

}

export const getAccount = async () => {
    let account = new Account(client)
    const result = await account.get()
    return result
}

export const createAccount = async () => {
    let account = new Account(client)
    const id = ID.unique()
    const result = await account.create(
        id,
        'nathaniel.a.vazquez@gmail.com',
        'testing123',
    )

    return result
}
