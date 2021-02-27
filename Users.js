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
            listItem.className ="userCheck";
            listItem.innerHTML = item.name; //todo проверять на active, чтобы вызывать цвет в html
            document.getElementById("users").appendChild(listItem);

        })
    });




