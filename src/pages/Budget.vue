<template>
  <q-page padding>
      <div class="q-pl-lg row">
        <div class="col-11">
           <p class="budget-title">{{title}}</p>
        </div>
              
      </div>

    <q-expansion-item
      dense-toggle
      expand-separator
    >
      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar icon="money" text-color="primary" />
        </q-item-section>

        <q-item-section>
          Income
        </q-item-section>

        <q-item-section side>
          €{{IncomeCollapseTotal}}
        </q-item-section>
      </template>
      <q-card>
        <q-card-section>
          <EnterMoney title="Income"
            @CalculateTotal="UpdateIncomeTotal"
            @AddItem="IncomeList"
            @DeleteItem="IncomeList"/>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      dense-toggle
    >
      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar icon="money" text-color="primary" />
        </q-item-section>

        <q-item-section class="section-title">
          Expenses
        </q-item-section>

        <q-item-section side>
          €{{ExpenseCollapseTotal}}
        </q-item-section>
      </template>
      <q-card>
        <q-card-section>
          <EnterMoney 
            title="Expenses" 
            @CalculateTotal="UpdateExpensesTotal"
            @AddItem="ExpenseList"
            @DeleteItem="ExpenseList" />
        </q-card-section>
      </q-card>
      
    </q-expansion-item>
    <FinalTotal 
      :IncomeTotal="IncomeCollapseTotal"
      :ExpenseTotal="ExpenseCollapseTotal"
    />
    
  </q-page>
</template>

<script>
import { date } from 'quasar'
import EnterMoney from 'components/EnterMoney.vue'
import FinalTotal from 'components/FinalTotal.vue'


export default {
  props: ['title'],
  data () {
    return {
      ExpenseCollapseTotal:0,
      IncomeCollapseTotal: 0,
      FinalTotal: 0,
      IncomeList: [],
      ExpenseList: []
    }
  },
  components:{
    EnterMoney,
    FinalTotal
  },
  methods: {
    UpdateIncomeTotal(amount) {
      this.IncomeCollapseTotal = amount.toFixed(2)

    },
    UpdateExpensesTotal(amount) {
      this.ExpenseCollapseTotal = amount.toFixed(2)
    }
  }
}
</script>

<style lang="stylus">
.budget-title{
  color: #800080;
  font-size: 20px;
  font-weight:bold;
}

</style>