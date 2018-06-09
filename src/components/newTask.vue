<template>
    <div>
        <h1>New Task</h1>
        <form action="" name="newTask">
            <input type="text">
            <date-picker @close="show = false"
             v-if="show"
             v-model="date"></date-picker>
        </form>
        <router-link to="/time"><button>next</button></router-link>
    </div>
</template>
<script>
import DatePicker from 'vue-md-date-picker'

export default {
    name:'newTask',
    components: {
        DatePicker
    },
    data() {
        return {
            show: true,
            date: Date.now()
        }
    }
}
</script>

<style>

</style>


