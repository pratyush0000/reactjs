const axios = require('axios');

const data = axios.get("https://cat-fact.herokuapp.com/facts")

data.then((res)=>{
    const fax = res.data
    const randomIndex = Math.floor(Math.random() * fax.length);
    const randomFax = fax[randomIndex];
    console.log(randomFax.text)
}).catch((err)=>{
    console.log(err);
})