<template>
    <div class="phone">
        <ToolBar v-if="this.$route.name != 'close' && this.$route.name != 'camera'" />
        <span class="btn lock-btn" :style="style" @click="closePhone"></span>
        <slot />
    </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue';

export default {
    name: 'PhoneLayout',
    components: {
        ToolBar
    },
    data() {
        return {
            style: '',
        };
    },
    mounted() {
        
    },
    methods: {
        checkLock() {
            if (this.$route.name == 'close') {
                setTimeout(() => {
                    this.$router.push({ name: 'lock' });
                }, 100);
            } else {
                setTimeout(() => {
                    this.$router.push({ name: 'close' });
                }, 100);
            }
        },
        closePhone() {
            this.style = "right: -17px; background-color: #515056;";
            this.checkLock();
            setTimeout(() => {
                this.style = "";
            }, 300);
        }
    }
};
</script>

<style lang="scss" scoped>
.phone {
    position: relative;
    width: 360px;
    height: 780px;
    box-shadow: 0px 0px 0px 11px #000, 0px 0px 0px 15px #515056, 20px 18px 13px 3px rgb(0 0 0 / 40%);
    border-radius: 40px;
    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    &::before {
        top: 0;
        width: 56%;
        height: 30px;
        background-color: #000;
        border-radius: 0px 0px 40px 40px;
    }
    &::after {
        top: 0px;
        left: 50%;
        transform: translate(-50%, 6px);
        height: 8px;
        width: 15%;
        background-color: #101010;
        border-radius: 8px;
        box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
    }
    .btn {
        position: absolute;
    }
    .lock-btn {
        top: 180px;
        right: -20px;
        width: 5px;
        height: 80px;
        background-color: #3c3b41;
        transition: 0.3s all ease;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        cursor: pointer;
    }
}
</style>