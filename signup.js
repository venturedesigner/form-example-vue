// import { countries } from './countries'

const app = new Vue({
  el: '#app',
  data: {
    email: '',
    password: '',
    password2: '',
    countries: countries,
    pickedGender: '',
    date: '',
    selected: 'Select Country',
    checkedTerms: true,
    checkedMailing: true
  },
  computed: {
    validateEmail: function () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const test = re.test(String(this.email).toLowerCase())
      if (this.email === '' || test) { return true } else { return false }
    },
    passwordLength: function () {
      const test = this.password.length > 5
      if (this.password === '' || test) { return true } else { return false }
    },
    passwordMatch: function () {
      const test = this.password === this.password2
      if (this.password2 === '' || test) { return true } else { return false }
    },
    countrySelected: function () {
      const test = this.selected !== 'Select Country'
      if (this.selected === '' || test) { return true } else { return false }
    },
    validateAge: function () {
      const today = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
      const birthday = this.date
      const [bYear, bMonth, bDay] = birthday.split('-')
      const [tYear, tMonth, tDay] = today.split('-')
      const diffYears = tYear - bYear - (bMonth > tMonth || bDay > tDay ? 1 : 0)
      console.log(diffYears)
      const test = diffYears > 18
      if (this.date === '' || test) { return true } else { return false }
    },
    acceptTerms: function () {
      return this.checkedTerms
    }
  },
  methods: {
    validate: function () {
      if (this.validateEmail === false || this.email === '') {
        alert('Please provide valid email')
      } else if (this.passwordLength === false || this.password === '') {
        alert('Password too short')
      } else if (this.passwordMatch === false || this.password2 === '') {
        alert('Password should be the same')
      } else if (this.countrySelected === false || this.selected === '') {
        alert('Please select your country')
      } else if (this.validateAge === false || this.date === '') {
        alert('You should be 18 years old to register')
      } else if (this.acceptTerms === false) {
        alert('You must accept Terms of Use to register')
      } else {
        alert('You are IN!')
      }
    }

  }
})
