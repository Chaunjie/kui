<template>
  <div id="app">
    <div class="main-header">
      <div class="main-header-logo">
        <img src="./k.png"
        alt="logo">
      </div>
      <div class="main-header-title">kai-ui</div>
      <div class="main-header-version">v1.1.0</div>
      <ul class="main-header-nav">
        <li :class="!status ? 'active' : ''" @click="translate(false)">原生版本</li>
        <li :class="status ? 'active' : ''" @click="translate(true)">wepy版本</li>
      </ul>
    </div>

    <div class="main-">
      <div class="main--left">
        <ul v-for="(item, index) in itemList">
          <li class="group-title">{{ item.name }}</li>
          <li v-for="(it, i) in item.list">
            <router-link :to="it.path">
              {{ it.name }}
              <span v-if="it.nick" class="nick">{{ it.nick }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="main--right">
        <router-view class="markdown"></router-view>
        <div class="qr-block">
          <img width="100" class="qrcode" src="http://images.kaishiba.com/kaiqr.jpg"/>
          <p>扫码体验</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleList from './moduleList'
export default {
  name: 'App',
  data () {
    return {
      itemList: moduleList.list,
      status: false
    }
  },
  methods: {
    translate (e) {
      this.status = e
      if (e) {
        this.itemList = moduleList.wepyList
        this.$router.push({name: 'wepystart'})
      } else {
        this.itemList = moduleList.list
        this.$router.push({name: 'start'})
      }
    }
  },
  mounted () {
    this.$router.onReady(() => {
      const path = this.$router.history.current.path
      const index = path.indexOf('/wepy/')
      if (index >= 0) {
        this.status = true
        this.itemList = moduleList.wepyList
      }
    })
  }
}
</script>

<style>
@import './common/index.css';
</style>
