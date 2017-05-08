<template lang="html">

  <div class="m-board">
    <header class="yo-header yo-header-a">
      <input type="text" name="" value="">
    </header>
    <mt-swipe :auto="2000">
      <mt-swipe-item>
        <img src="" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import utilAxios from '../utils/axios'

export default {

}
</script>
