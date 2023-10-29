import ImageApi from "@/apis/image";
import { useQuery } from "@tanstack/react-query";

const useImage = () => {
  const imageApi = new ImageApi();

  const {
    data: images,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userImages"],
    queryFn: () => imageApi.getImageList(),
  });

  return { images, isLoading, isError };
};

export default useImage;
