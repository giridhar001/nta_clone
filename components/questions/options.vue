<template>
    <div>
        <div class="optionDiv" v-for="(value,key,index) in options" :key="index">
            <!-- <label class="radio-inline">
            <input type="radio" :name=id @click="selected_option(key)" :checked="question.chosen_option == key"> {{value}}</label>  -->

            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" :name=id class="custom-control-input" @click="selected_option(key)" :checked="question.chosen_option == key" :id=key>
                <label class="custom-control-label" :for=key> {{value}}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
    'question',
    'options',
    'id'
  ],
  methods:{
      selected_option(key){
          this.$emit('chosen_option',key)
          console.log(this.$store.state);
      }
  },
}
</script>

<style scoped>
    .optionDiv{
        display: inline;
        margin-right: 10px;
    }
</style>

