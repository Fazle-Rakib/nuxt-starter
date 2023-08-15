<template>
    <div>
        <h1>Products <span class="font-bold italic">{{id}}</span></h1>
        <p v-if="!pending" class="bg-blue-400 text-gray-100 p-4 shadow-sm flex flex-col rounded">
            <span>{{ product.title}}</span>
            <span>{{ product.price}}</span>
            <span>{{ product.category}}</span> 
            <img :src="product.image" alt="" class="rounded max-w-sm"> 
        </p>
        <p v-else>
            Loading!!!!!!!!
        </p>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products",
    })

    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id;
    const { data: product, pending } = await useFetch(uri);
</script>

<style scoped>

</style>