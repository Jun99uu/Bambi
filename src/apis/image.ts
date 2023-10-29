import { AxiosResponse } from "axios";
import { get } from "./AxiosCreate";
import { ImageType } from "Images";

class ImageApi {
  getImageList = async (): Promise<ImageType[]> => {
    const data: AxiosResponse<ImageType[]> = await get("/getImages");
    return data.data;
  };
}

export default ImageApi;
