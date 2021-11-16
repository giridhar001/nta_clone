<template>
    <div class="result-table">
        <div>
            <mdb-tbl bordered>
            <mdb-tbl-head>
                <tr>
                <th class="table-header" colspan="4">SCORE CARD</th>
                </tr>
            </mdb-tbl-head>
            <mdb-tbl-body>
                <tr>
                    <td>Total Question</td>
                    <td>{{ totalQuestion }}</td>

                    <td>Total Attempted</td>
                    <td>{{ totalAttempted }}</td>
                </tr>

                <tr>
                    <td>Correct Answers</td>
                    <td>{{ correctAnswers }}</td>

                    <td>Incorrect Answers</td>
                    <td>{{ incorrectAnswers }}</td>
                    <!-- <td>3</td> -->
                </tr>

                <tr>
                    <td>Score</td>
                    <td>{{ score }}</td>
                    <!-- <td>1</td> -->
                    <td colspan="2"></td>
                </tr>


            </mdb-tbl-body>
            </mdb-tbl>
        </div>

        <div class="result-pagination-table">
            <mdb-datatable
                :data="data"
                striped
                bordered
            />
        </div>
    </div>
    
</template>

<script>
    import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
    import { mdbDatatable } from 'mdbvue';

    export default {
        components:{
            mdbTbl,
            mdbTblHead,
            mdbTblBody,
            mdbDatatable
        },
        data() {
            return {
                questionGroups: this.$store.state.questionGroups,
                totalQuestions:0,
                totalAttemptedQuestion:0,
                correctAnswersCount:0,
                incorrectAnswersCount:0,
                scored:0,
                data: {
                    columns: [
                        {
                        label: 'Question No.',
                        field: 'question_no',
                        sort: 'asc'
                        },
                        {
                        label: 'Selected Option',
                        field: 'selected_option',
                        sort: 'asc'
                        },
                        {
                        label: 'Status',
                        field: 'status',
                        sort: 'asc'
                        },
                        {
                        label: 'Corrected Option',
                        field: 'correct_option',
                        sort: 'asc'
                        },
                    ],

                     rows: [
                        // {
                        // question_no: 'Tiger Nixon',
                        // selected_option: 'System Architect',
                        // status: 'Edinburgh',
                        // correct_option: '61',
                        // },
                        // {
                        // question_no: 'Tiger Nixon',
                        // selected_option: 'System Architect',
                        // status: 'Edinburgh',
                        // correct_option: '61',
                        // },
                        // {
                        // question_no: 'Tiger Nixon',
                        // selected_option: 'System Architect',
                        // status: 'Edinburgh',
                        // correct_option: '1',
                        // },
                        
                    ],
                }
                    
            }
        },
        computed:{
            totalQuestion(){
                this.questionGroups.forEach(oneGroup=>{
                    oneGroup.questions.forEach((question)=>{
                        this.totalQuestions += 1;
                    })
                });
                return this.totalQuestions;
            },
            totalAttempted(){
                this.questionGroups.forEach(oneGroup=>{
                    oneGroup.questions.forEach((question)=>{
                        if(question.chosen_option != -1 || question.previously_chosen != -1){
                            this.totalAttemptedQuestion += 1
                        }
                    })
                });
                return this.totalAttemptedQuestion;
            },
            correctAnswers(){
                this.questionGroups.forEach(oneGroup=>{
                    oneGroup.questions.forEach((question)=>{
                        if((question.chosen_option == question.correct_option)){
                            this.correctAnswersCount += 1
                        }
                    })
                });
                return this.correctAnswersCount;
            },
            score(){
                this.questionGroups.forEach(oneGroup=>{
                    oneGroup.questions.forEach((question)=>{
                        if((question.chosen_option == question.correct_option)){
                            this.scored += question.score_available
                        }
                    })
                });
                return this.scored;
            },
            incorrectAnswers(){
                this.questionGroups.forEach(oneGroup=>{
                    oneGroup.questions.forEach((question)=>{
                        if((question.chosen_option != question.correct_option)){
                            if(question.chosen_option != -1 || question.previously_chosen != -1){
                                this.incorrectAnswersCount += 1
                            }
                        }
                    })
                });
                return this.incorrectAnswersCount;
            },
        },
        mounted() {
            this.questionGroups.forEach(oneGroup=>{
                oneGroup.questions.forEach((question,index)=>{
                    var table_rows = {};
                    table_rows['question_no'] = "Question "+(index+1)+ " ("+oneGroup.name+")"

                    if(question.chosen_option == -1){
                        table_rows['selected_option'] = "--"
                    }
                    if(question.chosen_option != -1){
                        table_rows['selected_option'] = question.chosen_option + 1
                    }

                    if(question.chosen_option == -1){
                        table_rows['status'] = "N/A"
                    }
                    else if(question.chosen_option == question.correct_option){
                        table_rows['status'] = "Correct"
                    }
                    else if(question.chosen_option != question.correct_option){
                        table_rows['status'] = "Wrong"
                    }

                    table_rows['correct_option'] = question.correct_option
                    this.data.rows.push(table_rows);

                    table_rows = {};
                })
            });
        },
    }
</script>

<style scoped>

.result-table{
  width: 100%;
}
.table-header{
  text-align: center;
}
.result-pagination-table{
    margin-top: 50px;
}
</style>