<template>
  <div class="panel">
      <router-link class="user" :to="{path:'/user/'+user.loginname}">
        <img :src="user.avatar_url" alt="用户头像">
        <span>
            {{user.loginname}}
        </span>
      </router-link>
      <div>
          积分：{{user.score}}
      </div>
      <div>
          注册时间：
          {{
              $moment(user.create_at, 'YYYY-MM-DD')
              .startOf('day')
              .fromNow()
          }}
      </div>
  </div>
</template>

<script>
import {getUserByName} from '@/utils/api'

export default {
    name: 'ProfilePanel',
    props: ['loginname'],
    data() {
        return {
            user: {}
        }
    },
    methods: {
        fetchData() {
            getUserByName(this.loginname)
            .then(res=> {
                this.user = res.data

            })
        }
    },
    created() {
        if(!this.loginname) {
            return
        }
        this.fetchData(this.loginname)
    },
    watch: {
        loginname(loginname) {
            if(!loginname) {
                return
            }
            this.fetchData(loginname)
        }
    }
}
</script>

<style lang="scss" scoped>
.panel {
    display: flex;
    flex-direction: column;
    color: black;
    > a {
        display: flex;
        align-items: center;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
}
</style>
