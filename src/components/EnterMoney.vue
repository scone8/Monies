<template>
  <div>
    <q-form
      class="q-gutter-md"
    >

      <div class="inputItem row" 
        v-for="(input,index) in inputFieldList" 
        :key="input.id" >
        
        <div class="col-5">
          <q-input
            class="q-pr-lg input-type"
            filled
            dense
            :placeholder="title + ' Type'" 
            v-model="input.name" />
        </div>
        
        <div class="col-5">
          <q-input 
            filled
            v-model="input.amount" 
            dense
            label='€'
              @change="CalculateTotal()" />  
        </div>

        <div class="col-2">
          <q-btn icon="delete" 
            @click="DeleteInput(index), CalculateTotal()" 
            color="primary"
            flat 
            class="delete-btn"/>  
        </div>
      </div>

      <div class='add-button'>
        <q-btn icon="add" 
          @click="AddItem" 
          color="primary" 
          flat />
        </div>
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
          name:'',
          amount: ''
        }
      ],
      total:0
    }
  },
  methods: {
    AddItem() {
      this.inputFieldList.push({name: '', amount: ''})
    },
    DeleteInput(index){
      this.inputFieldList.splice(index, 1)
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
<style scoped>
.add-button{
  text-align: center;
}
</style>