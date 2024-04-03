import Head from "next/head";
import Categories from "~/components/Categories";
import Navbar from "~/components/Navbar";
import Projects from "~/components/Projects";
import Terminal from "~/components/Terminal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Pixler</title>
        <meta name="description" content="Jacob Pixler's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Jacob Pixler's Portfolio"
          key="title"
        />
        <meta
          property="og:description"
          content="I'm just a coffee looking forward to my next programmer."
          key="description"
        />
      </Head>
      <main className="font-category2">
        <div className="h-[100vh]">
          <Navbar />
          <Terminal />
          <Categories />
        </div>
        <Projects />
      </main>
    </>
  );
}
