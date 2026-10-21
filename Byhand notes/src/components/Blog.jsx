
import Navbar from "./nav";
import Footer from "./footer";

function Blog() {
    //dummy data remove it later
    const posts = [
  {
    id: 1,
    title: "The Art of Being Alone",
    category: "Personal",
    excerpt: "Learning to enjoy your own company.",
  },
  {
    id: 2,
    title: "Small Things Matter",
    category: "Life",
    excerpt: "Finding happiness in ordinary moments.",
  },
  {
    id: 3,
    title: "My Journey into Coding",
    category: "Technology",
    excerpt: "What building my first project taught me.",
  },
];

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
      </main>

      <Footer />
    </div>
  );
}

export default Blog;
