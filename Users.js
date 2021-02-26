const URLrequest ="https://jsonplaceholder.typicode.com/users";
let data;
fetch(URLrequest,{method:"GET"}).catch(e=>console.log(e)).then(response =>data=response);

JSON.parse(data)