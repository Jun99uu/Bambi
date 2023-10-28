import { AdditionalData } from "Auth";
import axios, { AxiosResponse } from "axios";
import { post } from "./AxiosCreate";

class AuthApi {
  /** 사용자 정보 업데이트(회원가입) */
  signup = async (body: AdditionalData): Promise<any> => {
    const data: AxiosResponse<string> = await post(`/signup`, body);

    return data;
  };
}

export default AuthApi;
