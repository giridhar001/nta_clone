<template>
  <div class="container-fluid body-container">
    <div class="candidate-details row no-gutters">
      <NavBar />
    </div>
    
    <div>
      <div class="row page-header">
        <h4>Please read the instructions carefully</h4>
      </div>
      <div class="row quiz-section">
        <div v-for="(instruction,instruction_index) in instructions" :key="instruction_index">
          <!-- General section -->
          <h6 class="instruction_section_heading">General Instructions:</h6>
          <div v-for="(oneInstruction,oneInstruction_index) in instruction.general_instruction" :key="oneInstruction_index">
              <ul>
                <li>{{oneInstruction}}</li>
              </ul>
              
          </div>
          <div class="row quiz-section">

                <table>
                    <tbody>
                        <tr>
                            <td class="not-visited-tr">
                                <mdb-badge class="not-visited label-icon shadow">1</mdb-badge>
                                <!-- <p class="not-visited label-icon shadow">{{ not_visited }}</p> -->
                                <p class="label">Not Visited</p>
                            </td>
                            <td>
                                <mdb-badge class="not-answered label-icon shadow">1</mdb-badge>
                                <!-- <p class="not-answered label-icon shadow">{{ not_answered }}</p> -->
                                <p class="label">Not Answered</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mdb-badge class="answered label-icon shadow">1</mdb-badge>
                                <p class="label">Answered</p>
                            </td>
                            <td>
                                <mdb-badge class="marked-for-review label-icon shadow">1</mdb-badge>
                                <p class="label">Marked For Review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mdb-badge class="answered-marked-for-review label-icon shadow">1</mdb-badge>
                                <p class="label">Answered & Marked for Review</p>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>

          </div>

          <!-- navigating_to_a_question section -->
          <h6 class="instruction_section_heading">Navigating to a Question:</h6>
          <p>To answer a question, do the following: </p>
          <div v-for="(oneInstruction,oneInstruction_index) in instruction.navigating_to_a_question" :key="oneInstruction_index">
            <ul>
                <li>{{oneInstruction}}</li>
            </ul>
          </div>


          <!-- answering_a_question section -->
          <h6 class="instruction_section_heading">Answering a Question:</h6>
          <p>Procedure for answering a multiple choice type question: </p>
          <div v-for="(oneInstruction,oneInstruction_index) in instruction.answering_a_question" :key="oneInstruction_index">
            <ul>
                <li>{{oneInstruction}}</li>
            </ul>
          </div>
          <p>To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</p>
          
          
          <!-- navigating_throgh_section section -->
          <h6 class="instruction_section_heading">Navigating through sections:</h6>
          <div v-for="(oneInstruction,oneInstruction_index) in instruction.navigating_to_sections" :key="oneInstruction_index">
            <ul>
                <li>{{oneInstruction}}</li>
            </ul>
          </div>

          <!-- read and accept the terms section -->
          <hr class="hr_line">
          <div class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" class="custom-control-input" id="defaultInline1" @change="checkbox($event)">
            <label class="custom-control-label" for="defaultInline1"> I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations </label>
          </div>

          <div class="row page-header">
            <mdb-btn color="sucess" class="btn proceed_btn" @click="proceed()">PROCEED</mdb-btn>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navBar from '~/components/navBar/navBar.vue';
  // import InfoSection from '~/components/infoSection/infoSection.vue'
  import { mdbBadge } from 'mdbvue';
  import { mdbBtn } from 'mdbvue';
  export default {
    components:{
      navBar,
      mdbBadge,
      mdbBtn,
      // InfoSection
    },
    data() {
      return {
        candidate_details:this.$store.state.candidateDetails,
        current_time:this.$store.state.current_time,
        instructions:this.$store.state.instructions,
        accepted:false,
        end: new Date('2021-11-04T16:37:00')
      }
    },
    methods:{
      checkbox(event){
        if(event.target.checked == true){
          this.accepted = true
          console.log(this.accepted);
        }
        if(event.target.checked == false){
          this.accepted = false
          console.log(this.accepted);
        }
        
      },
      proceed(){
        // status=started
        this.$store.commit('updateStatus',"started");

        if(this.accepted == true){
          this.$router.push({ path: `/quiz` })
          this.$store.commit('proceed');
        }
        if(this.accepted == false){
          alert('Accept the terms to Proceed.')
        }
      },
    },
    mounted() {
        // Store current time in sec in database
        // this.$store.commit('updateCurrentTime')
        // var deadline_in_sec = Math.trunc(Date.parse(this.candidate_details.deadline)/1000);

        // if(this.candidate_details.status == "ready_to_start"){

        //   // var deadline_in_sec = Math.trunc(Date.parse(this.candidate_details.deadline)/1000);
        //   // var startTime_in_sec = this.candidate_details.start_time

        //   if(deadline_in_sec < (this.current_time)){

        //     this.$store.commit('updateStatus',"expired");
        //     console.log(deadline_in_sec)
        //     console.log(this.current_time)
        //     this.$router.push({ path: `/expired` })
        //   }
        //   else{
        //     this.$router.push({ path: `` })
        //   }

        // }
        // else if(this.candidate_details.status == "started"){

        //   if(deadline_in_sec < (this.current_time)){
        //     // status = completed
        //     this.$store.commit('updateStatus',"completed");
        //     this.$router.push({ path: `/submitted` })
        //   }

        //   // console.log(this.candidate_details.status)
        //   this.$router.push({ path: `/quiz` })
        // }
        // else if(this.candidate_details.status == "expired"){
        //   console.log(this.candidate_details.status)
        //   this.$router.push({ path: `/expired` })
        // }
        // else if(this.candidate_details.status == "completed"){
        //   console.log(this.candidate_details.status)
        //   this.$router.push({ path: `/submitted` })
        // }
    },
  }
</script>

<style scoped>
  .body-container{
    background-color: #f8f8f8;
  }
  .proceed_btn{
        background-color: #449d44!important ;
        color: #fff;
    }
  .page-header{
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .instruction_section_heading{
    margin-top: 10px;
    text-decoration: underline;
    font-weight: 700!important;
  }
  .label-icon{
      margin-right:5px;
      display: inline-block;
  }
  .label{
      display: inline-block;
  }
  .hr_line{
    margin-top: 20px;
  }
  .quiz-section{
  margin-left: 5%!important;
  margin-right: 5%!important;
  /* margin: 0px!important; */
  }
  .not-visited{
    text-align: center;
    padding:10px;
    border: 1px solid black;
    background-color: #d1d1d1!important;
    opacity: 0.5;
    color: black!important;
    font-size: 16px;
    width: 80px;
    height: 35px;
}
.answered{
    text-align: center;
    padding-top:10px;
    border: 1px solid black;
    background-color: #8DA833!important;
    font-size: 16px;
    width: 80px;
    height: 35px;
    color: #fff;
}
.not-answered{
    text-align: center;
    padding-top:10px;
    border: 1px solid black;
    font-size: 16px;
    width: 80px;
    height: 35px;
    background-color: #F3A147!important;
    color: #fff;
    /* border-radius: 25px; */
}
.marked-for-review{
    text-align: center;
    padding-top:10px;
    border: 1px solid black;
    font-size: 16px;
    width: 80px;
    height: 35px;
    background-color: #4C9EDA!important;
    color: #fff;
    /* border-radius: 25px; */
}
.answered-marked-for-review{
    text-align: center;
    padding-top:10px;
    border: 1px solid black;
    font-size: 16px;
    width: 80px;
    height: 35px;
    background-color: #142952!important;
    color: #fff;
    /* border-radius: 25px; */
}

</style>