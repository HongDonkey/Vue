<template>
  <div>
      <button type="button" @click="one(), two()">Click</button>
      <p>The counter is : {{counter}} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter : 0
    };
  },
  methods: {
      one(){
          alert('One')
      },
      two(){
          alert('Two')
      }
  },
};
</script>