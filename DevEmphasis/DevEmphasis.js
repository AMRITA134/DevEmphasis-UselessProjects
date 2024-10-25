<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brain Rot Quiz</title>
    <style>
        body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            text-align: center;
            padding: 20px;
        }
        #quiz-container, #result-container {
            display: none;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
        }
        button {
            padding: 10px;
            margin: 5px;
            font-size: 16px;
            cursor: pointer;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
        }
        button:hover {
            background-color: #0056b3;
        }
        h1, h2 {
            color: #FF5733;
        }
    </style>
</head>
<body>

<h1>Welcome to the Brain Rot Quiz!</h1>
<button onclick="startQualifyingQuiz()">Start Qualifying Quiz</button>

<div id="quiz-container">
    <h2 id="quiz-question"></h2>
    <button onclick="selectAnswer(0)" id="answer0"></button>
    <button onclick="selectAnswer(1)" id="answer1"></button>
    <button onclick="selectAnswer(2)" id="answer2" style="display: none;"></button>
    <button onclick="selectAnswer(3)" id="answer3" style="display: none;"></button>
</div>

<div id="result-container">
    <h2 id="result-title"></h2>
    <p id="result-message"></p>
    <button id="next-button" onclick="goToBrainRotQuiz()" style="display:none;">Go to Brain Rot Quiz</button>
    <button onclick="restartQuiz()">Restart</button>
</div>

<script>
    // Updated qualifying questions with correct answers
    const qualifyingQuestions = [
        { question: "How long do you spend on social media?", answers: ["Less than an hour", "1-3 hours", "3-5 hours", "More than 5 hours"], correct: 0 },
        { question: "Are you familiar with Gen Z slang?", answers: ["Not at all", "A little", "Pretty much", "I am Gen Z"], correct: 0 },
        { question: "Do you frequently use TikTok?", answers: ["Never", "Occasionally", "Regularly", "I am a creator"], correct: 1 }
    ];
    
    let currentQuestionIndex = 0;

    function startQualifyingQuiz() {
        currentQuestionIndex = 0;
        document.getElementById('result-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        showQualifyingQuestion();
    }

    function showQualifyingQuestion() {
        const question = qualifyingQuestions[currentQuestionIndex];
        document.getElementById('quiz-question').innerText = question.question;
        document.getElementById('answer0').innerText = question.answers[0];
        document.getElementById('answer1').innerText = question.answers[1];
        document.getElementById('answer2').innerText = question.answers[2];
        document.getElementById('answer3').innerText = question.answers[3];
        
        document.getElementById('answer2').style.display = question.answers.length > 2 ? 'inline-block' : 'none';
        document.getElementById('answer3').style.display = question.answers.length > 3 ? 'inline-block' : 'none';

        document.getElementById('answer0').onclick = () => selectAnswer(0);
        document.getElementById('answer1').onclick = () => selectAnswer(1);
        document.getElementById('answer2').onclick = () => selectAnswer(2);
        document.getElementById('answer3').onclick = () => selectAnswer(3);
    }

    function selectAnswer(answerIndex) {
        const currentQuestion = qualifyingQuestions[currentQuestionIndex];
        if (answerIndex === currentQuestion.correct) {
            currentQuestionIndex++;
            if (currentQuestionIndex < qualifyingQuestions.length) {
                showQualifyingQuestion();
            } else {
                showResults("You are eligible for brain rot!");
                document.getElementById('next-button').style.display = 'block';
            }
        } else {
            showResults("You are not eligible for brain rot!");
            document.getElementById('next-button').style.display = 'none';
        }
    }

    function showResults(message) {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
        document.getElementById('result-title').innerText = message;
    }

    function goToBrainRotQuiz() {
        document.getElementById('result-container').style.display = 'none';
        startBrainRotQuiz();
    }

    // Brain Rot Quiz
    const brainRotQuestions = [
        { question: "What does 'skibidi' mean?", answers: ["A dance", "A meme", "A type of food", "Nothing"], correct: 0 },
        { question: "How does one achieve Sigma energy?", answers: ["Meditation", "Scrolling TikTok", "Hustling 24/7", "Sleeping"], correct: 2 },
        { question: "What is the opposite of an Alpha?", answers: ["Beta", "Gamma", "Zeta", "Delta"], correct: 0 },
    ];

    let brainRotIndex = 0;
    let aura = 0;

    function startBrainRotQuiz() {
        brainRotIndex = 0;
        aura = 0;
        document.getElementById('quiz-container').style.display = 'block';
        showBrainRotQuestion();
    }

    function showBrainRotQuestion() {
        const question = brainRotQuestions[brainRotIndex];
        document.getElementById('quiz-question').innerText = question.question;
        document.getElementById('answer0').innerText = question.answers[0];
        document.getElementById('answer1').innerText = question.answers[1];
        document.getElementById('answer2').innerText = question.answers[2];
        document.getElementById('answer3').innerText = question.answers[3];

        document.getElementById('answer2').style.display = 'inline-block';
        document.getElementById('answer3').style.display = 'inline-block';

        document.getElementById('answer0').onclick = () => selectBrainRotAnswer(0);
        document.getElementById('answer1').onclick = () => selectBrainRotAnswer(1);
        document.getElementById('answer2').onclick = () => selectBrainRotAnswer(2);
        document.getElementById('answer3').onclick = () => selectBrainRotAnswer(3);
    }

    function selectBrainRotAnswer(answerIndex) {
        const currentQuestion = brainRotQuestions[brainRotIndex];
        if (answerIndex === currentQuestion.correct) {
            aura += 10;
            brainRotIndex++;
            if (brainRotIndex < brainRotQuestions.length) {
                showBrainRotQuestion();
            } else {
                showUltimateTitle();
            }
        } else {
            showResults("You failed at brain rot!");
        }
    }

    function showUltimateTitle() {
        showResults(`Congratulations! You've earned the title: Ultimate Alpha Ohio Boss! Aura Score: ${aura}`);
    }

    function restartQuiz() {
        document.getElementById('result-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'none';
        currentQuestionIndex = 0;
        brainRotIndex = 0;
        aura = 0;
    }
</script>

</body>
</html>