let promises = new Promise(
    function (resolve, reject)
     {
        setTimeout(function () 
        {
            let API = true;
            if (API) {
                resolve("promise fullfilled");
            }
            else {
                reject("promise rejected");
            }

        },4000)
    });
async function check()
{
    let data=await promises;
    console.log("executing");
    console.log(data);
}
let a=check();
console.log(a);


