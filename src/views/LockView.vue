<template>
  <div class="screen lock">
    <div class="top">
      <img src="https://iphone-12.bookie0.repl.co/Images/Icons/lock.png" alt="lock">
      <span class="time">12:00</span>
      <span class="date">Monday, July 10</span>
    </div>
    <div class="bottom">
      <i class="material-symbols-outlined" @click="flash" :style="style">flashlight_{{ style == '' ? 'on' : 'off' }}</i>
      <router-link to="/pass" class="home-bar"></router-link>
      <router-link to="/camera" class="material-symbols-outlined">photo_camera</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LockView',
  data() {
    return {
      style: ''
    };
  },
  methods: {
    flash() {
      if (this.style == '') {
        this.style = 'background-color: #ffffffce; color: #515056bd;';
      } else {
        this.style = '';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes updown {
  0% {
    margin-bottom: -50px;
  }
  50% {
    margin-bottom: -70px;
  }
  100% {
    margin-bottom: -50px;
  }
}

.lock {
  background-image: url(../assets/img/lockscreen.jpeg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    .time {
      font-size: 60px;
      font-weight: 300;
    }
    .date {
      font-size: 20px;
      font-weight: 200;
    }
  }
  .bottom {
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .material-symbols-outlined {
      color: #ffffffce;
      background-color: #515056bd;
      padding: 15px;
      border-radius: 50%;
      font-size: 30px;
      cursor: pointer;
      transition: 0.3s all ease;
    }
    .home-bar {
      width: 150px;
      height: 6.64px;
      border-radius: 20px;
      background-color: #fffcff;
      animation: updown 1.5s linear infinite;
      cursor: pointer;
    }
  }
}
</style>