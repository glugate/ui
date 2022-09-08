<script setup lang="ts">
interface Props {
    value : string | number | boolean | Date
}
defineProps<Props>()
</script>

<template>
    <div class="tbl-cell">{{ value }}</div>
</template>