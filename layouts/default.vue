<template>
    <div>
        <header>
            <nav class="container mx-auto p-4 flex justify-between">
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/"> Home</NuxtLink> </li>
                    <li> <NuxtLink to="/about"> About</NuxtLink> </li>
                    <li> <NuxtLink to="/products" class="btn"> Products</NuxtLink> </li>
                </ul>
            </nav>
        </header> 
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
  .router-link-exact-active {
    color: #1111ee;
  }
</style>