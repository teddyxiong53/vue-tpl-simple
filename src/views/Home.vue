<template>
  <div class="home">
      <el-tabs v-model="tab" @tab-click="tabChanged">
          <el-tab-pane label="全部" name="all">
              <Content :list="list" />
          </el-tab-pane>
          <el-tab-pane label="精华" name="good">
              <Content :list="list" />
          </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import Content from '@/components/Content.vue'

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

        },
        scrollMethod() {

        },
        tabChanged() {

        }
    },
    created() {

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
