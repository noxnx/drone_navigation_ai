import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="space-y-10 overflow-x-auto">
      <div className="">
        <Navbar />

        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Wir machen ihren Wohntraum wahr
              </h1>
              <p className="mb-5">
                Der Kauf oder Bau einer Immobilie ist eine der größten
                Entscheidungen im Leben. Mit Russello Finanz an Ihrer Seite
                finden Sie die perfekte Finanzierung, die genau auf Ihre
                Bedürfnisse abgestimmt ist. Wir beraten Sie transparent,
                unkompliziert und persönlich, damit Ihr Traum vom Eigenheim
                Wirklichkeit wird.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 min-h-screen rounded-lg m-5">
        <div className="hero-content flex-col lg:flex-row-reverse text-center">
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Testbild"
            width="500"
            height="500"
          /> */}
          <div className="flex flex-col text-center justify-center">
            <h2 className="text-5xl font-bold mb-24">
              Bei Russello Finanz stehen sie im Mittelpunkt
            </h2>
            <ul className=" list-none text-center">
              <div>
                <li className="flex flex-row justify-center">
                  <div className="flex flex-col">
                    <strong className="text-2xl">Persönliche Beratung</strong>
                    <p>Wir nehmen uns Zeit für Ihre Fragen und Anliegen.</p>
                  </div>
                  <Image
                    src="/checkmark icon.png"
                    alt="checkmark"
                    width={75}
                    height={75}
                    className="mb-10 ml-5"
                  />
                </li>
              </div>
              <li className="flex flex-row justify-center">
                <div className="flex flex-col">
                  <strong className="text-2xl">Schnelle Bearbeitung</strong>{" "}
                  <br />
                  Von der Anfrage bis zur Zusage – effizient und zeitnah.
                </div>
                <Image
                  src="/checkmark icon.png"
                  alt="checkmark"
                  width={75}
                  height={75}
                  className="mb-10 ml-5"
                />
              </li>
              <li className="flex flex-row justify-center">
                <div className="flex flex-col">
                  <strong className="text-2xl">Unabhängige Auswahl</strong>{" "}
                  <br />
                  Wir arbeiten mit einer Vielzahl von Banken zusammen.
                </div>
                <Image
                  src="/checkmark icon.png"
                  alt="checkmark"
                  width={75}
                  height={75}
                  className="mb-10 ml-5"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="hero bg-base-300 min-h-screen m-5 rounded-lg">
          <div className="hero-content">
            <div className="">
              <h2 className="text-5xl font-bold mb-24">Leistungen</h2>
              <div className="grid grid-rows-2 grid-cols-3 gap-10">
                <ul className="list-none">
                  <h3>Baufinanzierung</h3>
                  <li>
                    <a>
                      Maßgeschneiderte Finanzierungspläne für den Kauf oder Bau
                      Ihrer Immobilie.
                    </a>
                  </li>
                  <li>
                    <a>
                      Vergleich von über 400 Banken für die besten Konditionen.
                    </a>
                  </li>
                </ul>
                <ul className="list-none">
                  <h3>Privatkredite</h3>
                  <li>
                    <a>
                      Optimale Lösungen für die Verlängerung Ihrer bestehenden
                      Finanzierung.
                    </a>
                  </li>
                  <li>
                    <a>Sicherung niedriger Zinsen durch frühzeitige Planung.</a>
                  </li>
                </ul>
                <ul className="list-none">
                  <h3>Anschlussfinanzierungen</h3>
                  <li>
                    <a>
                      Optimale Lösungen für die Verlängerung Ihrer bestehenden
                      Finanzierung.
                    </a>
                  </li>
                  <li>
                    <a>Sicherung niedriger Zinsen durch frühzeitige Planung.</a>
                  </li>
                </ul>
                <ul className="list-none">
                  <h3>Modernisierungskredite</h3>
                  <li>
                    <a>
                      Finanzierung für Renovierungs- oder
                      Modernisierungsprojekte
                    </a>
                  </li>
                  <li>
                    <a>Flexible Konditionen und schnelle Abwicklung</a>
                  </li>
                </ul>
                <ul className="list-none">
                  <h3>Immobilien</h3>
                  <li>
                    <a>
                      Finanzierung für Renovierungs- oder
                      Modernisierungsprojekte.
                    </a>
                  </li>
                  <li>
                    <a>Flexible Konditionen und schnelle Abwicklung.</a>
                  </li>
                </ul>
                <ul className="list-none">
                  <h3>Kaufberatung</h3>
                  <li>
                    <a>
                      Unterstützung bei der Einschätzung von
                      Immobilienangeboten.
                    </a>
                  </li>
                  <li>
                    <a>Ermittlung Ihres finanziellen Spielraums.</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="flex flex-col justify-center items-center space-y-24">
        <h2 className="text-5xl">Kundenstimmen</h2>
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Burger"
            />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
