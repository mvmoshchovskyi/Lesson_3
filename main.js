// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту


let container = document.getElementById('container')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then((usersJSON) => {

        for (const user of usersJSON) {
            let outerDiv = document.createElement('div')
            outerDiv.classList.add('user')

            for (const userKey in user) {

                let innerDiv = document.createElement('div')
                innerDiv.innerText = `${user[userKey]}`

                if (userKey == 'address') {
                    for (const element in user.address) {
                        let adrDiv = document.createElement('div')
                        adrDiv.innerText = `${user.address[element]}`
                        innerDiv.appendChild(adrDiv)
                    }
                } else if (userKey == 'company') {
                    for (const elem in user.company) {
                        let comDiv = document.createElement('div')
                        comDiv.innerText = `${user.company[elem]}`
                        innerDiv.appendChild(comDiv)
                    }
                }
                innerDiv.classList.add(userKey)

                outerDiv.appendChild(innerDiv)
            }
            container.appendChild(outerDiv)
        }
    })

