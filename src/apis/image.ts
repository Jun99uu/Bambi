import axios, { AxiosResponse } from "axios";
import { get, post } from "./AxiosCreate";
import { ImageResult, ImageType } from "Images";

class ImageApi {
  getImageList = async (): Promise<any> => {
    const data = await axios.get("/api/getImages");
    return data.data;
  };

  postImage = async (prompt: string): Promise<ImageResult> => {
    const data: AxiosResponse<ImageResult> = await axios.post(
      process.env.NEXT_PUBLIC_KARLO_API_URL!,
      {
        prompt: prompt,
        width: 640,
        height: 640,
        image_format: "jpeg",
        image_quality: 100,
      },
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KARLO_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return data.data;
  };

  updateImage = async (image: string, desc: string): Promise<any> => {
    const data: AxiosResponse<any> = await post("/createImage", {
      image,
      desc,
    });
    return data;
  };
}

export default ImageApi;
