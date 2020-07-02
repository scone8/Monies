<template>
    <q-layout view="hHh Lpr lff"  class="shadow-2 rounded-borders">
      <q-header>
        <div class="q-mb-xl q-pt-xl header">
            <div class="text-h4">Check Me Monies</div>
            <div class="text-h5">Sign Up</div>
        </div>
        <q-img 
            src="statics/icons/money.jpg"
            class="header-image absolute-top"
            />
    </q-header>
      <q-page-container>
          <div class="q-pa-md" style="max-width: 600px; text-align: center">
            <form 
                @submit.prevent.stop="onSubmit" 
                @reset.prevent.stop="onReset" 
                class="q-gutter-md" >
                <q-input
                    ref="name"
                    filled
                    v-model="name"
                    label="Your name *"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <q-input 
                    ref="email"
                    filled
                    type="email"
                    v-model="email"
                    label="Your email *"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <q-input 
                    v-model="password" 
                    filled 
                    :type="isPwd ? 'password' : 'text'" 
                    label="Enter password"
                    :rules="[ val => val && val.length > 0 || 'Please enter password']">
                    <template v-slot:append>
                        <q-icon
                            :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"

                        />
                    </template>
                </q-input>

                <q-input
                    ref="name"
                    filled
                    v-model="name"
                    label="Your name *"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />

                <div>
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </form>
          </div>
      </q-page-container>
    </q-layout>
</template>

<script>
import Header from 'components/Header.vue'

export default {
  name: 'SignUp',
  data () {
    return {
      name: null,
      email: null,
      password: null,
      confirmPass: null,
      isPwd: true,
    }
  },
  components: {
      Header
  },
  methods: {
    onSubmit () {
      this.$refs.name.validate()
      this.$refs.email.validate()

      if (this.$refs.name.hasError || this.$refs.email.hasError) {
        this.formHasError = true
      }
      else {
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Submitted'
        })
      }
    },
    onReset () {
      this.name = null
      this.email = null
      this.password = null
      this.comfirmPass = null

      //this.$refs.name.resetValidation()
      //this.$refs.email.resetValidation()
      //this.$refs.password.resetValidation()
      //this.$refs.confirmPass.resetValidation()
    }
  }
}
</script>
