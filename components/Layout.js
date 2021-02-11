import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title = "Next.js Posts" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next,javascript,nextjs,react, redux" />
        <meta name="description" content="next.js test work " />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Posts</a>
        </Link>
        <Link href={"/post/new"}>
          <a>Create new post</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background-color: #00474f;
          -moz-box-shadow: 3px 3px 5px 6px #ccc;
          -webkit-box-shadow: 3px 3px 5px 6px #ccc;
          box-shadow: 3px 3px 5px 6px #ccc;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 400;
          color: #08979c;
          font-size: 28px;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};

export default Layout;
