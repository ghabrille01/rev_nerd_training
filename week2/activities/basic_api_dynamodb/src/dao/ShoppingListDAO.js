const {
  DynamoDBClient,
  QueryCommand,
  ScanCommand,
} = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-west-2" });

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = "Shopping_List";

// CREATE
async function addListItem(item) {
  const command = new PutCommand({
    TableName,
    Item: item,
  });

  try {
    const data = await documentClient.send(command);
    return data.Item;
  } catch (err) {
    console.error(`Unable to read item. Error: ${err}`);
    return "error";
  }

  return null;
}

// READ
async function getListItem(id) {
  const command = new QueryCommand({
    TableName,
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeNames: { "#id": "item_id" },
    ExpressionAttributeValues: { ":id": { S: id } },
  });

  try {
    const data = await documentClient.send(command);
    return data.Items[0];
  } catch (err) {
    console.error(err);
  }

  return null;
}

// UPDATE
async function updateItemPurchased(id) {
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
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
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
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }

  return null;
}

module.exports = {
  addListItem,
  getListItem,
  updateItemPurchased,
  deleteItem
};
