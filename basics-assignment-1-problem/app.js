Vue.createApp({
  data() {
    return {
      name: 'Marcus',
      age: 26,
      vueLink:'https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&rect=17%2C0%2C5964%2C2982&q=45&auto=format&w=1356&h=668&fit=crop'
    };
  },
  methods: {
    generateReandomNumber() {
      return Math.random().toFixed(2);
    }
  }
}).mount('#assignment');