/**
 * 가장 많이 등장한 카테고리 뽑아내기
 */
export const getCategory = (categories: string[]): string => {
  const frequency: { [key: string]: number } = {};

  categories.forEach((category) => {
    if (frequency[category]) {
      frequency[category]++;
    } else {
      frequency[category] = 1;
    }
  });

  let maxCategory = "";
  let maxCount = 0;

  for (const category in frequency) {
    if (frequency[category] > maxCount) {
      maxCount = frequency[category];
      maxCategory = category;
    }
  }

  return maxCategory;
};

/**
 * 문장 받아오기
 */
export const getSentence = (
  category: string,
  job: string,
  taste: string
): string => {
  const baseSentence = `${job} Cat Paintings in ${taste} Style`;

  switch (category) {
    case "VeryHappy":
      return `Joyful ${baseSentence}`;
    case "Joyful":
      return `Cheerful ${baseSentence}`;
    case "Neutral":
      return `Calm ${baseSentence}`;
    case "Sad":
      return `A comforting scene where one cat consoles another in ${baseSentence}`;
    case "Exhausted":
      return `A heartwarming scene where one cat supports a tired friend in ${baseSentence}`;
    case "Angry":
      return `A soothing scene where one cat calms an angry friend in ${baseSentence}`;
    default:
      return baseSentence;
  }
};
