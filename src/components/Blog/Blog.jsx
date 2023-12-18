import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
      <div>
        <Helmet>
          <title>Career Hub | Blog</title>
        </Helmet>
        <h1 className="text-center text-3xl py-5">Blog Page</h1>
      </div>
    );
};

export default Blog;