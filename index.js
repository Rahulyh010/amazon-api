const { default: axios } = require("axios");



function api(){
    axios.get(`https://github.com/Rahulyh010/amazon-api/blob/main/db.json`)
    .then((res)=>{
   console.log(res)
    })
    .catch((ee)=>{
        console.log(ee)
    })
}


api();