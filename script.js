let step=0;

let data={};

const choices=document.getElementById("choices");

const symptoms=[
"Chest",
"Head",
"Fever",
"Other"
];

const questions={

"Chest pain":[
"Okay baccha ❤️ tell Mumma, since when are you feeling this discomfort?",
"How much are you feeling it? Mild, medium, or very troubling?",
"I understand worries happen 🌸 What stopped you from seeking help?"
],

"Headache":[
"Tell me baccha ❤️ since when is this headache happening?",
"How strong is it? Mild, medium or intense?",
"Why did you wait before taking care of it?"
],

"Fever":[
"Since when are you feeling feverish baccha ❤️?",
"How uncomfortable are you feeling?",
"What made you delay getting help?"
],

"Other":[
"Okay Baccha ❤️,Tell Mumma what is bothering you? ",
"Since when has this been happening?",
"What is making you hesitate?"
]

};

function startChat(){

welcome.classList.add("hide");

chatPage.classList.remove("hide");

}




function add(text,type){


chat.innerHTML +=

`
<div class="${type}">
${text}
</div>
`;

chat.scrollTop=chat.scrollHeight;

}




function choose(value){

choices.style.visibility="hidden";

text.value=value;

send();

}





function send(){


let msg=text.value;


if(msg=="")return;


add(msg,"user");

text.value="";


setTimeout(()=>reply(msg),700);


}




function reply(msg){


let ans="";


if(step==0){

data.problem=msg;

data.type=msg;

ans=questions[msg][0];

}



else if(step==1){


data.duration=msg;

ans=questions[data.type][1];

}



else if(step==2){


data.intensity=msg;

ans=questions[data.type][2];

}



else if(step==3){


data.reason=msg;


ans=
"You did the right thing by talking about it ❤️ Let me prepare your care plan.";


setTimeout(showPlan,1000);

}



add(ans,"bot");


step++;

}





function showPlan(){


chatPage.classList.add("hide");

planPage.classList.remove("hide");



let level="🟢 Low Concern";


if(data.intensity.toLowerCase().includes("strong"))

level="🟠 Needs Timely Attention";


else if(data.intensity.toLowerCase().includes("medium"))

level="🟡 Moderate Concern";



document.getElementById("level").innerHTML=level;

let barrier="🤔 Uncertainty";

let reason=data.reason.toLowerCase();

if(reason.includes("money"))
barrier="💰 Financial Concern";

else if(reason.includes("fear"))
barrier="😨 Fear of Diagnosis";

else if(reason.includes("time"))
barrier="⏰ Lack of Time";

else if(reason.includes("shy"))
barrier="😔 Social Stigma";

document.getElementById("summary").innerHTML=

"Detected Barrier: <b>"+barrier+
"</b><br><br>Remember dear ❤️ Taking care of yourself early is always a good step.";

document.getElementById("barrier").innerHTML=barrier;

p.innerHTML=data.problem;

d.innerHTML=data.duration;

i.innerHTML=data.intensity;

r.innerHTML=data.reason;



}





function money(){


planPage.classList.add("hide");

moneyPage.classList.remove("hide");


}