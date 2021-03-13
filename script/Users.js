const URLrequest = "https://jsonplaceholder.typicode.com/users";
const tbl = document.getElementById("users");
let btn_connect = document.getElementById("connect");

btn_connect.onclick = () => {

    while (tbl.firstChild) {
        tbl.removeChild(tbl.firstChild);
    }

    fetch(URLrequest, {method: "GET"})
        .then(response => {
            return response.json()
        })
        .then(data => {

            data.map(item => {

                let listItem = document.createElement("li");
                listItem.className = "userCheck";
                listItem.innerHTML = '<div style="width: 15px; height: 15px;background: green;border-radius: 10em; margin-right: 30px;"></div>' + item.name; //todo проверять на active, чтобы вызывать цвет в html
                document.getElementById("users").appendChild(listItem);

            })
        });
};








