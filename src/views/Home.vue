<template>
  <div class="home">
      <el-tabs v-model="tab" @tab-click="tabChanged">
          <el-tab-pane label="全部" name="all">
              <Content :list="list" />
          </el-tab-pane>
          <el-tab-pane label="精华" name="good">
              <Content :list="list" />
          </el-tab-pane>
          <el-tab-pane label="分享" name="share">
              <Content :list="list" />
          </el-tab-pane>
          <el-tab-pane label="问答" name="ask">
              <Content :list="list" />
          </el-tab-pane>
          <el-tab-pane label="招聘" name="job">
              <Content :list="list" />
          </el-tab-pane>

      </el-tabs>
  </div>
</template>

<script>
import Content from '@/components/Content.vue'
import {getTopics} from '@/utils/api'

export default {
    name: "Home",
    data() {
        return {
            page: 1,
            limit: 20,
            tab: 'all',
            list: [],
            store: {}
        }
    },
    methods: {
        getTopics() {
            getTopics({
                page: this.page,
                limit: this.limit,
                tab: this.tab
            })
            .then((res)=> {
                this.list = res.data
                this.limit = this.limit +10
                const store = this.store
                store[this.tab]  = {
                    limit: this.limit,
                    data: res.data
                }
            })
        },
        scrollMethod() {

        },
        tabChanged() {
            const store = this.store
            console.log("current tab:",this.tab)
            //这个是说明从来还没有进入到这个tab过。所以要重新读取数据。
            if(!store[this.tab]) {
                this.limit = 20
                this.list = []
                this.getTopics()
                return
            }
            //到这里，说明之前进过这个tab。
            //直接把之前的数据取出来就好了。
            this.list = store[this.tab].data
            this.limit = store[this.tab].limit

        }
    },
    created() {
        this.tab = 'all'
        this.getTopics()

    },
    destroyed() {

    },
    components: {
        Content
    }
}
</script>

<style lang="scss" scoped>
.home {
    margin: auto;
    width: 75%;
    padding: 0;

}

</style>
