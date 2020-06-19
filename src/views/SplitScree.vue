<template>
  <div class="split-scree">
    <template v-if="false">
      <div class="left" />
      <div class="right" />
      <div
        v-drag-dividing="{ beforeClass: '.left', afterClass: '.right' }"
        class="line"
      />
    </template>
    <template v-else>
      <div class="top" />
      <div class="bottom" />
      <div
        v-drag-dividing.vertical="{
          beforeClass: '.top',
          afterClass: '.bottom',
        }"
        class="line-vertical"
      />
    </template>
  </div>
</template>
<script>
// @ is an alias to /src
import dragDividing from '@/directive/dragDividing'
export default {
  name: 'Home',
  directives: {
    dragDividing,
  },
  components: {},
  data() {
    return {}
  },
}
</script>
<style scoped lang="scss">
.split-scree {
  /* display: flex; */
  height: 100vh;
}

.left {
  background: rgb(104, 44, 44);
}

.right {
  background: rgb(77, 148, 66);
}

.line {
  top: 0;
  position: absolute;
  left: 50%;
  width: 5px;
  height: 100vh;
  background: #000;
}

.line-vertical {
  background: #000;
  left: 0;
  position: absolute;
  top: 40%;
  width: 100%;
  height: 10px;
}

.top,
.bottom {
  background: rgb(97, 61, 61);
  height: 45vh;

  p {
    div {
      &:hover {
        background: #fff;
      }
    }
  }
}

.top {
  background: rgb(71, 116, 80);
}
</style>
