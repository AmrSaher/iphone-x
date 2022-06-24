<template>
    <div class="screen pass">
        <div class="top">
            <img src="https://iphone-12.bookie0.repl.co/Images/Icons/lock.png" alt="lock">
            <div class="input">
                <h1>Enter Password</h1>
                <div class="pills">
                    <span :class="'pill ' + (password > 0 ? 'active' : '')"></span>
                    <span :class="'pill ' + (password > 1 ? 'active' : '')"></span>
                    <span :class="'pill ' + (password > 2 ? 'active' : '')"></span>
                    <span :class="'pill ' + (password > 3 ? 'active' : '')"></span>
                    <span :class="'pill ' + (password > 4 ? 'active' : '')"></span>
                    <span :class="'pill ' + (password > 5 ? 'active' : '')"></span>
                </div>
            </div>
            <div class="btns">
                <button class="btn" @click="addNumber">1</button>
                <button class="btn" @click="addNumber">
                    <span>2</span>
                    <span>ABC</span>
                </button>
                <button class="btn" @click="addNumber">
                    <span>3</span>
                    <span>DEF</span>
                </button>
                <button class="btn" @click="addNumber">
                    <span>4</span>
                    <span>GHI</span>
                </button>
                <button class="btn" @click="addNumber">
                    <span>5</span>
                    <span>JKL</span>
                </button>
                <button class="btn" @click="addNumber">
                    <span>6</span>
                    <span>MNO</span>
                </button>
                <button class="btn" @click="addNumber">
                    <span>7</span>
                    <span>PQRS</span>
                </button>
                <button class="btn" @click="addNumber">
                    <span>8</span>
                    <span>TUV</span>
                </button>
                <button class="btn" @click="addNumber">
                    <span>9</span>
                    <span>WXYZ</span>
                </button>
                <button class="btn" @click="addNumber">0</button>
            </div>
        </div>
        <div class="bottom">
            <span>Emergency</span>
            <span @click="cancel">Cancel</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PassView',
    data() {
        return {
            password: 0
        };
    },
    methods: {
        addNumber() {
            this.password++;
            this.checkPassword();
        },
        checkPassword() {
            if (this.password >= 6) {
                setTimeout(() => {
                    this.$router.push({ name: 'home' });
                }, 500);
            }
        },
        cancel() {
            this.$router.push({ name: 'lock' });
        }
    }
};
</script>

<style lang="scss" scoped>
.pass {
    background-color: #191b2c;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        .input {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            h1 {
                font-size: 20px;
                font-weight: 300;
            }
            .pills {
                display: flex;
                align-items: center;
                gap: 20px;
                .pill {
                    width: 15px;
                    height: 15px;
                    border: 1px solid #fff;
                    border-radius: 50%;
                    &.active {
                        background-color: #fff;
                    }
                }
            }
        }
        .btns {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
            .btn {
                width: 68px;
                height: 68px;
                background-color: #5c5e6c;
                border: none;
                border-radius: 50%;
                color: #fff;
                font-size: 28px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2px;
                font-weight: 400;
                span:last-child {
                    font-size: 15px;
                    font-weight: 300;
                }
            }
        }
    }
    .bottom {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        span {
            cursor: pointer;
        }
    }
}
</style>