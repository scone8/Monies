<template>
    <q-layout view="hHh Lpr lff"  class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" 
            round 
            dense 
            icon="menu" />
          <!--<q-toolbar-title>Monies</q-toolbar-title>
          <div> {{ todaysDate }} </div>-->

        </q-toolbar>
        <div class="q-px-lg g-pt-xxl q-mb-md header">
          <div class="text-h3">Check Me Monies</div>
          <div class="text-subtitle1">{{ todaysDate }}</div>
        </div>
        <q-img 
          src="statics/icons/money.jpg"
          class="header-image absolute-top"

          />
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="!drawer || miniState"
        @click.capture="drawerClick"

        :width="200"
        :breakpoint="700"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <BudgetsNav
              v-for="budget in BudgetList"
              :key="budget.id"
              v-bind="budget"
            />
    
            <!--<q-separator />

            <q-item 
              clickable
              v-ripple
              @click="NewBudget">
              <q-item-section avatar>
                <q-icon name="add" />
              </q-item-section>

              <q-item-section>
                New Budget
              </q-item-section>
            </q-item>-->
          </q-list>
        </q-scroll-area>

        <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
          <q-btn
            dense
            round
            unelevated
            color="accent"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div>
      </q-drawer>

      <q-page-container>
        <keep-alive>
          <router-view />
        </keep-alive>
      </q-page-container>
    </q-layout>
</template>

<script>
import { date } from 'quasar'
import EnterMoney from 'components/EnterMoney.vue'
import BudgetsNav from 'components/BudgetsNav.vue'


export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: false,
      miniState: true,
      BudgetList: [
        {
          id: 0,
          title: 'Budget 1',
          pageLink: '/'
        },
        {
          id: 1,
          title: 'Budget 2',
          pageLink: '/Budget2'
        } ,
        {
          id: 2,
          title: 'Budget 3',
          pageLink: '/Budget3'
        } 
      ]
    }
  },
  components:{
    EnterMoney,
    BudgetsNav
  },
  methods: {
    drawerClick (e) {
      if (this.miniState) {
        this.miniState = false
        e.stopPropagation()
      }
    },
    /*NewBudget () {
      var number = this.BudgetList.length + 1
      var title = 'Budget ' + number

      if(this.BudgetList.length == 0){
        var pageLink = '/';
      }else{
        var pageLink = '/' + title.replace(/\s/g, '');
      }

      this.BudgetList.push({
        id: number,
        title: title,
        pageLink: pageLink
      })
    }*/
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  }
}
</script>

<style>

.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%)
}

.header{
  text-align: center;
}

</style>
