// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

//English Intro
const intro_eng = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro_eng',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `This is the English introduction page
            <br />
            <br />
            Usefull information here
            <br />
            <br />
            test test test`,
   buttonText: 'start the experiment'
});
//German Intro
const intro_ger = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro_ger',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Dies ist die Deutsche Intro seite
            <br />
            <br />
            Hier praktische Informationen:
            <br />
            <br />
            test test test`,
   buttonText: 'Experiment Starten'
});

// For most tasks, you need instructions views
//english Instructions
const instructions_practice_eng = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_eng',
    title: 'General Instructions',
    text:  `This is first a practice.
            <br />
            <br />
            choose 1 to 7`,
    buttonText: 'go to trials'
});

//German Instructions
const instructions_practice_ger = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_ger',
    title: 'Einweisung',
    text:  `Dies ist ein Test.
            <br />
            <br />
            wähle eine Zahl zwischen 1 und 7`,
    buttonText: 'Mit der Übung beginnen'
});

// after practice instructions
// English
const instructions_main_eng = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_main_eng',
    title: 'General Instructions',
    text:  `Let us start the real experiment now. It looks exactly like the practice.
            <br />
            <br />
            Are you ready?`,
    buttonText: 'GO'
});
// German
// after practice instructions
const instructions_main_ger = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instructions_main_ger',
    title: 'General Instructions',
    text:  `Lass uns nun das richtige Experiment starten
            <br />
            <br />
            Bereit?`,
    buttonText: 'Experiment starten'
});


// In the post test questionnaire you can ask your participants addtional questions
// english
const post_test_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test_eng',
    title: 'Additional information',
    text: 'Please answer the Questions '

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

//German
const post_test_ger = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test_ger',
    title: 'Zusätzliche Informationen',
    text: 'Abschließend benötigen wir noch einige Informationen über dich: '
});

// The 'thanks' view is crucial; never delete it; it submits the results!
// english
const thanks_eng = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks_eng',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Submit results'
});
// german
const thanks_ger = babeViews.view_generator('thanks',{
    trials: 1,
    name: 'thanks_ger',
    title: 'Danke für die Teilname!',
    prolificConfirmText: 'Ergebnisse Übermitteln'
});

const ratingScaleTrial = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_trial.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleTrial',
    trial_type: 'ratingScaleTrial',
    data: trial_info.rating_scale_trial,
});

const ratingScaleTask = babeViews.view_generator('rating_scale',{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_task.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleTask',
    trial_type: 'ratingScaleTask',
    data: trial_info.rating_scale_task,
});

//This (customized) View is used to ask the User which language they speak
const intro_choice = babeViews.view_generator("forced_choice",{
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.intro_choice_info.length,
    // name and trial_type should be identical to the variable name
    name: 'intro_choice',
    trial_type: 'intro_choice',
    data: trial_info.intro_choice_info,
},{
    answer_container_generator: function (config, CT) {
     return `<div class='babe-view-answer-container'>
             <p class='babe-view-question'>${config.data[CT].question}</p>
             <label for='o1' class='babe-response-buttons'>${config.data[CT].option1}</label>
             <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
             <label for='o2' class='babe-response-buttons'>${config.data[CT].option2}</label>
             <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
             <label for='o3' class='babe-response-buttons'>${config.data[CT].option3}</label>
             <input type='radio' name='answer' id='o3' value=${config.data[CT].option3} />
             <label for='o4' class='babe-response-buttons'>${config.data[CT].option4}</label>
             <input type='radio' name='answer' id='o4' value=${config.data[CT].option4} />
            
             </div>`;
}},{
    handle_response_function: function(config, CT, babe, answer_container_generator, startingTime) {

        // create the answer containe
        $(".babe-view").append(answer_container_generator(config, CT));
    
        // attaches an event listener to the radio button input
        // when an input is selected a response property with a value equal
        // to the answer is added to the trial object
        // as well as a readingTimes property with value
        $("input[name=answer]").on("change", function() {
        const RT = Date.now() - startingTime;
        let trial_data = {
            trial_name: config.name,
            trial_number: CT + 1,
            response: $("input[name=answer]:checked").val(),
            RT: RT
        };
        trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);
        babe.trial_data.push(trial_data);
        babe.findNextView();
        });}   
}
);


const subjective_language_eng = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'subjective_language_eng',
    title: 'Your language knowledge',
    text: 'Please answer the questions:',
    question1: "How proficient would you describe your language abilities of your native language for the following areas:",
    question2:"How proficient would you describe your language abilities of your foreign language for the following areas:",
    class1:"speaking",
    class2:"writing",
    class3:"listening",
    option1:"not at all proficient",
    option2:"very little proficient",
    option3:"little proficient",
    option4:"average proficient",
    option5:"good proficient",
    option6:"very good proficient",
    option7:"totally proficient",
},{
    stimulus_container_generator: custom_stimulus_container_generators.subjective_language_eng,
    answer_container_generator: custom_answer_container_generators.subjective_language,
    handle_response_function: custom_handle_response_function.subjective_language_eng
}
);
const subjective_language_ger = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'subjective_language_ger',
    title: 'Deine Sprachkenntnisse',
    text: 'Bitte beantworte folgende Fragen: ',
    question1: "Wie gut würdest du die Kompetenzen in deiner Muttersprache für folgende Bereiche einschätzen:",
    question2:"Wie gut würdest du die Kompetenzen in deiner Muttersprache für folgende Bereiche einschätzen:",
    class1:"Sprechen",
    class2:"Schreiben",
    class3:"Hörverstehen",
    option1:"Überhaupt nicht gut",
    option2:"sehr gering",
    option3:"nicht sehr gut",
    option4:"mittelmäßig",
    option5:"gut",
    option6:"sehr gut",
    option7:"perfekt",
},{
    stimulus_container_generator: custom_stimulus_container_generators.subjective_language,
    answer_container_generator: custom_answer_container_generators.subjective_language,
    handle_response_function: custom_handle_response_function.subjective_language
}
);
