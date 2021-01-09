<template>
    <div class="user">
        <ProfilePanel :loginname="loginname"/>
    </div>
</template>

<script>
import ProfilePanel from '@/components/ProfilePanel'


export default {
    name: 'User',
    data() {
        return {
            loginname: ''
        }
    },
    created() {
        this.loginname = this.$route.params.id
    },
    beforeRouteUpdate(to, from, next) {
        this.loginname = to.params.id
        next()
    },
    components: {
        ProfilePanel
    }

}
</script>

<style lang="scss" scoped>
.user {
    width: 75%;
    margin: auto;
}
</style>
