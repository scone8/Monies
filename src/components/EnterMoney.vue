<template>
  <div>
    <q-form
      class="q-gutter-md"
    >

      <div class="inputItem row " 
        v-for="input in inputFieldList" 
        :key="input.id" >
        <div class="col-md-5 col-sm-5 q-pr-lg">
          <q-input
            :placeholder="title + ' Type'" 
            v-model="input.name" />
        </div>
        
        <div class="col-md-5 col-sm-4 q-pr-lg">
          <q-input 
            v-model="input.amount" 
            label='€'
              @change="CalculateTotal()" />  
        </div>

        <div class="col-md-1 col-sm-1">
          <q-btn icon="delete" 
            @click="DeleteInput(input.id), CalculateTotal()" 
            color="primary"
            flat class="q-ml-sm center"/>  
        </div>
      </div>

      <q-btn icon="add" 
        @click="AddItem" 
        color="primary" 
        flat class="q-ml-sm"/>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'EnterMoney',
  props: ['title'],
  data () {
    return {
      inputFieldList: [
        {
          id: 0,
          name:'',
          amount: ''
        }
      ],
      total:0
    }
  },
  methods: {
    AddItem() {
      var newId = this.inputFieldList.lenght
      this.inputFieldList.push({id: newId, name: '', amount: 0})
    },
    DeleteInput(id){
      var number = id-1
      this.inputFieldList.splice(number, 1)
    },
    CalculateTotal () {
      this.total = 0
      for(let i=0; i < this.inputFieldList.length; i++){
        this.total = parseFloat(this.inputFieldList[i].amount) + parseFloat(this.total)
      }
      this.$emit('CalculateTotal', this.total)
      return this.total;
    }
  }
}
</script>
