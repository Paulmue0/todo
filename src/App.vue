<script>
  import Task from './components/Task.vue'
  export default {
    components: {Task},
    data() {
      return {
        newTask: ''
      }
    },
    methods: {
      addTask(){
        if (this.newTask){
          this.store.ADD_TASK(this.newTask)
          this.newTask = ''
        }
      }
    },
    inject: ["store"],
    mounted() {
      if (sessionStorage.getItem("store"))
        this.store.INIT_STORE()
    },
  }
</script>

<template>
  <main class="container">
    <section>
      <form>
        <div class="input">
          <div>
            <h1>Todo's
            </h1>
          </div>
          <div class="create-new-task">
            <input type="text" @keypress.enter="addTask" v-model="newTask" placeholder="new task">
            <button @click="addTask">Add</button>
          </div>
        </div>
      </form>
    </section>
    <div class="grid">
      <Task
      v-for="(task, i) in store.state.tasks"
      :key="i"
      :task="task"/>
    </div>
  </main>
</template>

<style>

    /* Large devices (laptops/desktops, 992px and up) */

   
</style>
