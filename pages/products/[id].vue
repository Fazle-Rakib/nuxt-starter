<template>
    <div>
        <div v-if="!pending">
            <product-details :product="product" />
        </div>
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