import Layout from "../../components/layout";
import { useRouter } from "next/router";

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Movie with id: {id}</h1>
    </Layout>
  );
};

export default Movie;
