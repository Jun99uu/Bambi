declare module "Images" {
  export type ImageType = {
    imageid: number;
    user_id: string;
    createdat: string;
    description: string;
  };

  export type QuestionType = {
    question: string;
    answers: AnswerType[];
  };

  export type AnswerType = {
    text: string;
    category: string;
  };
}
