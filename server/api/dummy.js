export default defineEventHandler(async (event) => {
    const {name} = getQuery(event);
    const {age} = await readBody(event);

    return {
        message: `Hello from ${name}. Your age is ${age}.`,
    }
})