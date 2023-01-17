<script>
  import Task from './components/Task.vue'
  export default {
    components: {Task},
    data() {
      return {
        newTask: '',
        scheme: 'light',
        darkModePreference: false
      }
    },
    methods: {
      addTask(){
        if (this.newTask.trim() !== ''){
          this.store.ADD_TASK(this.newTask)
          this.newTask = ''
        }
      },
      switchTheme(){
        
        "dark" == this.scheme ? this.scheme = "light" : this.scheme = "dark"
        const element = document.getElementById("html");
        element.setAttribute("data-theme", this.scheme)
      }
    },
    inject: ["store"],
    mounted() {
      if (localStorage.getItem("tasks")) {
          this.store.INIT_STORE()
        }
    },
    beforeMount() {
      this.darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (this.darkModePreference){
        this.scheme = 'dark'
      }
    }
  }
</script>

<template >
  <header><p></p></header>
  <main class="container">
    <section>
        <div class="input">
          <div>
            <h1>Todo's</h1>
            <label for="switch">
              <input type="checkbox" id="switch" name="switch" role="switch" v-model="darkModePreference" @click="switchTheme">
              Dark mode
            </label>
          </div>
          <div class="create-new-task">
            <input type="text" @keypress.enter="addTask" v-model="newTask" placeholder="new task">
            <button @click="addTask">Add</button>
          </div>
        </div>
    </section>
    <div class="tasks custom-grid">
      <Task
      v-for="(task, i) in store.state.tasks"
      :key="i"
      :task="task"/>
    </div>
  </main>
</template>
<style>
  .custom-grid {
    grid-column-gap: var(--grid-spacing-horizontal);
    grid-row-gap: var(--grid-spacing-vertical);
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
  }
  @media (min-width: 992px) {
    .custom-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .custom-grid > * {
    min-width: 0;
  }
</style>
