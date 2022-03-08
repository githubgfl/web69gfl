<template>
  <li :class="{ completed: todo.hasCompleted, editing:todo == editedTodo }">
    <div class="view">
      <input type="checkbox" class="toggle" v-model="todo.hasCompleted" />

      <label @dblclick="editTodo(todo)"> {{ todo.title }}</label>
      <button class="destroy" @click="removeTodo(todo.id)"></button>
    </div>
    <input type="text" class="edit" v-focus v-model.trim="editedTodo.title"/>
  </li>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["todo"],
  data() {
    return {
      editedTodo: "",
    };
  },
  methods: {
    removeTodo(id) {
      this.$parent.todoDatas = this.$parent.todoDatas.filter((value) => {
        return !(value.id == id); //过滤  判断符合 返回flase删除
      });
    },
    editTodo(todo) {
      this.editedTodo=todo
    },
  },
};
</script>

<style>
</style>
