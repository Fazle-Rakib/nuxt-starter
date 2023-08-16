export default defineEventHandler(async (event) => {
    // Handle query params
    // const {name} = getQuery(event);

    // Handle request body
    // const {age} = await readBody(event);

    // return {
    //     message: `Hello from ${name}. Your age is ${age}.`,
    // }

    // Private api key
    const { data } = await $fetch('https://mocki.io/v1/80c2f550-0f20-445d-aaeb-c1c452e2637d');
    
    return data;
})