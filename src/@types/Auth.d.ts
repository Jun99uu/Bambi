declare module "Auth" {
  export type SocialType = "KAKAO" | "GOOGLE";

  export type AdditionalData = {
    nickname: string;
    job: string;
    taste: string;
  };

  export interface StageProps {
    values: AdditionalData;
    handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    handleChangeValue: (key: string, value: string) => void;
  }
}
