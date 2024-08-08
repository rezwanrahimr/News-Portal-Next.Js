import { Col, Row } from "antd";
import Image from "next/image";
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
} from "@ant-design/icons";
import RootLayout from "@/components/Layouts/RootLayout";
import { useGetSingleNewsQuery } from "@/redux/api/api";

const NewsDetails = ({ newsId }) => {
    const { data, isLoading, error } = useGetSingleNewsQuery(newsId)
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="container-wrapper" style={{ marginTop: "100px" }}>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" span={12}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Image src={data.image_url} width={500} height={300} />
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <h1 style={{ fontSize: "50px" }}>
                        {data.title}
                    </h1>
                    <div
                        className="line"
                        style={{
                            height: "5px",
                            margin: "20px 0",
                            background: "#000",
                            width: "95%",
                        }}
                    ></div>

                    <p
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "90%",
                            color: "gray",
                            margin: "10px 0px",
                        }}
                    >
                        <span>
                            <CalendarOutlined /> FEBRUARY 28, 2023
                        </span>
                        <span>
                            <CommentOutlined /> NO COMMENTS
                        </span>
                        <span>
                            <ProfileOutlined /> HOBBY
                        </span>
                    </p>

                    <p style={{ fontSize: "20px" }}>
                        {data.description}
                    </p>
                    <p
                        style={{
                            fontSize: "20px",
                            margin: "20px 0px",
                            backgroundColor: "black",
                            color: "white",
                            width: "168px",
                            padding: "2px 5px ",
                            fontWeight: "300",
                            letterSpacing: "3px",
                        }}
                    >
                        Keep Reading <ArrowRightOutlined />
                    </p>

                </Col>
            </Row>
        </div>
    </div>
}
export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

// SSG
/* export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:5000/news`);
    const data = await res.json();

    const paths = data.map(news => ({
        params: { newsId: news.id.toString() }
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { newsId } = context.params;
    const res = await fetch(`http://localhost:5000/news/${newsId}`);
    const data = await res.json();

    return { props: { data } }
} */


// SSR
/* export const getServerSideProps = async (context) => {
    const { newsId } = context.params;
    const res = await fetch(`http://localhost:5000/news/${newsId}`);
    const data = await res.json();

    return { props: { data } }
} */

export const getServerSideProps = async (context) => {
    const { newsId } = context.params;
    // const res = await fetch(`http://localhost:5000/news/${newsId}`);
    // const data = await res.json();

    return { props: { newsId } }
}