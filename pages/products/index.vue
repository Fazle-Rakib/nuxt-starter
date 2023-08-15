<template>
    <div>
        <header class="font-bold my-4">Products</header>
        <div class="grid grid-cols-4 gap-5">
            <div 
            v-for="product in products"
            :key="product.id"
            class="bg-blue-100 rounded p-2"
            >
                <NuxtLink :to="`/products/${product.id}`"> {{product.title}} </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
    layout: "products",
  })

  const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>

<style scoped>

</style>