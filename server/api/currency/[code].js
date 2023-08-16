export default defineEventHandler( async (event) => {
    const {code} = event.context.params;
    
    // Use of enviromental vars
    const {baseApi} = useRuntimeConfig();

    const response = await $fetch(`${baseApi}?i=${code}`)
    return response;
})