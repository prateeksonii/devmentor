import Head from "next/head";
import Image from "next/image";
import { FiCheckCircle, FiGithub } from "react-icons/fi";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Devmentor - Practice development</title>
      </Head>
      <main className="w-2/3 mx-auto py-8">
        <nav>
          <div className="text-xl font-black">
            <span className="text-primary">dev</span>mentor
          </div>
        </nav>
        {/* spacer */}
        <div className="p-8" />

        {/* hero */}
        <section className="grid grid-cols-2">
          <div>
            <div className="relative">
              <h1 className="text-7xl font-bold leading-normal">
                Practice makes
                <br />
                Perfect.
              </h1>
              <div className="w-[200px] absolute -bottom-12 h-20">
                <Image src="/line.svg" layout="fill" alt="underline" />
              </div>
            </div>
            <p className="mt-12">
              <ul className="text-2xl leading-relaxed">
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" /> Weekly new practice
                  projects
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" />
                  Get score with automated testing
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" />
                  Build your portfolio
                </li>
              </ul>
            </p>
            <div className="p-8" />
            <button className="btn">
              <FiGithub /> Login with Github
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default IndexPage;
