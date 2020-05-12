<template>
  <div>
    <Titlebar></Titlebar>
    <AppMain></AppMain>
  </div>
</template>
<script>
import AppMain from './components/AppMain'
import Titlebar from './components/Titlebar'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Titlebar,
  },
}
</script>
