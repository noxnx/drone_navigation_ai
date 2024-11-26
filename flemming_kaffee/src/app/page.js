import NavigationBar from "@/components/NavigationBar"
import TextReveal from "@/components/ui/text-reveal";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import GradualSpacing from "@/components/ui/gradual-spacing";
import IconCloud from "@/components/ui/icon-cloud";
import IsInViewSection from "@/app/components/IsInViewSection";
import Footer from "./components/Footer";

export const metadata = {
  title: "Home - Flemming Kaffee und Maschinen",
  description: "Flemming Kaffee und Maschinen GmbH"
}

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const slugs = [
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const ReviewCard = ({
  img,
  name,
  username,
  body}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export default function Home() {
  return(
    <div className="mb-10">
      <NavigationBar />
      <div className="relative">
        <Image
          src="/flemming_kaffee_team_blur_2.jpg"
          width={3840}
          height={1920}
          alt="Flemming Team"
          className="absolute top-0 left-0 w-full object-cover shadow-xl"
        />
      </div>
      <div className="">
        <GradualSpacing className="absolute bottom-40 bg-gradient-to-b from-orange-700 via-orange-600 to-orange-500 bg-clip-text text-3xl font-bold tracking-tight md:text-7xl md:leading-[5rem]" text="Flemming" />
        <GradualSpacing className="absolute bottom-24 bg-gradient-to-b from-orange-700 via-orange-600 to-orange-500 bg-clip-text text-xl font-bold tracking-tight md:text-5xl md:leading-[5rem]" text="Kaffee und Maschinen"/>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-64 pt-96 mt-48">
        <TextReveal text="Entdecken Sie Kaffee auf einem völlig neuen Level." />
      </div>
      <div className="flex flex-col items-center space-y-14">
        <h2 className="rounded-none text-5xl border-none">Kundenstimmen...</h2>
        <div>
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
            </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
        </div>
      </div>
      <div>
      <IsInViewSection>
      <div className="flex justify-center items-center flex-row mt-48">
        <div className="flex flex-col">
          <h2 className="rounded-none text-2xl">Unsere Marken – Qualität und Innovation bei Kaffeemaschinen</h2>
          <p>Wir setzen bei Kaffeemaschinen auf bewährte Marken, <br />die für höchste Qualität, Langlebigkeit und innovative Technologien stehen. <br />Von traditionellen Siebträgermaschinen bis hin zu modernen Vollautomaten bieten unsere Partner alles, <br />was das Herz eines Kaffeeliebhabers höherschlagen lässt. <br />Jede Marke in unserem Sortiment wurde sorgfältig ausgewählt, <br />um Ihnen besten Kaffeegenuss und zuverlässige Leistung zu garantieren.<br />Entdecken Sie bei uns die Vielfalt führender Hersteller <br />und finden Sie die perfekte Maschine, die Ihre Ansprüche erfüllt!</p>
        </div>
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      </IsInViewSection>
      </div>
      <div className="mt-48">
        <IsInViewSection>
          <div className="bg-white min-h-screen min-w-full text-center justify-center space-y-24">
            <h2 className="font-display text-center text-4xl font-bold tracking-tight text-black dark:text-white md:text-7xl md:leading-[5rem]">Unser Angebot</h2>
            <div className="flex flex-row justify-start mt-10 ml-4">
              <Image src="/la_marzocco_image.jpg" width={1000} height={750} className="rounded-lg product-image-slidein shadow-xl"/>
              <div className="">
              <h3 className="ml-4">Espressomaschinen</h3>
              <p className="mx-4">Entdecken Sie unsere Auswahl an hochwertigen Espressomaschinen, die für perfekten Kaffeegenuss stehen. Ob für den privaten Gebrauch oder den Einsatz in Ihrem Café – unsere Maschinen vereinen erstklassige Technik, modernes Design und einfache Bedienung. Mit unserer Expertise helfen wir Ihnen, die Espressomaschine zu finden, die perfekt zu Ihren Ansprüchen passt. Starten Sie Ihren Tag mit einem vollmundigen Espresso, der Sie begeistern wird!</p>
            </div>
          </div>
          <div className="flex flex-row justify-end mt-10 mr-4">
            <div className="">
              <h3 className="mr-4">Vollautomaten</h3>
              <p className="mx-4">Erleben Sie die Zukunft des Kaffeekochens mit unserer Premium-Vollautomaten-Kaffeemaschine – die ideale Lösung für alle, die Wert auf Qualität, Komfort und Individualität legen. Mit nur einem Knopfdruck zaubert dieser Kaffeevollautomat aromatischen Kaffee, Espresso, Cappuccino und viele weitere Kaffeespezialitäten direkt in Ihre Tasse. Unsere Maschine vereint fortschrittliche Technologie mit intuitivem Design, um Ihnen das bestmögliche Kaffeevergnügen zu bieten. Dank der hochmodernen Mahltechnik wird jedes Kaffeebohnenaroma perfekt zur Entfaltung gebracht, während die automatische Dampffunktion für einen samtigen Milchschaum sorgt – ganz nach Ihrem Geschmack.</p>
            </div>
            <Image src="/jura-ena-8-scaled-e1717055768592.jpg" width={1000} height={750} alt="Jura Vollautomat" className="rounded-lg product-image-slidein shadow-xl"/>
          </div>
          </div>
        </IsInViewSection>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}