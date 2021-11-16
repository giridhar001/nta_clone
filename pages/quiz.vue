<template>
  <div class="container-fluid body-container">
    <div class="candidate-details row no-gutters">
      <NavBar />
    </div>
    <div class="candidate-details row no-gutters">
      <CandidateDetails />
    </div>
    <div class="quiz-section">
        <Questions />
      <!-- <div class="col-sm-6">
        <div class="row no-gutters">
          <div class="infoSection col-12">
            <InfoSection />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  // import 'firebase/firestore'
  // import * as firebase from 'firebase/app'

  import navBar from '~/components/navBar/navBar.vue'
  import CandidateDetails from '~/components/candidateDetails/candidateDetails.vue'
  import Questions from '~/components/questions/questions.vue'
  import InfoSection from '~/components/infoSection/infoSection.vue'

 export default {
  components:{
    navBar,
    CandidateDetails,
    Questions,
    InfoSection
  },
  beforeCreate() {
    // this.$store.dispatch('nuxtServerInit')
  },
}
</script>

<style scoped>
.infoSection{
  display: flex;
  justify-content: center;
}

.quiz-section{
  margin-left: 5%!important;
  margin-right: 5%!important;
  /* margin: 0px!important; */
}

.body-container{
  background-color: #f8f8f8;
}

/* .candidate-details {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
/* 
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
