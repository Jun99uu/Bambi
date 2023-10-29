import quotes from "@/assets/svg/data/quotes";

export const getQuote = (): string => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
