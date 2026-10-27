
import Navbar from "./nav";
import Footer from "./footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
    const [posts ,setPosts ] = useState([]);
    const [search , setSearch ] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

const categories = [
  "All",
  "Personal",
  "Life",
  "Technology",
  "Books",
  "Ideas",
  "Stories",
];

    useEffect(()=>{
      const savedPostes = JSON.parse(
        localStorage.getItem("byhand-posts") || "[]"
      );

      setPosts(savedPostes);
      
    },[]);

    const filteredPosts = posts.filter((post) => {
  const matchesSearch = (post.title || "")
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    post.category === selectedCategory;

  return matchesSearch && matchesCategory;
});
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#292820]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">
       <input 
       type="text"
       placeholder="search stoires.."
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
       className="mb-8 w-full max-w-lg rounded-xl border border-[#E2DBCF] bg-[#FFFEFB] px-4 py-3 outline-none focus:border-[#987C59]"
       
       
       />
       <div className="mb-8 flex flex-wrap gap-3">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className="rounded-full border border-[#E2DBCF] px-4 py-2"
    >
      {category}
    </button>
  ))}
</div>
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
         {filteredPosts.map((post)=>(
          <article key = {post.id}
          className="rounded-2xl border border-[#E2DBCF] bg-[#FFFEFB] p-6">
            <p className="mb-3 text-sm text-[#987C59]">{post.category}</p>

      <h2 className="mb-3 font-serif text-2xl">
        {post.title}
      </h2>

      <p className="leading-7 text-[#716D63]">
        {post.excerpt}
      </p>
      <Link
  to={`/blog/${post.id}`}
  className="mt-4 inline-block text-[#987C59] hover:underline"
>
  Read story →
</Link>
          </article>
         ))} 

        </div>
        

      </main>

      <Footer />
    </div>
  );
}

export default Blog;
