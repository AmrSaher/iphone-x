<template>
    <div class="toolbar">
        <div class="right">
            <i class="material-symbols-outlined wifi">wifi</i>
            <i class="material-symbols-outlined charge">battery_very_low</i>
        </div>
        <div class="left" v-if="this.$route.name == 'home'">
            <span class="time">12:00</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToolBar'
};
</script>

<style lang="scss" scoped>
.toolbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 40px;
    color: #fff;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 3px 25px;
    .right {
        display: flex;
        align-items: center;
        gap: 3px;
        .charge {
            font-size: 25px;
        }
        .wifi {
            font-size: 20px;
        }
    }
}
</style>