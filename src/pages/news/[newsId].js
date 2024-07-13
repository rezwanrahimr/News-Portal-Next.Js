const NewsDetails = ({data}) => {
    return <h1>News Details {data?.title}</h1>
}
export default NewsDetails;

export const getStaticPaths = async () => {
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
}