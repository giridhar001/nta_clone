<template>
  <div class="container-fluid body-container">
    <div class="candidate-details row no-gutters">
      <NavBar />
    </div>
    <div class="candidate-details row no-gutters">
      <CandidateDetails />
    </div>
    <div v-if="viewResult == false">
      <div class="quiz-section page-header">
          <h4>Thank you, Submitted Successfully.</h4>
      </div>
      <div class="row page-header">
          <mdb-btn color="sucess" class="btn result_btn" @click="viewResults()">VIEW RESULT</mdb-btn>
      </div>
    </div>
    <div v-if="viewResult == true">
      <div class="row quiz-section result-section">
        <ResultTable />
      </div> 
    </div>
  </div>
</template>

<script>

    import navBar from '~/components/navBar/navBar.vue'
    import CandidateDetails from '~/components/candidateDetails/candidateDetails.vue'
    import ResultTable from '~/components/resultPage/resultTable.vue'
    import { mdbBtn } from 'mdbvue'

    export default {
    components:{
        navBar,
        CandidateDetails,
        mdbBtn,
        ResultTable
    },
    data() {
      return {
        viewResult:false,
      }
    },
    methods:{
      viewResults(){
        console.log('hello');
        this.viewResult = true;
      }
    },
}
</script>

<style scoped>

.quiz-section{
  margin-left: 5%!important;
  margin-right: 5%!important;
}

.body-container{
  background-color: #f8f8f8;
}
.page-header{
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
.result_btn{
    background-color: #fff!important;
    color: black;
    border:1px solid grey
}
.result-section{
  margin-top: 50px;
}
</style>
