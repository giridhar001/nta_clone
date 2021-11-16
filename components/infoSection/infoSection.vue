<template>
    <div>
        <div class="card info-card mt-2">
            <div class="card-body">
                <table>
                    <tbody>
                        <tr>
                            <td class="not-visited-tr">
                                <mdb-badge class="not-visited label-icon shadow">{{ notVisited }}</mdb-badge>
                                <!-- <p class="not-visited label-icon shadow">{{ not_visited }}</p> -->
                                <p class="label">Not Visited</p>
                            </td>
                            <td>
                                <mdb-badge class="not-answered label-icon shadow">{{ notAnswered }}</mdb-badge>
                                <!-- <p class="not-answered label-icon shadow">{{ not_answered }}</p> -->
                                <p class="label">Not Answered</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mdb-badge class="answered label-icon shadow">{{ answered }}</mdb-badge>
                                <!-- <p class="answered label-icon shadow">{{ answered }}</p> -->
                                <p class="label">Answered</p>
                            </td>
                            <td>
                                <mdb-badge class="marked-for-review label-icon shadow">{{ markedReview }}</mdb-badge>
                                <!-- <p class="marked-for-review label-icon shadow">{{ marked_for_review }}</p> -->
                                <p class="label">Marked For Review</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mdb-badge class="answered-marked-for-review label-icon shadow">{{ answeredAndMarkedForReview }}</mdb-badge>
                                <!-- <p class="answered-marked-for-review label-icon shadow">{{ answered_marked_for_review }}</p> -->
                                <p class="label">Answered & Marked for Review</p>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="questionGallery">
            <QuestionGallery />
        </div>
        <!-- <div class="questionGallery">
            <test-mbd />
        </div> -->
    </div>
</template>

<script>
import QuestionGallery from '~/components/infoSection/questionGallery.vue'
import { mdbBadge } from 'mdbvue';
export default {
//     props: [
//     'not_visited',
//     'not_answered',
//     'answered',
//     'marked_for_review',
//     'answered_marked_for_review',
//   ],
    data(){
            return{
                questionGroups: this.$store.state.questionGroups,
                not_visited : 0,
                notAnswered_count : 0,
                answered_count : 0,
                marked_for_review : 0,
                answered_marked_for_review : 0,
            }
        },
    components:{
        QuestionGallery,
        mdbBadge,
        },
    computed:{
        notVisited(){
            this.not_visited = 0;
            // this.questionGroups[0].questions[0].viewed = true;
            this.questionGroups.forEach(oneGroup=>{
                    // console.log(oneGroup.questions);
                    oneGroup.questions.forEach((question)=>{
                        if(question.viewed == false){
                            this.not_visited += 1;
                        }
                    })

                }) 
            // console.log(this.questions[0].viewed);
            // this.questions[0].viewed = true;

            // this.questions.forEach((question)=>{
            //     if(question.viewed == false){
            //         this.not_visited += 1;
            //     }
            // })
            return this.not_visited;
        },
        notAnswered(){
            this.notAnswered_count = 0
            this.questionGroups.forEach(oneGroup=>{
                    // console.log(oneGroup.questions);
                    oneGroup.questions.forEach((question)=>{
                        // if(!question.chosen_option  && !question.previously_chosen){
                        // if((question.chosen_option == undefined || question.chosen_option == null) && (question.previously_chosen == undefined || question.previously_chosen == null)){
                        if(question.chosen_option == -1 && question.previously_chosen == -1){
                            console.log('hello');
                            this.notAnswered_count += 1;
                        }
                        console.log(question.chosen_option, question.previously_chosen, this.notAnswered_count);

                    })

                }) 
            // this.questions.forEach((question)=>{
            //     if(question.chosen_option == null && question.previously_chosen == null){
            //         this.notAnswered_count += 1;
            //     }
            // })
            return this.notAnswered_count;
        },
        answered(){
            this.answered_count = 0
            this.questionGroups.forEach(oneGroup=>{
                    // console.log(oneGroup.questions);
                    oneGroup.questions.forEach((question)=>{
                        // if((question.chosen_option != undefined && question.chosen_option != null) || (question.previously_chosen != undefined && question.previously_chosen != null)){
                        if(question.chosen_option != -1 || question.previously_chosen != -1){
                            this.answered_count += 1;
                        }
                    })

                })
            // this.questions.forEach((question)=>{
            //     if(question.chosen_option != null || question.previously_chosen != null){
            //         this.answered_count += 1;
            //     }
            // })
            return this.answered_count;
        },
        markedReview(){
            this.marked_for_review = 0
            this.questionGroups.forEach(oneGroup=>{
                    // console.log(oneGroup.questions);
                    oneGroup.questions.forEach((question)=>{
                        if(question.marked_for_review == true && (question.chosen_option == -1)){
                            this.marked_for_review += 1;
                        }
                    })
                    console.log('tiggered');
                })
            
            // this.questions.forEach((question)=>{
            //     if(question.marked_for_review == true && question.chosen_option == null){
            //         this.marked_for_review += 1;
            //     }
            // })
            return this.marked_for_review;
        },
        answeredAndMarkedForReview(){
            this.answered_marked_for_review = 0

            this.questionGroups.forEach(oneGroup=>{
                    // console.log(oneGroup.questions);
                    oneGroup.questions.forEach((question)=>{
                        if(question.marked_for_review == true && question.chosen_option != -1){
                            this.answered_marked_for_review += 1;
                        }
                    })

                })

            // this.questions.forEach((question)=>{
            //     if(question.marked_for_review == true && question.chosen_option != null){
            //         this.answered_marked_for_review += 1;
            //     }
            // })
            return this.answered_marked_for_review;
        },
        // watch:{
        //     '$store.state.questionGroups': function(){
        //         this.questionGroups = this.$store.state.questionGroups
        //     }
        // }
    }

    
}
</script>

<style scoped>
    .info-card{
        border: 1px dashed black;
        background-color: #F8F8F8;
    }
    .questionGallery{
        margin-top: 10px;;
    }
    .label-icon{
        margin-right:5px;
        display: inline-block;
    }
    .label{
        display: inline-block;
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