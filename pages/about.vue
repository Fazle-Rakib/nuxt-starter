<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quaerat.</p>
        <p class="bg-blue-400 text-gray-100 p-4 shadow-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sequi enim magnam obcaecati harum architecto ex, at facilis! Mollitia nisi nulla qui debitis numquam modi molestiae labore doloribus aut ratione.</p>
        <div>
            {{data}}
        </div>
    </div>
</template>

<script setup>
    const {data} = useFetch('/api/dummy');
</script>

<style scoped>

</style>