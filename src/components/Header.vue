<template>
  <div class="header">
      <div class="info">
          <a href="/">
            <img :src="require('@/assets/image/cnodejs.svg')" alt="网站logo">
          </a>
          <span @click="dialogVisible=true">
            关于
          </span>
      </div>
      <el-dialog title="关于本项目" :visible.sync="dialogVisible" width="75%">
          <div class="inside-dialog">
              <p>
              作者：
              <a href="http://only4u.tech" target="_blank"></a>
              teddyxiong53
              </p>
              <div>
                  <p>技术栈</p>
                  <ul>
                      <li>Vue</li>
                      <li>Element UI</li>
                  </ul>
              </div>
          </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            dialogVisible: false
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 50px;
    background: lightblue;
    > div.info {
        width: 800px;
        height: 100%;
        margin: auto;
        a {
            width: 120px;
            height: 50px;
            display: block;
            float: left;
        }
    }
    span {
        float: right;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
    }
}
</style>
