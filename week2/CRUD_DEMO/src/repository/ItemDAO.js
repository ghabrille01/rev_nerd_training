const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
  ScanCommand,
} = require("@aws-sdk/lib-dynamodb");
const { logger } = require("../util/logger");

const client = new DynamoDBClient({ region: "us-west-2" });

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = "ItemsExample";

// this is the dao object
// should need to be tested since there should not have logic just handle data

async function getAllDBItems() {
  const command = new ScanCommand({
    TableName,
  });

  try {
    const data = await documentClient.send(command);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }

  return null;
}

async function postDBItem(Item){
    const command = new PutCommand({
        TableName,
        Item
    })

    try{
        const data = await documentClient.send(command);
        return data;
    } catch(err) {
        logger.error(err);
    }
}

async function getItemByName(itemName) {
    const command = new ScanCommand({
        TableName,
        FilterExpression: '#name = :name',
        ExpressionAttributeNames: {'#name': 'name'},
        ExpressionAttributeValues: {':name': itemName }
    })

    try {
        const data = await documentClient.send(command);
        return data.Items[0];
    } catch(err){
        logger.error(err)
    }
}

module.exports = {
  getAllDBItems,
  postDBItem,
  getItemByName
};
