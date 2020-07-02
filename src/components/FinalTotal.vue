<template>
    <div class="big-total">
       <h3 class="total">€{{ComputeTotal()}}</h3>
    </div>
</template>
 
<script>
export default {
  name: 'FinalTatal',
  props: ['IncomeTotal','ExpenseTotal'],
  data () {
    return {
      total: 0
    }
  },
  methods: {
    ComputeTotal(){
        this.total =  this.IncomeTotal - this.ExpenseTotal
        return this.total.toFixed(2)
    }
  }
}
</script>

<style lang="stylus">
.total {
    color: #800080;
}
.big-total{
    text-align: center
}
</style>