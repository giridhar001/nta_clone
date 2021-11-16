<template>
  <div class="countdown">
    <p class="countdown__block">:</p>
    <div v-if="days" class="countdown__block">
      <div class="countdown__digit">{{ days | twoDigits }}</div>
      <div class="countdown__text">:</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ hours | twoDigits }}</div>
      <div class="countdown__text">:</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ minutes | twoDigits }}</div>
      <div class="countdown__text">:</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ seconds | twoDigits }}</div>
      <div class="countdown__text"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: null
  },
  data () {
    return {
      now: this.$store.state.candidateDetails.start_time,
      event: this.date,
      finish: false
    }
  },
  mounted () {
    const _self = this
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000)
  },
  computed: {
    secondCount () {
      return this.calculatedDate - this.now
    },
    calculatedDate () {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    seconds () {
      if (this.secondCount < 0) return 0
      return this.secondCount % 60
    },
    minutes () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },
    hours () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },
    days () {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    }
  },
  filters: {
    twoDigits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  }
}
</script>

<style scoped>
    .countdown__block{
        display:inline
    }
    .countdown__digit{
        display:inline
    }
    .countdown__text{
        display:inline
    }
</style>