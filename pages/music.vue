<!--  -->
<template>
  <div class>
    <nav>
      <ul>
        <li v-for="(nav,index) in navList" :key="index">
          <nuxt-link :to="nav.path">
            <header>
              <div class="menu">
                <span>{{ nav.name }}</span>
                <img :src="nav.icon" alt>
              </div>
            </header>
          </nuxt-link>
          <div v-for="(singer,sub) in nav.singer" :key="sub" class="detail">
            <div class="singer">
              <span>{{ singer.name }}</span>
            </div>
            <img :src="singer.image" alt>
            <div v-for="(songs,i) in singer.songs" :key="i" class="songs">
              <nuxt-link :to="songs.link" target="_blank">
                <span>{{ songs.song }}</span>
              </nuxt-link>
            </div>
          </div>
        </li>
      </ul>
      <video ref="myVideo" class="video-js">
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
      </video>
    </nav>
    <nuxt-child/>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import navList from '~/utils/navList.js'
export default {
  // 组件命名 作用： 当项目使用keep-alive时，可搭配组件name进行缓存过滤
  name: '',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      navList: navList
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建之前
  beforeCreate () { },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 生命周期 - 挂载之前
  beforeMount () { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.initVideo();
  },
  // 生命周期 - 更新之前
  beforeUpdate () { },
  // 生命周期 - 更新之后
  updated () { },
  // 生命周期 - 销毁之前
  beforeDestroy () { },
  // 生命周期 - 销毁完成
  destroyed () { },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated () { },
  // 方法集合
  methods: {
    initVideo () {
      // 初始化视频方法
      this.$video(this.$refs.myVideo, {
        // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        // 自动播放属性,muted:静音播放
        autoplay: 'muted',
        // 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: 'auto',
        // 设置视频播放器的显示宽度（以像素为单位）
        width: '800px',
        // 设置视频播放器的显示高度（以像素为单位）
        height: '400px'
      });
    }
  }
}
</script>
<style lang='css' scoped>
/* @import url(); 引入公共css类 */

a {
  text-decoration: none;
}
ul {
  padding: 0;
  margin: 0;
  display: flex;
}
li {
  list-style: none;
  flex: 1;
  text-align: center;
}
header {
  display: flex;
}
.menu {
  flex: 1;
}
.menu img {
  width: 45px;
  vertical-align: middle;
}
.singer {
  margin-bottom: 25px;
}
.detail img {
  width: 90px;
}
</style>