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

  export type ImageResult = {
    id: string;
    images: {
      id: string;
      image: string;
      nsfw_content_detected: boolean | null;
      nsfw_score: number | null;
      seed: number;
    }[];
    model_version: string;
  };
}
