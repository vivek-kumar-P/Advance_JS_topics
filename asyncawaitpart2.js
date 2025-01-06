function fetchpostdata(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("post data fetched")
        }, 2000);
    })
}


function fetchcommentdata(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("comment data fetched successfully")
        }, 3000);
    })
}

async function getblogdata(){
    try{
        console.log("fetching blog data....");
        // const postdata = await fetchpostdata()
        // const commentdata = await fetchcommentdata()
        const [postdata,commentdata] = await Promise.all([fetchpostdata(),fetchcommentdata()])
        console.log(postdata)
        console.log(commentdata)
        console.log("fetch complete");
    }
    catch(error){
        console.log("error fetching blog data", error);
    }
}

getblogdata()