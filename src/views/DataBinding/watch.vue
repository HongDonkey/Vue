<template>
<div>
    <h1>Full Name : {{fullname}}</h1>
    <button type="button" @click="changeName">변경</button>
</div>
</template>
<script>
export default {
    data() {
        return {
            firstname: '길동',
            lastname: '홍',
            fullname:''
        };
    },
    watch:{
        firstname(){
            this.fullname = this.firstname +  ' ' + this.lastname;
        },
        lastname(){
            this.fullname = this.firstname + ' ' + this.lastname;
        }
    },
    methods:{
        changeName(){
            this.lastname = '고'
        }
    }
}
</script>