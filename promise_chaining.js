function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("data fetched successfully");
            }
            else{
                reject("error fetching data");
            }
        }, 3000);
    });
}

fetchData()
    .then((data) => {
        console.log(data)
        return `this is called from the calling function`
    })
    .then((value)=> console.log(value))
    .catch((error) => console.log(error));