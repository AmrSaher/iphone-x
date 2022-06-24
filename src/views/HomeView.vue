<template>
    <div class="screen home">
        <div class="apps">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/1.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/2.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/3.png" alt="app">
            <router-link to="/camera">
                <img src="https://iphone-12.bookie0.repl.co/Images/Apps/4.png" alt="app">
            </router-link>
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/5.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/6.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/7.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/8.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/9.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/10.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/11.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/12.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/13.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/14.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/15.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/16.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/17.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/18.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/19.png" alt="app">
            <img src="https://iphone-12.bookie0.repl.co/Images/Apps/20.png" alt="app">
        </div>
        <div class="bottom">
            <div class="pills">
                <span class="pill"></span>
                <span class="pill active"></span>
                <span class="pill"></span>
            </div>
            <div class="shortcuts">
                <img src="https://iphone-12.bookie0.repl.co/Images/Apps/phone.png" alt="app">
                <img src="https://iphone-12.bookie0.repl.co/Images/Apps/safari.png" alt="app">
                <img src="https://iphone-12.bookie0.repl.co/Images/Apps/iMessage.png" alt="app">
                <img src="https://iphone-12.bookie0.repl.co/Images/Apps/music.png" alt="app">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView'
};
</script>

<style lang="scss" scoped>
.home {
    background-image: url(../assets/img/homescreen.jpeg);
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
    img {
        width: 70px;
        height: 70px;
        cursor: pointer;
    }
    .apps {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 96%;
        margin-left: auto;
        margin-right: auto;
    }
    .bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .pills {
            display: flex;
            align-items: center;
            gap: 10px;
            .pill {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #c8c5c569;
                &.active {
                    background-color: #fff;
                }
            }
        }
        .shortcuts {
            background-color: #c8c5c569;
            padding: 5px;
            border-radius: 25px;
            width: 96%;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
        }
    }
}
</style>