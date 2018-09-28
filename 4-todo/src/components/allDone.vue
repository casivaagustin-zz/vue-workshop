<template>
    <div>
        <button @click="markAllAsDone">Mark all as done</button>
    </div>
</template>

<script>
export default {
    methods: {
        markAllAsDone: function() {
           this.$emit('markAllAsDone')
        }
    }
}
</script>