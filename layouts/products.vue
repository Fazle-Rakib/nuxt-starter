<template>
    <div>
        <header class="p-4">
            <NuxtLink to="/">Back to Home</NuxtLink> 
        </header> 
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer>
            <nav class="container mx-auto p-4 flex justify-between">
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/"> Home</NuxtLink> </li>
                    <li> <NuxtLink to="/about"> About</NuxtLink> </li>
                    <li> <NuxtLink to="/products" class="btn"> Products</NuxtLink> </li>
                </ul>
            </nav>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
  .router-link-exact-active {
    color: #1111ee;
  }
</style>