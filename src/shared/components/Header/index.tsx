import { ElementRef, useEffect, useRef, useState } from "react";
import Button from "../Button";
import HashLink from "../HashLink";
import { GrDocumentDownload } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";
import { useGoogleAnalytics } from "@/shared/hooks/useGoogleAnalytics";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { triggerEvent } = useGoogleAnalytics();
  const headerRef = useRef<ElementRef<"div">>(null);

  const hideMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const headerEl = headerRef.current;
    if (headerEl == null) return;

    if (window.scrollY >= 30) headerEl.classList.add("shadow-lg");

    const onScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 30) {
        headerEl.classList.add("shadow-lg");
      } else if (scroll < 20) {
        headerEl.classList.remove("shadow-lg");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [headerRef]);

  return (
    <header className={styles["header"]} ref={headerRef}>
      <div className="flex px-6 items-center justify-between container">
        <a href="/">
          <h2 className="font-bold text-xl">
            <span className="text-2xl">F</span>erreira
          </h2>
        </a>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="space-y-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="block h-[3px] rounded-full w-8  bg-gray-900"></span>
            <span className="block h-[3px] rounded-full w-8  bg-gray-900"></span>
            <span className="block h-[3px] rounded-full w-8  bg-gray-900"></span>
          </div>

          <div className={isMobileMenuOpen ? styles["show"] : styles["hide"]}>
            <div
              className="absolute cursor-pointer top-0 right-0 px-6 py-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MdClose size={32} />
            </div>
            <nav className="flex flex-col items-center justify-between min-h-[250px]">
              <ul>
                <ul className="flex flex-col text-2xl gap-3 items-center font-light">
                  <li>
                    <Link to="/#home" onClick={hideMobileMenu}>
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link to="/#projects" onClick={hideMobileMenu}>
                      Projetos
                    </Link>
                  </li>
                  <li>
                    <Link to="/#about" onClick={hideMobileMenu}>
                      Sobre
                    </Link>
                  </li>
                </ul>
              </ul>
            </nav>
          </div>
        </section>
        <div className="hidden lg:flex">
          <nav>
            <ul className="flex gap-3 items-center font-light">
              <li>
                <HashLink href="/#home">Inicio</HashLink>
              </li>
              <li>
                <HashLink href="/#projects">Projetos</HashLink>
              </li>
              <li>
                <HashLink href="/#about">Sobre</HashLink>
              </li>
            </ul>
          </nav>
        </div>

        <a
          className={"hidden  lg:flex"}
          onClick={() => {
            triggerEvent("CV_DOWNLOAD", {});
          }}
          href="/assets/CURRICULO_MATEUS_FERREIRA.pdf"
          download
        >
          <Button size="sm" color="secondary" variant="solid">
            <GrDocumentDownload />
            Baixar CV
          </Button>
        </a>
      </div>
    </header>
  );
}
export default Header;
