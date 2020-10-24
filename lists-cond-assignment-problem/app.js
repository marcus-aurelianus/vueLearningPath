const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue:"",
      listVisible: true 
    };
  },
  methods:{
    addGoal(){
      if (this.enteredGoalValue.length>0){
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = "";
      }
    },
    removeGoal(index){
      this.goals.splice(index,1);
    },
    toggleVisibility(){
      this.listVisible = !this.listVisible;
    }
  }
});

app.mount('#assignment');