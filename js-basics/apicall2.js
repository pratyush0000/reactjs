const axios = require('axios');

const getData = async () => {
    try{
    const ddata = await axios.get("https://cat-fact.herokuapp.com/facts");
    const finaldata = ddata.data;
    const rand = Math.floor(Math.random() * finaldata.length)
    console.log(finaldata[rand].text);
    } catch(err){
        console.log(err)
    }
}

getData();