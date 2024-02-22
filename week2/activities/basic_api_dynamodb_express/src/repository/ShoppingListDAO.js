const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");
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

const TableName = "Shopping_List";

// read
async function getAllItems() {
  const command = new ScanCommand({
    TableName,
  });

  try {
    const data = await documentClient.send(command);
    return data.Items;
  } catch (error) {
    logger.error(error);
  }
}

async function getItemByName(itemName) {
  const command = new ScanCommand({
    TableName,
    FilterExpression: "#name = :name",
    ExpressionAttributeNames: { "#name": "name" },
    ExpressionAttributeValues: { ":name": itemName },
  });

  try {
    const data = await documentClient.send(command);
    return data.Items;
  } catch (error) {
    logger.error(error);
  }
}

// create
async function postListItem(Item) {
  const command = new PutCommand({
    TableName,
    Item,
  });

  try {
    const data = await documentClient.send(command);
    return data.Item;
  } catch (error) {
    logger.error(error);
  }
}

// UPDATE
async function togglePurchased(id) {
  const command = new UpdateCommand({
    TableName,
    Key: {
      item_id: id,
    },
    UpdateExpression: "SET purchased = :purchased",
    ExpressionAttributeValues: {
      ":purchased": true,
    },
  });

  try {
    const data = await documentClient.send(command);
    return true;
  } catch (err) {
    logger.error(err);
  }

  return null;
}

// DELETE
async function deleteItem(id) {
    const command = new DeleteCommand({
      TableName,
      Key: {
        item_id: id,
      },
    });
  
    try {
      const data = await documentClient.send(command);
      return true;
    } catch (err) {
      logger.error(err);
    }
  
    return null;
  }

module.exports = {
  getAllItems,
  postListItem,
  getItemByName,
  togglePurchased,
  deleteItem
};
