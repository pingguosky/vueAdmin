<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
//  import { mapGetters } from 'vuex'
  import { Navbar, Sidebar, AppMain } from '@/views/layout'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      AppMain
    },
    computed: {
//      ...mapGetters([
//        'permission_routers'
//      ])
//      sidebar() {
//        return this.$store.state.app.sidebar
//      }
    }
  }
</script>
<style>

</style>
