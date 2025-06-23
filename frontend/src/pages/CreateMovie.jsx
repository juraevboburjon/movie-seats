import CretaeMovieForm from "../components/CretaeMovieForm";
import Layout from "../components/Layout";

function CreateMovie() {
  return (
    <Layout>
      <div className="pt-5">
        <CretaeMovieForm />
      </div>
    </Layout>
  );
}

export default CreateMovie;
