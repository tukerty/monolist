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
export default {
    name:'newTask'
}
</script>

