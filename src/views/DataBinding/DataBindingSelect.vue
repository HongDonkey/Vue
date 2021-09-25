<template>
  <div>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="64">제주</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      city: "64",
    };
  },
};
</script>