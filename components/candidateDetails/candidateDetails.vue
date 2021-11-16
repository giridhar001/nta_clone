<template>
    <div class='card details p-3 mb-2 bg-white rounded'>
        <div class="card-body row no-gutters">
            <div class="col-1">
                <img :src="profile_pic">
            </div>
            <div class="col general-details">
                <table>
                    <tbody>
                        <tr>
                            <td><p><i class="fas fa-user-tie"></i></p></td>
                            <td><p>Candidate Name</p></td>
                            <td><p class="value"> : {{ candidate_name }}</p></td>
                        </tr>
                        <tr>
                            <td><p><i class="fas fa-chalkboard-teacher"></i></p></td>
                            <td><p>Exam Name</p></td>
                            <td><p class="value"> : {{ exam_name }}</p></td>
                        </tr>
                        <tr>
                            <td><p><i class="fas fa-book-open"></i></p></td>
                            <td><p>Subject Name</p></td>
                            <td><p class="value"> : {{ subject }}</p></td>
                        </tr>
                        <tr>
                            <td><p><i class="fas fa-history"></i></p></td>
                            <td><p>Remaining Time</p></td>
                            <td><p class="value"> <Timer :date="end" @onFinish="finish()"/> </p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Timer from '~/components/navBar/timer.vue';
    export default {
        components:{
            Timer,
        },
        data(){
            return{
                candidate_name:this.$store.state.candidateDetails.name,
                profile_pic:this.$store.state.candidateDetails.profile_pic,
                exam_name:this.$store.state.candidateDetails.exam_name,
                subject:this.$store.state.candidateDetails.subject,
                // time:this.$store.state.candidateDetails.end_time,
                end: this.$store.state.candidateDetails.deadline,
                // end: new Date('2021-11-04T16:37:00')
            }
        },
        methods:{
            finish() {
                this.$store.commit('updateStatus',"completed");
                this.$store.commit('submit');
                this.$router.push({ path: `/submitted` })
            },
        },
    }
</script>

<style scoped>
    body{
        line-height: 0px!important;
    }
    .details{
        background: #fff;
        box-shadow: none;
    }
    .card{
        width: 100%;
        padding: 0px!important;
        margin-top: 5px;
    }
    i{
        margin-right: 5px;
    }
    p{
        margin: 0px;
    }
    img{
        height: 100px;
        width: 100px;
    }
    .value{
        color: #F29341;
    }
    .card-body{
        margin-left: 5%;
    }
    @media(min-width: 200px) and (max-width: 400px){
        .card-body{
            margin-left: 0%;
        }
        .general-details{
            margin-left: 30%;
        }
    }
    @media(min-width: 400px) and (max-width: 769px){
        .general-details{
            margin-left: 10%;
        }
    }
    @media(min-width: 769px) and (max-width: 1024px){
        .general-details{
            margin-left: 5%;
        }
    }
</style>
