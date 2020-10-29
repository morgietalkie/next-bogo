import Head from "next/head";
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import Posts from "../components/Posts";

export default function Blog() {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(21);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
      setPost(res.data);
      console.log(res);
      setLoading(false);
    };

    fetchPost();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page

  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="content">
        <section>
          <div>
            <h1>Blog</h1>

            <Posts posts={currentPosts} loading={loading} hasMore={hasMore} setPostsPerPage={setPostsPerPage} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
