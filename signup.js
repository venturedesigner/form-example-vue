const app = new Vue ({
  el: '#app',
  data: {
    email: '',
    password: ''
  },
  computed: {
  
  },
  methods: {
    validate: function (){
      if (this.password.length > 5) {
        alert('You are IN!')
      } else {
        alert('Password too short')
      }
    }
  }
})