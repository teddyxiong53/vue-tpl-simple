<template>
  <div class="reply">
      <div>
          <span>{{data.length}}</span>&nbsp;回复
      </div>
      <div v-for="(reply,index) in data" :key="reply.id">
          <router-link :to="{path:'/user/'+reply.author.loginname}">
            <img :src="reply.author && reply.author.avatar_url" alt="头像">
          </router-link>
          <div>
              <div class="info">
                  <p>
                      <span>{{index+1}}楼&nbsp;</span>
                      <router-link :to="{path:'/user/'+reply.author.loginname}">
                        {{reply.author.loginname}}
                      </router-link>
                      <span>
                          &nbsp;
                          {{
                              $moment(reply.create_at, 'YYYY-MM-DD')
                              .startOf('day')
                              .fromNow()
                          }}
                      </span>
                  </p>
              </div>
              <p v-html="reply.content"></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Reply',
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.reply {
    width: 100%;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
    }
    > div {
        display: flex;
        border: 1px solid #ebedf0;
        color: rgba($color: #000000, $alpha: 0.65);
        padding: 10px 20px;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            p {
                width: 100%;
            }
            .info {
                width: 100%;
                display: flex;

            }
        }
    }
}
</style>
