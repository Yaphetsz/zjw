<template>
  <div class="m-index">
    <section>
      <router-view></router-view>
    </section>
    <nav>
      <ul>
        <router-link tag="li" to="/board" active-class="active" class="yo-ico">
          <span>&#xe6b8;<b>首页</b></span>
        </router-link>
        <router-link tag="li" to="/list" active-class="active" class="yo-ico">
          <span>&#xe7da;<b>分类</b></span>
        </router-link>
        <router-link tag="li" to="/car" active-class="active" class="yo-ico">
          <span>&#xe78b;<b>购物车</b></span>
        </router-link>
        <router-link tag="li" to="/my" active-class="active" class="yo-ico">
          <span>&#xe78b;<b>我的</b></span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './Header.vue'
Vue.component('Header', Header)
export default {

}
</script>
