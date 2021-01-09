<template>
    <div >
        <div class="topic" v-for="item in list" :key="item.id">
            <router-link :to="{path:'/user/'+item.author.loginname}">
                <img :src="item.author.avatar_url" alt="用户头像"
                    @error="imgErr(item.author.avatar_url)">
            </router-link>
            <span class="count">
                <em>{{item.reply_count}}/{{item.visit_count}}</em>
            </span>
            <el-tag :type="$tab[item.tab]&&$tab[item.tab].type">
                {{ item.tab ? $tab[item.tab] && $tab[item.tab].name : '无分类' }}
            </el-tag>
            <router-link class="title" :to="{path:'/topic/'+item.id}">
                {{item.title}}
            </router-link>
            <span class="time">
                {{
                    $moment(item.last_reply_at, 'YYYY-MM-DD').startOf('day').fromNow()
                }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topics',
    props: ['list'],
    data() {
        return {
            article: []
        }
    },
    methods: {
        imgErr(url) {
            console.log(url)
        }
    }
}
</script>

<style lang="scss" scoped>
.topic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    span.count {
        width: 50px;
        color: black;
    }
    .title {
        overflow: hidden;
        width: 60%;
        text-overflow: ellipsis;

    }
    span.time {
        width: 70px;
        color: blue;
        text-align: right;
    }
}
</style>
