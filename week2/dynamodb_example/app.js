const { getItem, createItem } = require("./EmployeeDAO");
// queryEmployee should be in the DAO
const { queryEmployee, scanEmployeesByRole } = require("./query_and_scan");
const uuid = require("uuid");

let Key = {
  employee_id: "cfff9fdc-64e0-4b2d-8316-f520f5824d83",
  join_date: 1708442206,
};



async function createEmployee(name, email) {
  let employee_id = uuid.v4();
  let join_date = Math.floor(new Date().getTime() / 1000);

  let data = await createItem({ employee_id, join_date, name, email });
  console.log(data);
}

//createEmployee("JaneSmith", "jane@email.com");

/*async function getEmployee() {
  let item = await getItem(Key);
  console.log(item);
}*/

async function getEmployee() {
  let item = await queryEmployee(Key.employee_id);
  console.log(item);
}

//getEmployee();

scanEmployeesByRole("Engineer").then(Items => console.log(Items));//Items.forEach(item => console.log(item)))

//let employee = await queryEmployee(Key.employee_id);
//console.log(employee);



// if you want to filter through table use scan but try to avoid it since it is inefficient 
// just be very clear on why you need it and check if there no other ways to work with indexes


// partition key gets hashed and copies are saved to partitions
// efficient in querying
// its resilence comes at a cost since saving it to multiple partitions takes alot of computing










/*const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const { DynamoDBDocumentClient, GetCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({ region: "us-west-2" });

// getting the documentClient
const documentClient = DynamoDBDocumentClient.from(client);

const getCommand = new GetCommand({
  TableName: "Employees",
  Key: {
    employee_id: "cfff9fdc-64e0-4b2d-8316-f520f5824d83",
    join_date: 1708442206,
  },
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
  .catch((err) => console.log(err));*/
