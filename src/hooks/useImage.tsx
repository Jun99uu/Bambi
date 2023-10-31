import ImageApi from "@/apis/image";
import { ImageType } from "Images";
import { useState } from "react";

const useImage = () => {
  const imageApi = new ImageApi();

  const [imageList, setImageList] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getImages = async () => {
    setIsLoading(true);
    try {
      const data = await imageApi.getImageList();
      setImageList(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return { getImages, imageList, isLoading };
};

export default useImage;
