const Parse = require('parse/node');

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  '96IF9A8Dqw4cSdJo4LgdTkdD9s2EziWKyf61hUPk', // This is your Application ID
  'suD4PBZ97hMszZX8wJJsGM7tY2rFsGtWouMdz4fB', // This is your Javascript key
  'DbJZIkX1X1NzScNTUszSgNhdEu2vgCuporv4d1fy' // This is your Master key (never use it in the frontend)
);


async function read (className){
  const query = new Parse.Query(String(className));
//   query.equalTo('objectId', 'OUcBoqrD3A');
  try {
    const results = await query.find();
    console.log(results)
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      console.log(object.id)
      const myCustomKey1Name = object.get('link');
      const myCustomKey2Name = object.get('size');
       console.log(myCustomKey1Name + myCustomKey2Name)
    //   console.log(String(object.get('id')))
    //   deleted(className, String(object.id))
    //   console.log("myCustomKey1Name: "+myCustomKey1Name);
    //   console.log(myCustomKey2Name);
    }

    return results
  } catch (error) {
    console.error('Error while fetching MyCustomClassName', error);
  }
}



async function  create (className, pair_key_value){
    // const obj = JSON.parse(pair_key_value);
// var key = Object.keys(pair_key_value)
const myNewObject = new Parse.Object(String(className));
// console.log("important" + String(key) + pair_key_value[key])
//   myNewObject.set(String(key), pair_key_value[key]);
//   myNewObject.set('myCustomKey2Name', 'myCustomKey2Value');
// console.log(JSON.parse(pair_key_value))
var myObj  = {}
try {
  myObj = JSON.parse(JSON.stringify(pair_key_value));
} catch (error) {
    console.log(error)
}

let text = "";
for (let x in myObj) {
  text += x + myObj[x] + ", ";
  console.log(pair_key_value + text)
  myNewObject.set(String(x), myObj[x]);
}

  try {
    const result = await myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log('object myCustomKey1Name: ', result.get('myCustomKey1Name'));
    // console.log('object myCustomKey2Name: ', result.get('myCustomKey2Name'));
    console.log('ParseObject created', result);
  } catch (error) {
    console.error('Error while creating ParseObject: ', error);
  }
}


async function update (className,key,  pair_key_value){
  const query = new Parse.Query('MyCustomClassName');
  try {
    // here you put the objectId that you want to update
    const object = await query.get(String(key));
    // object.set('myCustomKey1Name', 'new value');
    var myObj  = {}
    try {
    myObj = JSON.parse(pair_key_value);
    } catch (error) {
        console.log(error)
    }

    let text = "";
    for (let x in myObj) {
    text += x + myObj[x] + ", ";
    console.log(pair_key_value + text)
    object.set(String(x), String(myObj[x]));
    }
    try {
      const response = await object.save();
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      // Access the Parse Object attributes using the .GET method
    //   console.log(response.get('myCustomKey1Name'));
      console.log('MyCustomClassName updated', response);
    } catch (error) {
      console.error('Error while updating ', error);
    }
  } catch (error) {
    console.error('Error while retrieving object ', error);
  }
}


async function deleted (className, ob){
  const query = new Parse.Query(String(className));
  try {
    // here you put the objectId that you want to delete
    const object = await query.get(String(ob));
    try {
      const response = await object.destroy();
      console.log('Deleted ParseObject', response);
    } catch (error) {
      console.error('Error while deleting ParseObject', error);
    }
  } catch (error) {
    console.error('Error while retrieving ParseObject', error);
  }
};




export {create, read, update, deleted}