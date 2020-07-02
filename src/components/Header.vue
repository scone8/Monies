<template>
    <q-header>
        <div class="q-mb-xl q-pt-xl header">
            <div class="text-h5">Check Me Monies</div>
        </div>
        <q-img 
            src="statics/icons/money.jpg"
            class="header-image absolute-top"
            />
    </q-header>
</template>

<script>

export default {
  name: 'Header'
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
