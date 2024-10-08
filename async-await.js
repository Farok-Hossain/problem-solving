async function hello () {
    return "hello";
}

const result = hello();
console.log(result);



function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 5000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('hi');
}

asyncCall();