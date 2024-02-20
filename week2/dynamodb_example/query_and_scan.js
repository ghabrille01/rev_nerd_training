// Query ad Scan
// Query is used to retrieve multiple items from a dynamoDB table based on a query condition
// This is primarily going to be useing the primary key attribute

const { QueryCommand } = require("@aws-sdk/client-dynamodb");

const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-west-2" });

const documentClient = DynamoDBDocumentClient.from(client);

// Query is efficient when retrieving items based on the primary key attributes and it can quickly retrieve a range of items

async function queryEmployee(id) {
  const command = new QueryCommand({
    TableName: "Employees",
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeNames: { "#id": "employee_id" },
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

// Scan Operation
// The scna operation can return ip to a maximum of 1MB of data, this doe mean you will need to scan multiple times somethimes to get full results

async function scanEmployeesByRole(role) {
  const command = new ScanCommand({
    TableName: "Employees",
    FilterExpression: "#r = :r",
    ExpressionAttributeNames: { "#r": "role" },
    ExpressionAttributeValues: { ":r": { S: role } },
  });

  try {
    const data = await documentClient.send(command);
    console.log(data);
    return data.Items;
  } catch (err) {
    console.error(err);
  }

  return null;
}

module.exports = {
  queryEmployee,
  scanEmployeesByRole,
};
