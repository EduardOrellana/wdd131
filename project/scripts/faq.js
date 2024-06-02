
//Date and Copyright---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

const containerTips = document.getElementById("post");
const carousel = document.getElementById("carousel");


//HamButton---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//Histoires filter---------------------------------------------------------------------------------------

//Variables
const h1 = document.getElementById("history-1");
const h2 = document.getElementById("history-2");
const h3 = document.getElementById("history-3");
const h4 = document.getElementById("history-4");
const containerStories = document.getElementById("history-dynamic");

//Collections Histoires:

const familyTherapyStories = [
	{
		number: "1",
		title: "The Healing of Broken Bonds",
		story: `
		John and Sarah had been married for over ten years. Over time, the stresses of work and raising two children had created a chasm between them. Arguments became frequent, and they both felt unheard and unloved. They were on the brink of divorce when a friend recommended couples therapy.

		Reluctantly, they attended their first session. Over weeks, with the guidance of a compassionate therapist, they learned to communicate effectively and rediscovered their love for each other. Therapy became a space where they could express their feelings without judgment. They began to understand each other's perspectives and rekindled their emotional and physical intimacy.
		
		Months later, their relationship was transformed. They were no longer merely coexisting but thriving as a couple. Their children, once anxious about the frequent fights, now saw their parents united and loving. Therapy had not only saved their marriage but had also restored a harmonious family environment.`
	},
	{
		number: "2",
		title: "A Father's Redemption",
		story: `
		Mark was a single father struggling to connect with his teenage son, Luke. The death of Luke's mother had left both of them grieving and distant. Mark didn't know how to reach out to his son, and Luke responded with anger and rebellion. Their home was filled with silence and tension.

		Desperate for a change, Mark sought the help of a family therapist. Initially, Luke resisted, but with time, he began to open up during the sessions. They explored their grief and learned to express their emotions. Mark discovered ways to support his son without being overbearing, and Luke found a safe space to talk about his feelings.
		
		Therapy became a turning point. Their relationship improved significantly, and they began to rebuild trust. Luke's behavior at school and home changed for the better, and Mark felt more competent as a parent. They learned to lean on each other and navigate their grief together, healing their fractured bond.`
	},
	{
		number: "3",
		title: "Reconnecting Across Generations",
		story: `
		Anna and her elderly mother, Maria, had always had a strained relationship. Anna felt that Maria was overly critical, while Maria believed Anna was ungrateful and distant. The tension between them affected their entire family dynamic, especially during family gatherings.

		At the suggestion of Anna’s husband, they decided to try family therapy. The sessions revealed long-held misunderstandings and unmet needs on both sides. Anna learned about her mother's struggles and sacrifices, while Maria began to appreciate Anna's challenges as a working mother.
		
		Through therapy, they developed new ways to communicate and support each other. They started spending more time together, and their relationship blossomed. The family noticed a positive shift in the atmosphere during gatherings, filled now with laughter and warmth. Therapy had bridged the generational gap and brought the family closer together.`
	},
	{
		number: "4",
		title: "The Miracle of Understanding",
		story: `
		Jessica and David were parents to a young boy named Ethan, who was diagnosed with autism. The diagnosis brought immense stress and fear into their lives. They struggled to manage Ethan's needs and found it challenging to understand his world. Their marriage was strained, and they often felt isolated and overwhelmed.
		
		A recommendation from a pediatrician led them to family therapy. The therapist helped them navigate their emotions and provided tools to better support Ethan. They learned about sensory needs, communication techniques, and how to create a supportive environment for their son.

		Therapy sessions also gave them a space to reconnect as a couple, share their fears, and support each other. They realized they were not alone in their journey. Over time, their home became a place of understanding and acceptance. Ethan began to thrive with the structured support, and Jessica and David grew stronger as a couple.

		Therapy had not only helped them understand and support their son but had also transformed their marriage. The miracle of understanding brought peace and joy back into their lives, allowing them to move forward with hope and resilience.`
	}
];

console.log(familyTherapyStories); //for debuggin

function displayStories(object) {
	object.forEach(element => {
		
		//DOM creating objects

		let title = document.createElement("h2");
		title.setAttribute("class", "titles-stories");
		title.textContent =  `${element.title}`;

		let descStory = document.createElement("p");
		descStory.setAttribute("class", "story-desc");
		descStory.textContent = `${element.story}`;

		containerStories.appendChild(title);
		containerStories.appendChild(descStory);

	});
}

function filterH1Stories() {
	event.preventDefault();
	containerStories.innerHTML = "";

	let first_history = familyTherapyStories.filter(story => story.number == "1");
	displayStories(first_history);

}

function filterH2Stories() {
	event.preventDefault();
	containerStories.innerHTML = "";

	let second = familyTherapyStories.filter(story => story.number == "2");
	displayStories(second);
	
}

function filterH3Stories() {
	event.preventDefault();
	containerStories.innerHTML = "";

	let third = familyTherapyStories.filter(story => story.number == "3");
	displayStories(third);
	
}

function filterH4Stories() {
	event.preventDefault();
	containerStories.innerHTML = "";

	let forth = familyTherapyStories.filter(story => story.number == "4");
	displayStories(forth);
	
}

//Click on the buttons------------------------------------------------------------------------------------------

window.addEventListener("load", filterH1Stories)
h1.addEventListener("click", filterH1Stories);
h2.addEventListener("click", filterH2Stories);
h3.addEventListener("click", filterH3Stories);
h4.addEventListener("click", filterH4Stories);



//Questions Section-----------------------------------------------------------------------------------------------

const questionSection = document.getElementById("question");
const topic_1 = document.getElementById("topic1");
const topic_2 = document.getElementById("topic2");
const topic_3 = document.getElementById("topic3");
const topic_4 = document.getElementById("topic4");

const questions = [
	{
		topic: "1",
		title: "How long have you been in the field of psychology?",
		answer: `Our team has a combined experience of over 20 years in the field of psychology.`
	},
	{
		topic: "1",
		title: "What type of cases or issues do you commonly address?",
		answer: `We specialize in family problems, relationship conflicts, anxiety, depression, and parenting issues.`
	},
	{
		topic: "2",
		title: "What benefits can I expect from therapy?",
		answer: `Therapy can help you improve coping skills, strengthen relationships, increase self-esteem, and find new ways to face life challenges.`
	},
	{
		topic: "2",
		title: "How often should I attend therapy sessions?",
		answer: `The frequency of therapy sessions depends on your individual needs and the severity of your issues. Initially, it's common to have weekly or biweekly sessions, but this may change as you progress in therapy.`
	},
	{
		topic: "3",
		title: "What kind of training do your psychologists have?",
		answer: `Our psychologists have university degrees in psychology and are licensed to practice therapy in their state.`
	},
	{
		topic: "3",
		title: "What's the difference between individual therapy and couples therapy?",
		answer: `Individual therapy focuses on an individual's personal and emotional issues, while couples therapy aims to improve communication and resolve conflicts in a relationship.`
	},
	{
		topic: "4",
		title: "Do you offer therapy online or in-person?",
		answer: `Yes, we offer both online and in-person sessions to accommodate our clients' preferences and needs.`
	},
	{
		topic: "4",
		title: "How can I determine which type of therapy is right for me?",
		answer: `Our therapists will work with you to determine the therapeutic approach that best suits your individual needs and treatment goals.`
	},
	
]

console.log(questions); //for debuggin

function displayQuestions(object) {
	object.forEach(element => {
		//DOM Creting Objects

		let questionTitle = document.createElement("h2");
		questionTitle.setAttribute("class", "questionTitle");
		questionTitle.textContent = `${element.title}`;

		let questionAnswer = document.createElement("p");
		questionAnswer.setAttribute("class", "questionAnswer");
		questionAnswer.textContent = `${element.answer}`;

		questionSection.appendChild(questionTitle);
		questionSection.appendChild(questionAnswer);
	});
}


function filterTopic1 () {
	event.preventDefault();
	questionSection.innerHTML = "";
	
	let first_topic = questions.filter(question_ => question_.topic == "1");
	displayQuestions(first_topic);

}


function filterTopic2 () {
	event.preventDefault();
	questionSection.innerHTML = "";
	
	let second_topic = questions.filter(question_ => question_.topic == "2");
	displayQuestions(second_topic);
	
}


function filterTopic3 () {
	event.preventDefault();
	questionSection.innerHTML = "";
	
	let third_topic = questions.filter(question_ => question_.topic == "3");
	displayQuestions(third_topic);
	
}

function filterTopic4 () {
	event.preventDefault();
	questionSection.innerHTML = "";
	
	let forth = questions.filter(question_ => question_.topic == "4");
	displayQuestions(forth);
	
}


topic_1.addEventListener("click", filterTopic1);
topic_2.addEventListener("click", filterTopic2);
topic_3.addEventListener("click", filterTopic3);
topic_4.addEventListener("click", filterTopic4);

//Desktop views---------------------------------------------------------------------------------
//DisplayMenu------------------------------------------------------------------------------
const globalHeader = document.querySelector('header');
const displayButton = document.querySelector('#display-menu');

displayButton.addEventListener('click', () =>{
	globalHeader.classList.toggle('open');
	displayButton.classList.toggle('open');
	navigation.classList.toggle('open');
})


//Main-------------------------------------------------------------------------------------------------

const divQuestions = document.getElementById("questions");
const divStories = document.getElementById("histories");
const divForm = document.getElementById("formulario-dates");
const thanksSection = document.getElementById("review");


//buttons

let butFAQ = document.getElementById("faq-button");
let butStories = document.getElementById("stories-button");
let butAppointment = document.getElementById("appointment-button");

butFAQ.addEventListener('click', displayFAQ)
butStories.addEventListener('click',displayStoriesFunction)
butAppointment.addEventListener('click', displayFormFunction)

function displayFAQ(){
	divQuestions.style.display = 'flex'
	divStories.style.display = 'none';
	divForm.style.display = 'none';
	thanksSection.style.display = 'none';
}

function displayStoriesFunction() {
	divQuestions.style.display = 'none'
	divStories.style.display = 'flex';
	divForm.style.display = 'none';
	thanksSection.style.display = 'none';
}

function displayFormFunction() {
	divQuestions.style.display = 'none'
	divStories.style.display = 'none';
	divForm.style.display = 'block';
	thanksSection.style.display = 'none';
}

//action of the form------------------------------------------------------------------------------

const textCount = document.getElementById("counter");
const form = document.querySelector("form.form1");

let counterLocalStorage = Number(window.localStorage.getItem("countingForm")) || 0;

function sumLocalStorage (event) {

	event.preventDefault();

	divQuestions.style.display = 'none'
	divStories.style.display = 'none';
	divForm.style.display = 'none';


	thanksSection.style.display = 'block';

	counterLocalStorage ++;
	window.localStorage.setItem("countingForm", counterLocalStorage);
	textCount.textContent = `You have ${counterLocalStorage} appointments`;
}

const sender = document.querySelector(`form.form1 input[type="image"]`);

form.addEventListener('submit', sumLocalStorage);