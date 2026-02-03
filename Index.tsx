import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from '@/components/WelcomeScreen';
import QuestionCard from '@/components/QuestionCard';
import FinalQuestion from '@/components/FinalQuestion';
import Celebration from '@/components/Celebration';
import FloatingHearts from '@/components/FloatingHearts';

type Stage = 'welcome' | 'questions' | 'final' | 'celebration';

const questions = [
  {
    question: "What's your idea of a perfect day together? 🌸",
    options: [
      "Binge-watching shows with snacks",
      "Going on a spontaneous adventure",
      "Having deep heart-to-heart talks",
      "Just vibing and doing nothing together",
    ],
  },
  {
    question: "Pick our friendship anthem 🎵",
    options: [
      "You've Got a Friend in Me",
      "Count on Me - Bruno Mars",
      "Lean on Me",
      "That's What Friends Are For",
    ],
  },
  {
    question: "What makes you smile the most? 😊",
    options: [
      "Unexpected compliments",
      "Inside jokes only we understand",
      "Surprise visits or calls",
      "Thoughtful little gestures",
    ],
  },
  {
    question: "Our friendship is like... 💫",
    options: [
      "Coffee and cookies - perfect pair!",
      "Stars and the moon - always together",
      "Netflix and blankets - cozy forever",
      "Pizza and more pizza - always wanted!",
    ],
  },
  {
    question: "What would you do if I was sad? 🥺",
    options: [
      "Show up with ice cream immediately",
      "Send the funniest memes ever",
      "Give the biggest, warmest hug",
      "Plan an impromptu fun activity",
    ],
  },
];

const Index = () => {
  const [stage, setStage] = useState<Stage>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleStart = () => {
    setStage('questions');
  };

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStage('final');
    }
  };

  const handleYes = () => {
    setStage('celebration');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {stage === 'welcome' && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}
        
        {stage === 'questions' && (
          <div key="questions" className="min-h-screen flex items-center justify-center px-4 py-8">
            <QuestionCard
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              onAnswer={handleAnswer}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
            />
          </div>
        )}
        
        {stage === 'final' && (
          <FinalQuestion key="final" onYes={handleYes} />
        )}
        
        {stage === 'celebration' && (
          <Celebration key="celebration" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
