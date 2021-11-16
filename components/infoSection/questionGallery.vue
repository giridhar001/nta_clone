<template>
    <div class="card question-card">
        <div class="row no-gutters card-body overflow-auto">
            <!-- <div v-for="(question, index) in questions" :key="question.id" class="oneBox">
                <div v-if="question.viewed == false">
                    <mdb-btn  @click="selected_question(index)" class="button not-visited label-icon shadow" :id=index>{{ index+1 }}</mdb-btn>
                </div>
                <div v-else-if="question.marked_for_review == true && question.chosen_option == null">
                    <mdb-btn  @click="selected_question(index)" class="button marked-for-review label-icon shadow" :id=index>{{ index+1 }}</mdb-btn>
                </div>
                <div v-else-if="(question.marked_for_review == true) && (question.chosen_option != null)">
                    <mdb-btn  @click="selected_question(index)" class="button answered-marked-for-review label-icon shadow" :id=index>{{ index+1 }}</mdb-btn>
                </div>
                <div v-else-if="(question.chosen_option != null)||(question.previously_chosen !=null)">
                    <mdb-btn  @click="selected_question(index)" class="button answered label-icon shadow" :id=index>{{ index+1 }}</mdb-btn>
                </div>
                <div v-else-if="question.chosen_option == null && question.previously_chosen == null">
                    <mdb-btn  @click="selected_question(index)" class="button not-answered label-icon shadow" :id=index>{{ index+1 }}</mdb-btn>
                </div>
                
            </div> -->
<!-- <fieldset style="border:1px solid #999; padding:6px;">
<legend style="text-align: left;margin-top:-15px;">References</legend>
//Some Text...
</fieldset> -->
            <div v-for="(oneGroup, group_index) in questionGroups" :key="group_index" class="oneBox row">
                    <!-- <mdb-btn  @click="selected_question(index)" class="button not-visited label-icon shadow" :id=index>{{ index+1 }}</mdb-btn> -->
            <!-- <div class="oneSubject col-12">  -->
                <form class="col-12">
                <div v-if="group_index == current_question_group_index">
                    
                    <fieldset class="background">
                        <legend> {{oneGroup.name}} </legend>
                        <div v-for="(question, question_index) in oneGroup.questions" :key="question_index" class="oneBox">
                            
                            <div v-if="question.viewed === false">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-visited label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-visited label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                            </div>

                            <div v-else-if="question.marked_for_review == true && question.chosen_option == -1">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button marked-for-review label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button marked-for-review label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <!-- <mdb-btn  @click="selected_question(group_index,question_index)" class="button marked-for-review label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn> -->
                            </div>

                            <div v-else-if="(question.marked_for_review == true) && (question.chosen_option != -1)">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered-marked-for-review label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered-marked-for-review label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <!-- <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered-marked-for-review label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn> -->
                            </div>
                            <div v-else-if="(question.chosen_option != -1)||(question.previously_chosen !=-1)">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <!-- <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn> -->
                            </div>
                            <div v-else-if="question.chosen_option == -1 && question.previously_chosen == -1">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-answered label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-answered label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <!-- <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-answered label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn> -->
                            </div>

                        </div>
                    </fieldset>
                </div>
                <div v-else>
                    <fieldset>
                        <legend> {{oneGroup.name}} </legend>
                        <div v-for="(question, question_index) in oneGroup.questions" :key="question_index" class="oneBox">
                            
                            <div v-if="question.viewed === false">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-visited label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-visited label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                            </div>

                            <div v-else-if="question.marked_for_review == true && question.chosen_option == -1">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button marked-for-review label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button marked-for-review label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <!-- <mdb-btn  @click="selected_question(group_index,question_index)" class="button marked-for-review label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn> -->
                            </div>

                            <div v-else-if="(question.marked_for_review == true) && (question.chosen_option != -1)">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered-marked-for-review label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered-marked-for-review label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <!-- <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered-marked-for-review label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn> -->
                            </div>
                            <div v-else-if="(question.chosen_option != -1)||(question.previously_chosen !=-1)">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <!-- <mdb-btn  @click="selected_question(group_index,question_index)" class="button answered label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn> -->
                            </div>
                            <div v-else-if="question.chosen_option == -1 && question.previously_chosen == -1">
                                <span v-if="(group_index == current_question_group_index)&&(question_index == current_question_index)">
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-answered label-icon shadow border" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-answered label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn>
                                </span>
                                <!-- <mdb-btn  @click="selected_question(group_index,question_index)" class="button not-answered label-icon shadow" :id=question_index>{{ question_index+1 }}</mdb-btn> -->
                            </div>

                        </div>
                    </fieldset>
                </div>
                
                </form>
            <!-- </div> -->


            </div>
        </div>
    </div>
</template>

<script>
    import { mdbBtn } from 'mdbvue';
export default {
    components: {
      mdbBtn
    },
    data(){
      return{
          questions: this.$store.state.questions,
          questionGroups: this.$store.state.questionGroups,
          current_question_index: this.$store.state.current_question_index,
          current_question_group_index: this.$store.state.current_question_group_index,
      }
    },
    methods:{
      selected_question(group_index,question_index){
          this.$store.commit('change_question_index',{
                                                    'group_index':group_index
                                                    ,'question_index':question_index
                                                    })
          console.log(this.$store.state.current_question_index);
        // this.check(index);
      },
    },
    watch:{
            // current_question_index(){
            //     this.$store.commit('viwed',this.current_question_index)
            // },
            current_question_index(){
                this.$store.commit('viwed',{
                                            'group_index':this.current_question_group_index,
                                            'question_index':this.current_question_index
                                                    })
            },
            current_question_group_index(){
                this.$store.commit('viwed',{
                                            'group_index':this.current_question_group_index,
                                            'question_index':this.current_question_index
                                                    })
            },
            '$store.state.current_question_index': function(){
                this.current_question_index = this.$store.state.current_question_index
                // this.$store.commit('viwed',this.current_question_index)
                this.$store.commit('viwed',{
                                            'group_index':this.current_question_group_index,
                                            'question_index':this.current_question_index
                                                    })
            },
            '$store.state.current_question_group_index': function(){
                this.current_question_group_index = this.$store.state.current_question_group_index
            }
        },
}
</script>

<style scoped>
    form{
        display: inline-block;
        padding: 0px!important;
        /* border: 1px solid black; */
    }
    fieldset{
        display: inline-flex;
        border:1px solid rgb(177, 176, 176);
        padding:6px;
        border-radius: 5px;
        /* background-color: #77b8bf; */
        /* opacity: 0.5; */
        width: 100%;
        /* clear: both; */
    }
    legend{
        /* background: #fff; */
    }
    .background{
        /* background-color: #77b8bf; */
        /* background-color: #696969; */
        box-shadow: 5px 5px #d1d1d1;
    }
    .not-visited{
        text-align: center;
        padding:0px!important;
        /* border: 1px solid black; */
        background-color: #d1d1d1!important;
        opacity: 0.5;
        color: black!important;
        font-size: 16px;
        width: 80px;
        height: 35px;
    }
    .answered{
        text-align: center;
        padding:0px!important;
        /* border: 1px solid black; */
        background-color: #8DA833!important;
        font-size: 16px;
        width: 80px;
        height: 35px;
        color: #fff;
    }
    .not-answered{
        text-align: center;
        padding:0px!important;
        /* border: 1px solid black; */
        font-size: 16px;
        width: 80px;
        height: 35px;
        background-color: #F3A147!important;
        color: #fff;
        /* border-radius: 25px; */
    }
    .marked-for-review{
        text-align: center;
        padding:0px!important;
        /* border: 1px solid black; */
        font-size: 16px;
        width: 80px;
        height: 35px;
        background-color: #4C9EDA!important;
        color: #fff;
        /* border-radius: 25px; */
    }
    .answered-marked-for-review{
        text-align: center;
        padding:0px!important;
        /* border: 1px solid black; */
        font-size: 16px;
        width: 80px;
        height: 35px;
        background-color: #142952!important;
        color: #fff;
        /* border-radius: 25px; */
    }

    .question-card{
        max-width: 600px;
        background-color: #F8F8F8!important; 
        border: none; 
        box-shadow: none;
    }
    .card-body{
        display: block;
        padding: 0px    ;
    }
    .label-icon{
        margin: 0px!important;
    }
    .oneBox{
        margin: 3px!important;
    }
    .oneBox:hover{
        cursor: pointer;    
    }
    /* .button{
        width: 80px;
        padding: 0px!important;
        background-color: #d1d1d1!important;
        color: black;
        opacity: 0.5;
    } */
    @media(min-width: 200px) and (max-width: 400px){
        .button{
            width: 64px!important;
        }
    }

    legend {
        width: fit-content;
    }
    .border{
        border: 1px solid black!important;
    }

</style>
