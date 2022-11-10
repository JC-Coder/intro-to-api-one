table = document.querySelector('table tbody');


// API for get requests
let users = fetch("http://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(items => { 
            console.log(items);
            let html = '';

            items.forEach(item => {
                html += `
                <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.address.city}</td>
                <td>${item.phone}</td>
                </tr>
                `
            })

            table.innerHTML = html;
        })



// console.log(table);

// table.innerHTML = `
// <tr>
// <td>1</td>
// <td>joseph</td>
// <td>joseph@gmail.com</td>
// <td>lagos</td>
// <td>080000000</td>
// </tr>
// `


// forEach sample
// let numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach(num => {
//     console.log(num);
// })






// ASSIGNMENT 
/**
 * make a get request to http://jsonplaceholder.typicode.com/posts
 * and list out all the posts using html dom 
 */