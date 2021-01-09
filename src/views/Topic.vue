<template>
    <div class="topic">
        <div class="left">
            <!-- 标题 -->
            <div class="title" v-html="topic.title">

            </div>
            <!-- 信息 -->
            <div class="info">
                <span>
                    发布于&nbsp;
                    {{ $moment(topic.create_at, 'YYYY-MM-DD').startOf('day').fromNow() }}
                    &nbsp; &nbsp;
                </span>
                作者：
                <router-link :to="{path:'/user/'+topic.loginname}">
                    {{topic.loginname}}
                </router-link>
                &nbsp; &nbsp;
                <span>{{topic.visit_count}}次浏览</span>
                &nbsp; &nbsp;
                <span>
                    来自：
                    {{ $tab[topic.tab]&& $tab[topic.tab].name }}
                </span>

            </div>
            <!-- 这里后面放一根分割线 -->
            <!-- 文章内容 -->
            <div class="content" v-html="topic.content">
            </div>
            <!-- 回复 -->
            <Reply :data="topic.replies"/>
        </div>
        <div class="right">
        </div>
    </div>
</template>

<script>
import {getTopicById} from '@/utils/api'
import Reply from '@/components/Reply'

export default {
    name: 'Topic',
    data() {
        return {
            topic: {}
        }
    },
    methods: {
        fetchData(id) {
            getTopicById(id)
            .then(res=> {
                this.topic = {
                    ...res.data,
                    ...res.data.author
                }
            })
        }
    },
    //在这个钩子函数里读取数据。
    created() {
        this.fetchData(this.$route.params.id)
    },
    //下面这个是router的钩子函数，是为了应对component复用的情况。
    beforeRouteUpdate(to, from, next) {
        this.fetchData(to.params.id)
        next()
    },
    components: {
        Reply
    }
}
</script>

<style lang="scss" scoped>
.topic {
    display: flex;
    margin-bottom: 100px;
    .title {
        color: black;
        font-weight: bold;
        font-size: 25px;
        margin-bottom: 8px;
    }
    .content {
        color: #333;
        line-height: 1.6;
        img {
            width: 100%;
        }
    }
    .left {
        width: 72%;
        float: left;
        .info {
            display: flex;
            align-items: center;
            color: #838383;
            font-size: 12px;
        }
    }
    .right {
        width: 25%;
        height: 100%;
        margin-left: 2%;
        float: right;
    }
}
</style>
