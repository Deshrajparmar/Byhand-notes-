
import Navbar from "./nav";
import Footer from "./footer";
import { useEffect, useState } from "react";

function Blog() {
    const [posts ,setPosts ] = useState([]);

    useEffect(()=>{
      const savedPostes = JSON.parse(
        localStorage.getItem("byhand-posts") || "[]"
      );

      setPosts(savedPostes);
    },[]);

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#292820]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm uppercase tracking-widest text-[#987C59]">
          The Byhand Journal
        </p>

        <h1 className="font-serif text-5xl">
          Stories worth slowing down for.
        </h1>

        <p className="mt-5 max-w-xl leading-8 text-[#716D63]">
          Discover honest thoughts, personal experiences, and stories
          written by people like you.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         {posts.map((post)=>(
          <article key = {post.id}
          className="rounded-2xl border border-[#E2DBCF] bg-[#FFFEFB] p-6">
            <p className="mb-3 text-sm text-[#987C59]">{post.category}</p>

      <h2 className="mb-3 font-serif text-2xl">
        {post.title}
      </h2>

      <p className="leading-7 text-[#716D63]">
        {post.excerpt}
      </p>
          </article>
         ))} 

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blog;
