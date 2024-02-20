const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const {
  DynamoDBDocumentClient,
  GetCommand,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-west-2" });

// getting the documentClient
const documentClient = DynamoDBDocumentClient.from(client);

const getCommand = new GetCommand({
  TableName: "rev-training",
  Key: { id: "001" },
});

// promise

var promise_created = documentClient.send(getCommand);
// promise is sent out when handler is called
promise_created
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// above would normally be combined like
var promise_created = documentClient
  .send(getCommand)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
