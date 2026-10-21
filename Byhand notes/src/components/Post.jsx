import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Feather, ArrowLeft } from "lucide-react";

function Post() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");

  const wordCount = content.trim()
    ? content.trim().split(/\s+/).length
    : 0;

  const handlePublish = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please add a title and write your story.");
      return;
    }

    const post = {
      id: Date.now(),
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      category,
      createdAt: new Date().toISOString(),
    };

    try {
      const savedPosts = JSON.parse(
        localStorage.getItem("byhand-posts") || "[]"
      );

      localStorage.setItem(
        "byhand-posts",
        JSON.stringify([post, ...savedPosts])
      );

      alert("Your story has been saved!");
      navigate("/blog");
    } catch (error) {
      console.error("Unable to save post:", error);
      alert("Unable to save your story. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#292820]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#E2DBCF] px-5 py-5 sm:px-10">
        <Link to="/" className="flex items-center gap-2">
          <Feather size={23} />
          <span className="font-serif text-xl font-semibold">
            Byhand Notes
          </span>
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[#716D63] transition hover:text-[#292820]"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
      </header>

      {/* Writing area */}
      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#987C59]">
          Your space to write
        </p>

        <h1 className="mb-3 font-serif text-4xl sm:text-5xl">
          Start with a thought.
        </h1>

        <p className="mb-10 leading-7 text-[#716D63]">
          It doesn't have to be perfect. It just has to be yours.
        </p>

        <form onSubmit={handlePublish} className="space-y-7">
          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium"
            >
              Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-[#E2DBCF] bg-[#FFFEFB] px-4 py-3 outline-none focus:border-[#987C59]"
            >
              <option>Personal</option>
              <option>Life</option>
              <option>Technology</option>
              <option>Books</option>
              <option>Ideas</option>
              <option>Stories</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium"
            >
              Story title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your story a title..."
              maxLength={150}
              required
              className="w-full rounded-xl border border-[#E2DBCF] bg-[#FFFEFB] px-4 py-4 font-serif text-xl outline-none placeholder:text-[#B4AC9E] focus:border-[#987C59] sm:text-2xl"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label
              htmlFor="excerpt"
              className="mb-2 block text-sm font-medium"
            >
              Short introduction{" "}
              <span className="font-normal text-[#716D63]">
                (optional)
              </span>
            </label>

            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="What is your story about?"
              rows={2}
              maxLength={250}
              className="w-full resize-y rounded-xl border border-[#E2DBCF] bg-[#FFFEFB] px-4 py-3 leading-7 outline-none placeholder:text-[#B4AC9E] focus:border-[#987C59]"
            />
          </div>

          {/* Story content */}
          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium"
            >
              Your story
            </label>

            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Begin anywhere. Write what you want to say..."
              rows={14}
              required
              className="w-full resize-y rounded-xl border border-[#E2DBCF] bg-[#FFFEFB] px-5 py-5 font-serif text-lg leading-8 outline-none placeholder:font-sans placeholder:text-base placeholder:text-[#B4AC9E] focus:border-[#987C59]"
            />

            <p className="mt-2 text-right text-sm text-[#716D63]">
              {wordCount} {wordCount === 1 ? "word" : "words"}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-[#E2DBCF] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/"
              className="rounded-xl px-5 py-3 text-center text-sm text-[#716D63] transition hover:bg-[#EEE8DE]"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-xl bg-[#292820] px-7 py-3.5 font-medium text-white transition hover:bg-[#454235] active:scale-[0.99]"
            >
              Publish story →
            </button>
          </div>
        </form>

        <p className="mt-10 text-center font-serif italic text-[#716D63]">
          Stories by people, for people.
        </p>
      </main>
    </div>
  );
}

export default Post;