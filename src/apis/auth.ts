import { AdditionalData } from "Auth";
import { AxiosResponse } from "axios";
import { post, remove } from "./AxiosCreate";

class AuthApi {
  /** 사용자 정보 업데이트(회원가입) */
  signup = async (body: AdditionalData): Promise<any> => {
    const data: AxiosResponse<string> = await post(`/signup`, body);
    return data;
  };

  /** 회원 탈퇴 */
  removeAccount = async (): Promise<any> => {
    const data: AxiosResponse<string> = await remove(`/removeAccount`);
    return data;
  };
}

export default AuthApi;
