<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          {{  $route.name }}
        </q-toolbar-title>

       
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu inicial</q-item-label>
        
        <q-item clickable tag="a"  to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Início</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/experimentos">
          <q-item-section avatar>
            <q-icon name="colorize"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Experimentos</q-item-label>
          </q-item-section>
        </q-item>


        <q-item clickable tag="a" to="/lisimetros">
          <q-item-section avatar>
            <q-icon name="opacity" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lisimetros</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },

  
}
</script>
