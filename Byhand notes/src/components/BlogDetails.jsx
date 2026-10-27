import Navbar from "./nav";
import Footer from "./footer";


const BlogDetails = ()=>{
    return(<>
    <Navbar/>
     <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
        <p className="text-[#716D63]">Story category</p>

        <h1 className="mt-4 font-serif text-4xl text-[#292820]">
          Story title
        </h1>

        <article className="mt-8 leading-8 text-[#716D63]">
          Full story content will appear here.
        </article>
      </main>


    <Footer/>
    </>)
}







export default BlogDetails;