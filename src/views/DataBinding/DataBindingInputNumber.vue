<template>
<div>
<input type="text" v-model.number="numberModel"/>
</div>
</template>
<script>
export default {
    data() {
        return {
            numberModel: 3
        };
    },
}
</script>