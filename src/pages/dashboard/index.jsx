import Head from "next/head";
import Logo from "../../components/Logo";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Devmentor - Dashboard</title>
      </Head>
      <div className="w-2/3 mx-auto">
        <nav className="h-[64px] flex items-center">
          <Logo />
        </nav>
        <main className="grid grid-cols-[400px_1fr]">
          <section></section>
          <section>This is my december</section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
