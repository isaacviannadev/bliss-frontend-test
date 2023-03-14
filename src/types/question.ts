export type QuestionProps = {
  id: number;
  question: string;
  image_url: string;
  thumb_url: string;
  published_at: string;
  choices: ChoiceProps[];
};

export type ChoiceProps = {
  choice: string;
  votes: number;
};
