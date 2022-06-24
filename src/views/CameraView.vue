<template>
    <div class="screen camera">
        <div class="top">
            <i class="material-symbols-outlined">bolt</i>
            <i class="material-symbols-outlined">keyboard_arrow_up</i>
            <i class="material-symbols-outlined">motion_photos_auto</i>
        </div>
        <div class="zoom">
            <span>.5</span>
            <span class="active">1x</span>
            <span>2</span>
        </div>
        <div class="bottom">
            <div class="modes">
                <span class="mode">video</span>
                <span class="mode active">photo</span>
                <span class="mode">portrait</span>
            </div>
            <div class="main">
                <div class="photos"></div>
                <div class="take-photo">
                    <span></span>
                </div>
                <i class="material-symbols-outlined">autorenew</i>
            </div>
            <router-link to="/" class="home-bar"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CameraView'
};
</script>

<style lang="scss" scoped>
.camera {
    background-image: url(https://i.pinimg.com/originals/e5/b1/2b/e5b12b245432a71efdf97103b3ea4bb1.jpg);
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .top,
    .bottom {
        width: 100%;
        background-color: #262626b0;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
    }
    .top {
        padding-top: 40px;
        height: 120px;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        i {
            font-size: 30px;
            cursor: pointer;
        }
    }
    .zoom {
        position: absolute;
        background-color: #26262659;
        padding: 2px 10px;
        border-radius: 15px;
        bottom: 185px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 10px;
        span {
            cursor: pointer;
            padding: 3px 5px;
            background-color: #262626b0;
            border-radius: 50%;
            font-size: 12px;
            font-weight: 400;
            &.active {
                padding: 6px;
                font-size: 15px;
                color: #f8d651;
            }
        }
    }
    .bottom {
        padding-top: 15px;
        padding-bottom: 15px;
        height: 170px;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        flex-direction: column;
        align-items: center;
        .modes {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 25px;
            .mode {
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 400;
                cursor: pointer;
                &.active {
                    color: #f8d651;
                }
            }
        }
        .main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .photos {
                width: 40px;
                height: 40px;
                background-color: #161616;
                border-radius: 5px;
                cursor: pointer;
            }
            .take-photo {
                width: 55px;
                height: 55px;
                border: 1px solid #fff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                span {
                    width: 48px;
                    height: 48px;
                    background-color: #fff;
                    border-radius: 50%;
                }
            }
            i {
                padding: 5px;
                background-color: #515056bd;
                border-radius: 50%;
                cursor: pointer;
                font-size: 25px;
            }
        }
        .home-bar {
            width: 170px;
            height: 5px;
            border-radius: 20px;
            background-color: #fffcff;
            cursor: pointer;
        }
    }
}
</style>