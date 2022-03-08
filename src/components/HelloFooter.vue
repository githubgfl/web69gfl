<template>
    <footer class="footer">
        <span class="todo-count">
        <span>{{ todoNum}}</span>
        <span v-if="todoNum<=1">  items left</span>
        <span v-else>item left</span>
        </span>
        <ul class="filters">
            <li><a href="#/all" class="selected">All</a></li>
             <li><a href="#/active"></a>Active</li>
              <li><a href="#/completed"></a>Comppleted</li>
        </ul>
        <button class="clear-completed">Clear Completed</button>
    </footer>
</template>

<script>

    export default {
    
        name:"HelloFooter",
          computed:{
            todoNum(){
                return this.$parent.todoDatas.filter((value)=>{
                    return !value.hasCompleted;
                }).length;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>