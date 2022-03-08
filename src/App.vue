<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input type="text" class="new-todo" v-model="newTodo"
      @keyup.enter="addTodo"
      />
    </header>
    <section class="main">
      <input type="checkbox" id="toggle-all" class="toggle-all" v-model="isAll"/>
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <HelloWorld v-for="value in todoDatas" :key="value.id" :todo="value"/>
       
      </ul>
    </section>
    <HelloFooter />
  </section>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloFooter from "./components/HelloFooter.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloFooter
  },
  data() {
    return {
      todoDatas:[],
      newTodo:""
    }
  },
  methods:{
      addTodo(){
      if(this.newTodo.trim=="") return ;
      let id=new Date().getTime();
      let title=this.newTodo;
      this.todoDatas.push({id:id,title:title,hasCompleted:false}),
      this.newTodo="";

    }
  },
   computed:{
      isAll:{
        get(){
          return false;
        },
        set(value){
          this.todoDatas.map((todo)=>{
                todo.hasCompleted=value;
                return todo;
            });
        }
      }
    }
};
</script>

<style>
</style>
