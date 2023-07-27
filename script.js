// N = 1

// function expo(x, deg, cb) {
//     if (deg == 1) {
//         return x
//     } else {
//         return x * expo(cb(x), deg - 1, cb)
//     }
// }

// const a = expo(3, 3, (deg) => `${deg}`)
// console.log(a)

// const b = expo(3, 5, (deg) => `${deg}`)
// console.log(b)

// const c = expo(3, 7, (deg) => `${deg}`)
// console.log(c)




// N = 2


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res) => res.json())
// .then((res) => console.log(res))
// .catch((err) =>console.log(err))



function postCard(userId, id, title, body) {

const div1 = document.createElement('div')
div1.setAttribute('id', 'id')
div1.classList.add('container')

const div2 = document.createElement('div')
div2.classList.add('card')

const img = document.createElement('img');
img.setAttribute('src', 'https://t3.ftcdn.net/jpg/03/74/30/62/360_F_374306203_SMTL4De1OOWASFLtO0tkmXvEatxwf4Ry.jpg');
img.classList.add('image');
img.setAttribute('alt', 'text image');


const h1El = document.createElement('h1')
h1El.classList.add('h1id')
h1El.textContent = userId

const h2El = document.createElement('h2')
h2El.classList.add('h2id')
h2El.textContent = id

const h3El = document.createElement('h3')
h3El.classList.add('h3id')
h3El.textContent = title

const pEl = document.createElement('p')
pEl.classList.add('pText')
pEl.textContent = body

div2.append(img, h1El, h2El)

div1.append(div2, h3El, pEl)

document.body.append(div1)

return div1
}



async function fetchData() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')

        if(!data.ok){
            throw Error('Not Available')
        }

        const dataMore = await data.json()

        dataMore.forEach((u) => {
            const users = postCard(u.userId, u.id, u.title, u.body)
            document.body.append(users)
        })

    } catch (error) {
        console.log(error.message)        
    }
}

fetchData()
