<template>
  <q-item
    :to='this.pageLink'
    exact 
    clickable 
    v-ripple>
    <q-item-section avatar>
        <q-icon name="note" />
        </q-item-section>

        <q-item-section>
            {{title}}
        </q-item-section>
    </q-item>
</template>
 
<script>
export default {
  name: 'Budgets',
  props: ['id','title', 'pageLink'],
}
</script>