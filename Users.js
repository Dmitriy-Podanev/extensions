const URLrequest = "https://jsonplaceholder.typicode.com/users";


fetch(URLrequest, {method: "GET"})
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        data.map(item => {
            console.log(item);
            let listItem = document.createElement("li");
            listItem.innerHTML = "Name: " + item.name + " ID:" + item.id;
            document.getElementById("users").appendChild(listItem);

        })
    });




