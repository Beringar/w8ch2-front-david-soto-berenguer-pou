import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <>
      <header>
        <ul className="navigation-bar">
          <li>
            <Link href="/">
              <a
                className={`nav-link ${router.pathname == "/" ? "active" : ""}`}
              >
                Tuitah Timelist
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tuiteros-list">
              <a
                className={`nav-link ${
                  router.pathname == "/tuiteros-list" ? "active" : ""
                }`}
              >
                Tuiteros List
              </a>
            </Link>
          </li>
          <li>
            <Link href="/create-tuitero">
              <a
                className={`nav-link ${
                  router.pathname == "/create-tuitero" ? "active" : ""
                }`}
              >
                Create Tuitero
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navigation;
