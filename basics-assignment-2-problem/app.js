Vue.createApp({
  data() {
    return {
      confirmedContentOne:"",
      contentOne:"",
      confirmedContentTwo:"",
      contentTwo:""
    };
  },
  methods: {
    alert() {
      alert("dididi");
    },
    setContentOne(event){
      this.contentOne = event.target.value;
    },
    comfirmContentOne(){
      this.confirmedContentOne = this.contentOne;
    },
    setContentTwo(event){
      this.contentTwo = event.target.value;
    },
    comfirmContentTwo(){
      this.confirmedContentTwo = this.contentTwo;
    },    
  }
}).mount('#assignment');