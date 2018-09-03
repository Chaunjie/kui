<template>
  <div id="app">
    <div class="main-header">
      <div class="main-header-logo">
        <img src="./k.png"
        alt="logo">
      </div>
      <div class="main-header-title">kai-ui</div>
      <div class="main-header-version">v1.2.3</div>
      <ul class="main-header-nav">
        <li :class="!status ? 'active' : ''" @click="translate(false)">原生版本</li>
        <li :class="status ? 'active' : ''" @click="translate(true)">wepy版本</li>
        <li class="github">
          <a href="https://github.com/Chaunjie/kai-ui" style="display: block;">
            <svg style="margin-top: 18px;fill: #455a64;" height="28" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="28" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </li>
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
