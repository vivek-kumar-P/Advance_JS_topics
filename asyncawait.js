function fetchuserdata(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({name : "chaicode" , URL: "https://chaicode.com"})
            // reject({name : "chaicode" , URL: "https://chaicode.com"})
        }, 3000);
    })
}

async function getuserdata(){
    try{
        console.log(" fetching user data...")
        const userdata  = await fetchuserdata()
        console.log("user data fetched successfully")
        console.log("user data :", userdata )
    } catch (error){
        console.log("error fetching data",error)
    };
}

getuserdata();