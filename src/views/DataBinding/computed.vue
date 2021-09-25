<template>
<div>
    <h1>Full Name : {{fullname}}</h1>
</div>
</template>
<script>
export default {
    data() {
        return {
            firstname: '길동',
            lastname: '홍'
        };
    },
    computed:{
        fullname(){
            return this.firstname +  ' ' + this.lastname;
        }
    }
}
</script>