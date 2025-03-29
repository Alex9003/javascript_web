const products = [
    { name: 'Daenerys Sitting on Throne', price: 512, img: 'daenerys.jpeg', type: 'publick' },
    { name: 'Fawkes Vinyl Figure', price: 312, img: 'fawkes.jpeg', type: 'VIP' },
    { name: 'Flash Vinyl Figure', price: 645, img: 'flash.jpeg', type: 'publick' },
    { name: 'Kakashi', price: 700, img: 'kakashi.jpeg', type: 'VIP' },
    { name: 'The Mandalorian on Blurg', price: 400, img: 'mandalorian.jpeg', type: 'publick' },
    { name: 'Naruto', price: 639, img: 'naruto.jpeg', type: 'VIP' },
    { name: 'Rey Vinyl Figure', price: 138, img: 'rey.jpeg', type: 'publick' },
    { name: 'Steve Trevor Vinyl Figure', price: 138, img: 'steve.jpeg', type: 'publick' },
    { name: 'Moana Te Ka', price: 211, img: 'te_ka.jpeg', type: 'publick' }
];

const users = [
    {id:1, login: '1', password: '1', type:'registeerd',sale:4},
    {id:2, login: '2', password: '2', type:'VIP',sale:20},
    {id:3, login: '3', password: '3', type:'VIP',sale:20}
];

let userType = 'publick';
let user = {};

function userVerification(login, password){
    for (let i =0;i<users.length;i++){
        if(users[i].login === login && users[i].password === password){ //&& user[i]['password']
            return users[i]; //{
                // login: users[i].login, 
                // type: users[i].type
            // };
        }
    }
    return {};
}
if (confirm("Ви заєрестрований користувач")){

    let userLogin = prompt('Введіть логін:');
    let userPassword = prompt('Введіть пароль:');

    user = userVerification(userLogin,userPassword);

    // if(user.hasOwnProperty('login')){
    //     userType = user.type;
    // }
}

function pDiv(img,name, price){
    return "<div><img src = 'images/"+ img + 
            "'><p>" + name+ 
            "</p><p>" + Math.round(+price) + "</p></div>";
}

// Повертає рядок, -> 1) продукт для зареєстрованих,
// 2) або пустий якщо товар vip і користувач нек зареєстровани 
function addProduct(product){
    if(user.hasOwnProperty('login')){
        if (user.type === 'VIP'){
            return pDiv(product.img,product.name,((1-user.sale/100)*product.price));
        }
        else if(product.type !=='VIP'){
            return pDiv(product.img,product.name,((1-user.sale/100)*product.price));
        }
    }
    else{
        if (product.type !=='VIP'){
            return pDiv(product.img, product.name, product.price);
        }
    }
    return ''
}
console.log(userType);

let content = "<header><h1>Funka</h1></header><main>";
// TODO: вивести товари, різними цінами в залежності від людити
let div  = '';

for (let i =0;i<products.length;i++){
    div += addProduct(products[i]);
}

content += div + "</main>";

document.body.innerHTML =content;