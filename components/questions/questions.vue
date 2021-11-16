<template>
    <div class="quizzes-section row gx-0">
        <div class='col-sm-12 col-md-7 card question-card details p-3 mb-2'>
            <div v-for="(oneGroup, group_index) in questionGroups" :key="group_index">
                <div v-if="current_question_group_index == group_index">
                <div v-for="(question, question_index) in oneGroup.questions" :key="question_index">
                    <div v-if="current_question_index == question_index">
                        
                        <div class="card-body question-card-body overflow-auto">
                            <h5 class="card-title">Question {{ question_index+1 }}</h5>
                            <p>{{ question.Question }}</p>
                            <Options :question="question" :options="question.options" :id="question.id" @chosen_option="selected_option(question.id,$event)"/>
                        </div>
                        <hr>
                            <div class="rowButton row no-gutters">
                                <div class=" buttonDiv">
                                    <mdb-btn color="success" class="btn saveButton" @click="saveAndNext(question.id,group_index,question_index)">SAVE AND NEXT</mdb-btn>
                                </div>
                                <div class="buttonDiv">
                                    <mdb-btn color="light" class="btn clear" @click="clearOptions(question.id)">CLEAR</mdb-btn>
                                    
                                </div>
                                <div class="buttonDiv">
                                    <mdb-btn color="warning" class="btn saveMark" @click="answeredAndMarkForReview(question.id)">SAVE & MARK FOR REVIEW</mdb-btn>
                                </div>
                                <div class="buttonDiv">
                                    <mdb-btn color="primary" class="btn markReview" @click="markForReview(question.id,group_index,question_index)">MARK FOR REVIEW & NEXT</mdb-btn>
                                </div>
                            </div>
                        <div class="card button-card">
                            <div class="card-body button-card-body row2Button row no-gutters">
                            <div class=" leftButtonDiv col-sm-12 col-md-6">
                                <span v-if="current_question_group_index == 0 && current_question_index==0">
                                    <mdb-btn color="light" class="btn clear2 disabled-button" disabled @click="decrementCurrentQuestionIndex(group_index,question_index)"> &#60;&#60; BACK</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn color="light" class="btn clear2" @click="decrementCurrentQuestionIndex(group_index,question_index)"> &#60;&#60; BACK</mdb-btn>
                                </span>
                                <!-- <span v-if="current_question_group_index ==  && current_question_index==0">
                                    <mdb-btn color="light" class="btn clear2" disabled @click="decrementCurrentQuestionIndex(group_index,question_index)"> &#60;&#60; BACK</mdb-btn>
                                </span>
                                <span v-else>
                                    <mdb-btn color="light" class="btn clear2" @click="decrementCurrentQuestionIndex(group_index,question_index)"> &#60;&#60; BACK</mdb-btn>
                                </span> -->
                                <!-- <mdb-btn color="light" class="btn clear2" disabled @click="decrementCurrentQuestionIndex(group_index,question_index)"> &#60;&#60; BACK</mdb-btn> -->
                                <mdb-btn color="light" class="btn clear2 nextButton" @click="nextButton(group_index,question_index)">NEXT &#62;&#62;</mdb-btn>
                            </div>
                            <div class="rightButtonDiv col-sm-12 col-md-6">
                                <mdb-btn color="sucess" class="btn saveButton finalSubmit" @click="finalSubmit(question.id)">SUBMIT</mdb-btn>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <!-- <div class="row no-gutters"> -->
            <div class="infoSection col-12">
                <InfoSection/>
            </div> 
            <!-- <div class="infoSection questionGallery col-12">
                <QuestionGallery />
            </div> -->
            <!-- </div> -->
      </div>
    </div>
</template>

<script>
    import { mdbBtn } from 'mdbvue'
    import Options from '~/components/questions/options.vue'
    import InfoSection from '~/components/infoSection/infoSection.vue'
    import QuestionGallery from '~/components/infoSection/questionGallery.vue'

    export default {
        components:{
            mdbBtn,
            Options,
            InfoSection,
            QuestionGallery

        },
        data(){
            return{
                // questions: this.$store.state.questions,
                questionGroups: this.$store.state.questionGroups,
                current_question_index: this.$store.state.current_question_index,
                current_question_group_index: this.$store.state.current_question_group_index,
            }
        },
        methods:{
            nextButton(group_index,question_index){
                this.$store.commit('incrementCurrentQuestionIndex',{
                                                    'group_index':group_index
                                                    ,'question_index':question_index
                                                    })
                this.current_question_group_index = this.$store.state.current_question_group_index
                this.current_question_index = this.$store.state.current_question_index
            },
            decrementCurrentQuestionIndex(group_index,question_index){
                // console.log(group_index);
                // console.log(question_index);
                this.$store.commit('decrementCurrentQuestionIndex',{
                                                    'group_index':group_index
                                                    ,'question_index':question_index
                                                    })
                this.current_question_group_index = this.$store.state.current_question_group_index
                this.current_question_index = this.$store.state.current_question_index
                // console.log(this.current_question_group_index);
                // console.log(this.current_question_index);
            },
            selected_option(id,option){
                this.$store.commit('chosenOption',{
                                                    'id':id
                                                    ,'option':option
                                                    })   
                
            },
            clearOptions(id){
                this.$store.commit('clearOption',id)
            },

            markForReview(id,group_index,question_index){
                this.$store.commit('markForReview',id)

                this.nextButton(group_index,question_index);
            },
            answeredAndMarkForReview(id){
                this.$store.commit('markForReview',id)
                this.$store.commit('previously_chosen',id);
                this.$store.commit('submit');

            },
            saveAndNext(id,group_index,question_index){
                this.nextButton(group_index,question_index)
                this.$store.commit('previously_chosen',id);
                this.$store.commit('submit');
            },
            finalSubmit(id){
                this.$store.commit('updateStatus',"completed");
                this.$store.commit('previously_chosen',id);
                this.$store.commit('submit');
                this.$router.push({ path: `/submitted` })
            }
        },
        
        watch:{
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
                // this.current_question_group_index = this.$store.state.current_question_group_index
                
                this.$store.commit('viwed',{
                                            'group_index':this.current_question_group_index,
                                            'question_index':this.current_question_index
                                                    })
                this.current_question_index = this.$store.state.current_question_index
            },
            '$store.state.current_question_group_index': function(){
                // this.$store.commit('viwed',{
                //             'group_index':this.current_question_group_index,
                //             'question_index':this.current_question_index
                //                     })

                this.current_question_group_index = this.$store.state.current_question_group_index
            }

        },

    }
</script>

<style scoped>

    .disabled-button{
        opacity: 1!important;
    }
    .questionGallery{
        margin-top:20px;
    }
    .quizzes-section{
        margin: 0px!important;
    }
    .question-card{
        width: 100%;
        box-shadow: none;
        margin-top: 10px;
        background-color: #F8F8F8!important;
        border: none;
    }
    .question-card-body{
        height:220px!important;
    }
    .button-card{
        margin-top: 10px;
        width: 100%;
        box-shadow: none;
    }
    .button-card-body{
        margin-top: 0px!important;
        padding: 5px!important;
    }
    .rowButton{
        margin-top: 5px;
        padding: 0px!important;
        display: flex;
        justify-content: space-around;
    }
   
    .row2Button{
        margin-top: 10px;
    }
    .rightButtonDiv{
        display: flex;
        justify-content: right;
        /* padding-right: 25px!important; */
    }
    .saveButton{
        background-color: #449d44!important ;
        color: #fff;
    }
    .clear{
        /* margin-left: -30px; */
        background-color: #fff!important;
        color: black;
        border:1px solid grey
    }
    .clear2{
        background-color: #fff!important;
        color: black;
        border:1px solid grey
    }
    .saveMark{
        background-color: #ec971f!important;
        color: rgb(255, 251, 251);
    }
    .markReview{
        background-color: #286090!important;
        color: rgb(255, 251, 251);
    }
     @media(min-width: 200px) and (max-width: 400px){
        .rowButton{
            margin-top: 5px;
            padding: 0px!important;
            display: flex;
        }
        .saveButton{
            padding: 10px;
        }
        .clear{
            padding-top: 10px;
            padding-bottom: 10px;
            border: none!important;
        }
        .clear2{
            padding: 10px;
            border: none!important;
        }
        .nextButton{
            float: right;
        }
        .rightButtonDiv{
            display: inline;
            width: 100%;
        }
        .finalSubmit{
            width: 95%;
        }
    }
    @media(min-width: 400px) and (max-width: 769px){
        .rowButton{
            margin-top: 5px;
            padding: 0px!important;
            display: flex;
        }

        .clear2{
            padding: 10px;
            border: none!important;
        }
        
        .rightButtonDiv{
            display: inline;
            width: 100%;
        }
        .finalSubmit{
            float: right;
        }
    }
    @media(min-width: 769px) and (max-width: 1024px){
        .rowButton{
            margin-top: 5px;
            padding: 0px!important;
            display: -webkit-inline-box;
        }

        .clear2{
            padding: 10px;
            border: none!important;
        }
        
        .rightButtonDiv{
            display: inline;
            width: 100%;
        }
        .finalSubmit{
            float: right;
        }
    }
</style>