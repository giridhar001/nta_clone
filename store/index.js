import vuex from 'vuex'
import axios from 'axios'

const createStore = ()=>{
    return new vuex.Store({
        state:{
            bannerImg:{
                'leftBanner':'https://nta.ac.in/img/abhyas/NTA_banner.png',
                'rightBanner':'	https://nta.ac.in/img/abhyas/NTA_banner.png'
            },
            candidateDetails:{},
            instructions:[
                {
                    'general_instruction':{
                        'time_allocated':'Total duration of the test is 180 min.',
                        'timer_location':'The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.',
                        'symbol':'The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols: ',
                    },
                    'navigating_to_a_question':{
                        'navigation':'Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.',
                        'save_and_next':'Click on Save & Next to save your answer for the current question and then go to the next question.',
                        'mark_and_review':'Click on Mark for Review & Next to save your answer for the current question, mark it for review, and then go to the next question.',
                    },
                    'answering_a_question':{
                        'sp1':'To select you answer, click on the button of one of the options.',
                        'sp2':'To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button',
                        'sp3':'To change your chosen answer, click on the button of another option',
                        'sp4':'To save your answer, you MUST click on the Save & Next button.',
                        'sp5':'To mark the question for review, click on the Mark for Review & Next button.',
                    },
                    'navigating_to_sections':{
                        'p1':'Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by click on the section name. The section you are currently viewing is highlighted.',
                        'p2':'After click the Save & Next button on the last question for a section, you will automatically be taken to the first question of the next section.',
                        'p3':'You can shuffle between sections and questions anything during the examination as per your convenience only during the time stipulated.',
                        'p4':'Candidate can view the corresponding section summery as part of the legend that appears in every section above the question palette.',
                    },
                },
            ],
            // questionGroups:[
            //     {
            //         name:'physics',
            //         questions:[
            //             {
            //                 "id":1,
            //                 "Question":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.?",
            //                 "options":{
            //                             0:'giri',
            //                             1:'siri',
            //                             2:'biri',
            //                             3:'tiri'
            //                         },
            //                 "chosen_option":null,
            //                 "previously_chosen":null,
            //                 'marked_for_review':false,
            //                 'viewed':false
            //             },
                    
            //             {   
            //                 "id":2,
            //                 "Question":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.?",
            //                 "options":{
            //                             0:'11',
            //                             1:'12',
            //                             2:'13',
            //                             3:'14'
            //                         },
            //                 "chosen_option":null,
            //                 "previously_chosen":null,
            //                 'marked_for_review':false,
            //                 'viewed':false
            //             },
            //             {   
            //                 "id":3,
            //                 "Question":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.?",
            //                 "options":{
            //                             0:'option1',
            //                             1:'option2',
            //                             2:'option3',
            //                             3:'option14'
            //                         },
            //                 "chosen_option":null,
            //                 "previously_chosen":null,
            //                 'marked_for_review':false,
            //                 'viewed':false
            //             },
        
            //         ]
            //     },
            //     {
            //         name:'Maths',
            //         questions:[
            //             {   
            //                 "id":4,
            //                 "Question":"Giri Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.?",
            //                 "options":{
            //                             0:'option1',
            //                             1:'option2',
            //                             2:'option3',
            //                             3:'option14'
            //                         },
            //                 "chosen_option":null,
            //                 "previously_chosen":null,
            //                 'marked_for_review':false,
            //                 'viewed':false
            //             },
            //             {   
            //                 "id":5,
            //                 "Question":"Siri Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.?",
            //                 "options":{
            //                             0:'option1',
            //                             1:'option2',
            //                             2:'option3',
            //                             3:'option14'
            //                         },
            //                 "chosen_option":null,
            //                 "previously_chosen":null,
            //                 'marked_for_review':false,
            //                 'viewed':false
            //             },
        
        
            //         ]
            //     }
            // ],
            questionGroups:[],
            current_question_index:0,
            current_question_group_index:0,
            current_time:0,
            // questions:[],
        },
        mutations:{
            setQuestionGroups(state,data){
                state.questionGroups = data;
            },
            incrementCurrentQuestionIndex(state,data){
                console.log(state.questionGroups);
                if(data['group_index'] < state.questionGroups.length){
                    if(data['question_index'] < (state.questionGroups[data['group_index']].questions.length)-1){
                        state.current_question_index += 1;
                    }
                    else{
                        if(state.current_question_group_index < (state.questionGroups.length)-1){
                            state.current_question_group_index += 1;
                            state.current_question_index = 0;
                        }
                    }
                }
                // if(state.current_question_index < ((state.questions).length)-1){
                //     state.current_question_index += 1;
                // }
            },
            change_question_index(state,data){
                state.current_question_group_index = data['group_index'];
                state.current_question_index = data['question_index'];
            },
            decrementCurrentQuestionIndex(state,data){
                console.log(data);
                // if(data['group_index']>=0 && data['question_index']>=1){
                    if(data['group_index'] < state.questionGroups.length){
                        if(data['question_index'] < (state.questionGroups[data['group_index']].questions.length)){
                            if(data['question_index']>0){
                                state.current_question_index -= 1;
                            }
                            if(data['question_index']==0){
                                state.current_question_group_index -= 1;
                                state.current_question_index = ((state.questionGroups[data['group_index']-1].questions.length)-1);
                            }
                        }
                    }
                // }
            },
            chosenOption(state,data){  
                state.questionGroups.forEach(oneGroup=>{
                    // console.log(oneGroup.questions);
                    if(oneGroup.questions.find(d=>d.id == data['id'])){
                        oneGroup.questions.find(d=>d.id == data['id']).chosen_option = data['option'];
                    }
                    // console.log(oneGroup.questions);
                })        
                // state.questions.find(d=>d.id == data['id']).chosen_option = data['option']
                // console.log(state.questions.find(d=>d.id == data['id']));
            },
            previously_chosen(state,id){  
                state.questionGroups.forEach(oneGroup=>{
                    // console.log(oneGroup.questions);
                    if(oneGroup.questions.find(d=>d.id == id)){
                        oneGroup.questions.find(d=>d.id == id).previously_chosen = oneGroup.questions.find(d=>d.id == id).chosen_option;
                    }
                    // console.log(oneGroup.questions);
                })        
                // state.questions.find(d=>d.id == data['id']).chosen_option = data['option']
                // console.log(state.questions.find(d=>d.id == data['id']));
            },
            markForReview(state,id){   
                state.questionGroups.forEach(oneGroup=>{
                    // console.log(oneGroup.questions);
                    if(oneGroup.questions.find(d=>d.id == id)){
                        oneGroup.questions.find(d=>d.id == id).marked_for_review = true;
                    }
                    console.log(oneGroup.questions);
                })               
                // state.questions.find(d=>d.id == id).marked_for_review = true
                // console.log(state.questions.find(d=>d.id == id));
                // console.log(state.questions);
            },
            clearOption(state,id){
                state.questionGroups.forEach(oneGroup=>{
                    // console.log(oneGroup.questions);
                    if(oneGroup.questions.find(d=>d.id == id)){
                        oneGroup.questions.find(d=>d.id == id).chosen_option = 'null';
                    }
                    console.log(oneGroup.questions);
                })   
                // state.questions.find(d=>d.id == id).chosen_option = 'null'
            },
            viwed(state,data){
                // state.questionGroups[0].questions[0].viewed = true;
                console.log(data);
                state.questionGroups.forEach((oneGroup,oneGroup_index)=>{
                    if(oneGroup_index == data['group_index']){
                        oneGroup.questions.find((d,i)=>i==data['question_index']).viewed = true
                    }
                    // console.log(oneGroup.questions);
                }) 

                // state.questions.find((d,i)=>i==0).viewed = true
                // state.questions.find((d,i)=>i==current_question_index).viewed = true
                // console.log(state.questions);
            },
            submit(state){
                // On click of save button  update the json in backend

                axios.put('https://talentui-default-rtdb.asia-southeast1.firebasedatabase.app/questionGroups.json', state.questionGroups)
                .then(result=>console.log(result))
            },
            proceed(state){
                // On click of proceed button  update the time(and the passed time is in seconds)
                // new Date().getTime() will returns the number of milliseconds since January 1, 1970, and to convert it to seconds we are dividing it with 1000

                axios.put('https://talentui-default-rtdb.asia-southeast1.firebasedatabase.app/startTime.json', Math.trunc((new Date()).getTime() / 1000))
                .then(result=>console.log(result))

                // console.log(new Date());
            },
            startTime(state){
                return axios.get('https://talentui-default-rtdb.asia-southeast1.firebasedatabase.app/startTime.json')
                .then((res)=>{
                    console.log(res.data);
                    state.candidateDetails.start_time = res.data
                })
            },

            getCurrentTime(state){
                return axios.get('https://talentui-default-rtdb.asia-southeast1.firebasedatabase.app/current_time.json')
                .then((res)=>{
                    console.log(res.data);
                    state.current_time = res.data
                })
            },

            updateCurrentTime(state){
                axios.put('https://talentui-default-rtdb.asia-southeast1.firebasedatabase.app/current_time.json', Math.trunc((new Date()).getTime() / 1000))
                .then(result=>console.log(result))
            },
            updateStatus(state,status){
                console.log(status);
                state.candidateDetails.status = status;
                axios.patch('https://talentui-default-rtdb.asia-southeast1.firebasedatabase.app/candidateDetails.json', {"status":status})
                .then(result=>console.log(result))
            },

            candidateDetails(state){
                return axios.get('https://talentui-default-rtdb.asia-southeast1.firebasedatabase.app/candidateDetails.json')
                .then((res)=>{
                    // console.log(res.data);
                    state.candidateDetails = res.data
                    state.candidateDetails.deadline = state.candidateDetails.deadline.replace(/['"]+/g, '')

                    // console.log('hello timer');
                    // console.log(Math.trunc(Date.parse(state.candidateDetails.deadline.replace(/['"]+/g, ''))/1000));
                    // state.candidateDetails['end_time']=new Date('2021-11-08T23:52:00')
                })
            },
        },
        actions:{
            nuxtServerInit(vueContext,context){
                // console.log('hello151');
                vueContext.commit('candidateDetails');
                vueContext.commit('startTime');
                vueContext.commit('getCurrentTime');
                return axios.get('https://talentui-default-rtdb.asia-southeast1.firebasedatabase.app/questionGroups.json')
                .then((res)=>{
                    // console.log(res);
                    var questionGroups=res.data;
                    questionGroups[0].questions[0].viewed = true
                    vueContext.commit('setQuestionGroups',questionGroups)
                    // console.log(questionGroups);
                    // console.log(res.data);
                })

            }
        },
        getters:{}
    })
}

export default createStore 