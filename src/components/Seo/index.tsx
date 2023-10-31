import Head from "next/head";

export interface headProps {
  title: string;
  desc: string;
  ogDesc: string;
}

/**
 * 검색 최적화를 위한 Seo 컴포넌트
 * 페이지 최 상단에 선언하면 됩니다.
 */
const Seo = ({ title, desc, ogDesc }: headProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | 당신의 마음을 그려주는 고양이, 밤비`}</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="밤비,Bambi,bambi,데보션,devocean,데보션영,devoceanyoung,skt,심리상담,고양이,고양이앱,상담앱,그림앱,karlo,칼로,카카오"
        />
        <meta name="og:site_name" content={`BAMBI`} />
        <meta
          name="og:title"
          content={`${title} | 당신의 마음을 그려주는 고양이, 밤비`}
        />
        <meta name="og:description" content={ogDesc} />
        <meta name="og:type" content="website" />
        <meta name="twitter:title" content="BAMBI" />
      </Head>
    </>
  );
};

export default Seo;
