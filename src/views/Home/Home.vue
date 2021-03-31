<template>
  <div class="home">
    <top-bar></top-bar>
    <left-nav></left-nav>
  </div>
</template>



<script>
// @ is an alias to /src
import TopBar from 'components/common/TopBar'
import LeftNav from 'components/common/LeftNav'


export default {
  name: 'Home',
  components: {
    TopBar,
    LeftNav
  }

    }
</script>
