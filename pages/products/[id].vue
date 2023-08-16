<template>
    <Head>
        <Title>
            Custom | {{product.title}}
        </Title>
        <Meta name="custom" :content="product.description"></Meta>
    </Head>
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
    if(!product.value) {
        throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
    }
</script>

<style scoped>

</style>