let ul = document.getElementById('users')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let li = document.createElement('li');
            let link = document.createElement('a');
            link.href = `userinfo.html?id=${user.id}`;
            // li.innerText = user.id + ' ' + user.name;
            link.innerText = user.id + ' ' + user.name;
            li.appendChild(link)
            ul.appendChild(li);
        }
    })