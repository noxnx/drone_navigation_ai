import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-48">
      <div
        className="border-t-2 m-10 grid grid-rows-3 grid-flow-col gap-4"
        id="footer"
      >
        <div class="row-span-3 border border-black shadow-xl rounded-lg p-4 mt-5">
          <div className="flex flex-row items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/flemming_transparent.png"
                width={250}
                height={250}
                alt="Flemming Logo"
              />
            </Link>
            <div className="text-center">
              <h4>Flemming Kaffee und Maschinen GmbH</h4>
              <p>Echtes Handwerk seit 1989</p>
            </div>
          </div>
        </div>
        <div class="col-span-2 border border-black shadow-xl rounded-lg p-4 mt-5">
          <h4>Über uns</h4>
          <ul className="list-none">
            <li>
              <Link href="/jobs" className="hover:underline">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog & News
              </Link>
            </li>
          </ul>
        </div>
        <div class="row-span-2 col-span-2 border border-black shadow-xl rounded-lg p-4">
          <h4>Rechtliches</h4>
          <ul className="m-4 list-none">
            <li>
              <Link href="/" className="hover:underline">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Nutzungsbedingungen
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
