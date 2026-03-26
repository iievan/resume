<template>
    <header class="mimalism-header mimalism-fade-in">
        <div class="mimalism-container">
            <h1 class="header-name">{{ name }}</h1>
            <h2 class="header-titles">{{ titles.join(" | ") }}</h2>
        </div>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    name: string;
    titles: string[];
}>();
</script>
