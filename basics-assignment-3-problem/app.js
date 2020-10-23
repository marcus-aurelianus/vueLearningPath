const app = Vue.createApp({
  data() {
    return {
      result: "Not there yet",
      number: 0
    };
  },
  methods: {
    addNum(toadd) {
      this.number += toadd;
      if (this.number === 37){
        this.result = 37;
      }else if (this.number > 37){
        this.result = "Too much!";
      }
    }
  },
  watch: {
    result(value){
      if (value){
        const that = this;
        setTimeout(function(){ 
          that.number = 0;
          that.result = "Not there yet";
        },5000);
      }
    }
  }
});

app.mount('#assignment');
