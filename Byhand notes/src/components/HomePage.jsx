
import Navbar from "./nav";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#292820]">
      <Navbar />

      <main className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#88745B]">
          Stories by people, for people.
        </p>

        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#A18A6D]">
          A little corner of the internet
        </p>

        <h1 className="max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-7xl">
          Not everything needs to be perfect.
          <span className="mt-2 block italic text-[#987C59]">
            Just honest.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-[#716D63] sm:text-lg">
          A place for unfinished thoughts, lessons learned the hard way,
          quiet observations, and stories that deserve to be told.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-lg bg-[#292820] px-8 py-4 text-sm font-medium text-white transition duration-200 hover:bg-[#454337] hover:shadow-lg active:scale-95"
          >
            Start writing <span className="ml-2">↗</span>
          </button>

          <button
            type="button"
            className="rounded-lg border border-[#D6CFC2] bg-transparent px-8 py-4 text-sm font-medium text-[#292820] transition duration-200 hover:border-[#292820] hover:bg-[#EEE9DF] active:scale-95"
          >
            Explore stories
          </button>
        </div>

        <div className="mt-20 border-t border-[#E2DBCF] pt-6">
          <p className="font-serif text-lg italic text-[#817969]">
            "Some things make more sense when you write them down."
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
