<template>
    <div>
        <h1>New Task</h1>
        <form action="" name="newTask">
            <date-picker @close="show = false" v-if="show" v-model="date"></date-picker>
            <label for="">Name</label>
            <input type="text" v-model="name">
            <br>
            <label for="">Alarm</label>
            <input type="radio" name="type" value="1" v-model="type">
            <label for="">Notification</label>
            <input type="radio" name="type" value="0" v-model="type">
            <textarea cols="30" rows="10" v-model="description"></textarea>
            <button @click="sendTask" type="button" >Create</button>
        </form>
    </div>
</template>
<script>
import DatePicker from 'vue-md-date-picker'
import axios from 'axios'

export default {
    name:'newTask',
    components: {
        DatePicker
    },
    methods: {
        sendTask: function(){
            axios.post('http://127.0.0.1:3000/task', {
                name: this.name,
                date: this.date,
                type: this.type,
                description: this.description
            })
            .then(response => {

            }).catch(error => {

            })
        }
    },
    data() {
        return {
            type: 0,
            name: '',
            date: undefined,
            description: '',
            show: true
        }
    }
}
</script>

<style>

</style>


