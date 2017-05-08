<template lang="html">
  <div class="m-list">
    <Header/>
    <section>
      <div class="m-content">


        <ul v-for="(item, index) in list">
          <li><router-link to="/list/kind1"  active-class="active"><img :src="item.categorys[0].img"/></router-link></li>


          <li><router-link to="/kind/kind2"  active-class="active"><img :src="item.categorys[2].img"/></router-link></li>

          <li><router-link to="/kind/kind3"  active-class="active"><img :src="item.categorys[4].img"/></router-link></li>

          <li><router-link to="/kind/kind4"  active-class="active"><img :src="item.categorys[6].img"/></router-link></li>
        </ul>
        <ul v-for="(item, index) in list">

          <li><router-link to="/kind/kind5" active-class="active"><img :src="item.categorys[1].img"/></router-link></li>

          <li><router-link to="/kind/kind6" active-class="active"><img :src="item.categorys[3].img"/></router-link></li>

          <li><router-link to="/kind/kind7" active-class="active"><img :src="item.categorys[5].img"/></router-link></li>

        </ul>
      </div>
      <!-- <ul>
        <li v-for="(item,index) in list">
          <img :src="item.categorys[index].img" alt=""/>
          <img :src="item.categorys[index].img" alt=""/>
          <img :src="item.categorys[index].img" alt=""/>
          <img :src="item.categorys[index].img" alt=""/>
        </li>
      </ul> -->
    </section>
  </div>
</template>

<script>


  import Vue from 'vue'

  import Header from './Header.vue'
  Vue.component('Header', Header)

  import Kind1 from './Kind1.vue'
  Vue.component('kind1', Kind1)

  import utilAxios from '../utils/axios'
  export default {
    data(){
      return {
        list: []
      }
    },

    mounted: function () {
      let that = this
      utilAxios.get({
        url: 'http://localhost:9000/list',
        method: 'get',
        callback: function (res) {
          that.list = that.list.concat(res.data.content[0])
          console.log(that.list)
        }
      })
    }
  }
</script>

<style lang="css">
</style>
