const app = Vue.createApp({
  data() {
    return {
      userClassOne: "",
      number: 0,
      visibility:true,
      colorInput:""
    };
  },
  methods: {
    setClassOne(event) {
      this.userClassOne = event.target.value;
    },
    toggleVisibility(){
      this.visibility = !this.visibility;
    },
    changeBG(event){
      this.colorInput = event.target.value;
    }
  }
});

app.mount('#assignment');
