import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import {  useGetNewsQuery } from "@/redux/api/api";

const HomePage = ({ allNews }) => {
  const { data, isLoading, error } = useGetNewsQuery();
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllNews allNews={data} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// SSG
/* export const getStaticProps = async () => {
  const response = await fetch("http://localhost:5000/news");
  const data = await response.json();
  return {
    props: { allNews: data },
    revalidate: 30,
  };
}; */

// SSR
/* export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/news");
  const data = await response.json();
  return {
    props: { allNews: data }
  };
}; */
