import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://api.kakaobrain.com/v2/inference/karlo/t2i",
        {
          prompt:
            "A black cat painted by studio ghibli to comfort sad feelings",
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
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={handleSubmit}>ㄱㄱ</button>
    </>
  );
};

export default Home;
