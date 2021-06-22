// import { countries } from './countries'

const app = new Vue ({
  el: '#app',
  data: {
    email: '',
    password: '',
    password2: '',
    countries: countries,
    pickedGender: ''
  },
  computed: {
    checkpass: function () {
      if (this.password === this.password2) {
         return true }
      else { return false }
    }
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