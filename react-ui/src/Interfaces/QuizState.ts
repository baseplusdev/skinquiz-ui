import { IQuizQuestion } from "./QuizQuestion";
import { Dispatch, SetStateAction } from 'react';
import { IIngredient } from "./WordpressProduct";
import { ISkinCondition } from "./SkinCondition";
import { IErrorResponse } from "./ErrorResponse";
import { ICompletedQuiz } from "./CompletedQuiz";

interface IQuiz {
  progressCount: number;
  updateCount: Dispatch<SetStateAction<number>>;
  quizQuestions: IQuizQuestion[];
  updateQuizQuestions: Dispatch<SetStateAction<IQuizQuestion[]>>;
  ingredients: IIngredient[];
  updateIngredients: Dispatch<SetStateAction<IIngredient[]>>;
  questionsAnswered: IQuizQuestion[];
  updateQuestionsAnswered: Dispatch<SetStateAction<IQuizQuestion[]>>;
  questionInputAnswer: string;
  updateQuestionInputAnswer: Dispatch<SetStateAction<string>>;
  selectedSkinConditions: ISkinCondition[];
  updateSelectedSkinConditions: Dispatch<SetStateAction<ISkinCondition[]>>;
  userName: string;
  updateUserName: Dispatch<SetStateAction<string>>;
  baseIngredient: IIngredient;
  saveBaseIngredient: Dispatch<SetStateAction<IIngredient>>;
  setQuizToCompleted: Dispatch<SetStateAction<boolean>>;
  isQuizCompleted: boolean;
  isAnswersPanelVisible: boolean;
  setAnswersPanelVisibility: Dispatch<SetStateAction<boolean>>;
  hasApplicationErrored: IErrorResponse;
  setApplicationError: Dispatch<SetStateAction<IErrorResponse>>;
  completedQuizData: ICompletedQuiz[];
  saveCompletedQuizData: Dispatch<SetStateAction<ICompletedQuiz[]>>;
}

export default IQuiz;