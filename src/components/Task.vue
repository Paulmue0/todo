<template>
  <article>
      <div :class="`task ${task.done ? 'is-complete' : ''}`">
        <div class="">
            <div class="content">
                <h3>{{ task.content }}</h3>
            </div>
            <div class="buttons">
                <button class="outline undo-button" @click="toggleTask">{{ task.done ? 'Undo' : 'Done'}}</button>
                <button class="remove-button" @click="removeTask">remove</button>
        </div>
        </div>
      </div>
  </article>
</template>

<script>
export default {
    props: ['task'],
    inject: ["store"],
    methods: {
        toggleTask(){
            this.store.TOGGLE_TASK(this.task)
        },
        removeTask(){
            this.store.REMOVE_TASK(this.task)
        },
    }
}
</script>

<style>
    .task.is-complete {
	opacity: 0.5;
    }

    .task.is-complete .content {
	text-decoration: line-through;
    }
    .remove-button {
        background-color: rgb(181, 53, 53);
        width: 100%;
    }
    .undo-button {
        width: 100%;
    }
</style>