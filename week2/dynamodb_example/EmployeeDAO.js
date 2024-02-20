// DAO
// Data Acces Object
// This layer is referred to as the rpository layer
// We do all of our data operations within this layer of code
// This creates a separation of concerns and enrourages modularity in development

// This is build around CRUD operations
// CREATE READ UPDATE DELETE

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({region: 'us-west-2'});

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = 'Employees';

// READ
async function getItem(key) {
    const command = new GetCommand({
        TableName,
        Key: key
    })

    try {

        const data = await documentClient.send(command);
        return data.Item;

    } catch (err) {
        console.error(`Unable to read item. Error: ${err}`)
    }

    return null;
}

// CREATE
async function createItem(item) {
    const command = new PutCommand({
        TableName,
        Item: item
    })

    try {

        const data = await documentClient.send(command);
        return data.Item;

    } catch (err) {
        console.error(`Unable to read item. Error: ${err}`)
    }

    return null;
}

module.exports = {
    getItem,
    createItem
}