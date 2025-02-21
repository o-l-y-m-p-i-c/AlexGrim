import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { Hero } from "@/containers/Home/Hero";
import { Jobs } from "@/containers/Home/Jobs";
import { Contacts } from "@/containers/Contacts";
import { Collage } from "@/containers/Home/Collage";

import image1 from "../assets/Renate.png";

import styles from "./page.module.css";
import "swiper/css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main>
          <Hero />
          <Jobs
            {...{
              span: "NOVEMBER 2021",
              title: "Viking - SFX exam",
              description:
                "I had the incredible opportunity to showcase my skills as an SXF makeup artist during an exhilarating Viking character transformation. This unique experience allowed me to blend historical authenticity with creative artistry, crafting a character that resonated with the fierce spirit of the Vikings. Working alongside a talented photographer in Riga, we brought this vision to life through an unforgettable photoshoot. The result was a stunning before-and-after transformation that captured the essence of the Viking era, showcasing my passion for makeup artistry and my dedication to creating unforgettable looks. This project not only challenged my skills but also ignited my enthusiasm for pushing the boundaries of makeup artistry.",
              slides: [
                {
                  isImage: true,
                  alt: "",
                  imageUrl: "1",
                },
                {
                  isImage: true,
                  alt: "",
                  imageUrl: "1",
                },
                {
                  isImage: true,
                  alt: "",
                  imageUrl: "1",
                },
                {
                  alt: "",
                  children: <>Hello</>,
                },
              ],
            }}
          />
          <Jobs
            {...{
              span: "MARCH 2022",
              title: "Ubisoft - Assassin's Creed 15th Anniversary",
              isReverse: true,
              description:
                "I had the privilege of contributing to a special project celebrating the 15th anniversary of Ubisoft's renowned Assassin's Creed franchise. Collaborating with the talented team behind this short movie was a remarkable experience that allowed me to showcase my makeup artistry skills in a dynamic and cinematic context. Bringing iconic characters to life from such a beloved and historically rich game series was a dream come true, and it further solidified my passion for immersive and character-driven makeup artistry.",
              buttons: [
                {
                  title: "View video",
                  href: "#",
                },
              ],
              slides: [
                {
                  isImage: true,
                  alt: "",
                  imageUrl: "1",
                },
                {
                  isImage: true,
                  alt: "",
                  imageUrl: "1",
                },
                {
                  isImage: true,
                  alt: "",
                  imageUrl: "1",
                },
                {
                  alt: "",
                  children: <>Hello</>,
                },
              ],
            }}
          />
          <Collage
            title={"Ubisoft - Assassin's Creed"}
            span={"My work 2022"}
            columns={3}
            items={[
              {
                src: image1.src,
                alt: "test",
              },
              {
                src: image1.src,
                alt: "test",
              },
              {
                src: image1.src,
                alt: "test",
              },
            ]}
          />
          <Collage
            title={"Nelūgtie Viesi 2, TV series, Latvia"}
            span={"My work 2023"}
            columns={3}
            items={[
              {
                src: image1.src,
                alt: "test",
              },
              {
                src: image1.src,
                alt: "test",
              },
              {
                src: image1.src,
                alt: "test",
              },
            ]}
          />
          <Jobs
            {...{
              span: "JUNE 2023",
              title: "Tea Time",
              description: `In the TV series "Tea Time," I had the exciting opportunity to immerse myself in the vibrant world of a rock band during the 1990s. This unique setting allowed me to explore the distinctive makeup styles and trends of that era, from grunge-inspired looks to the bold and rebellious aesthetics of the rock music scene. It was a fascinating journey to help transport the characters and evoke the spirit of the '90s through makeup. Working on this project not only tested my skills but also ignited my nostalgia for that iconic decade, reminding me of the power of makeup to capture the essence of a bygone era in a contemporary setting.`,
              // buttons: [
              //   {
              //     title: "View video",
              //     href: "#",
              //   },
              // ],
              slides: [
                {
                  isImage: true,
                  alt: "",
                  imageUrl: "1",
                },
                {
                  isImage: true,
                  alt: "",
                  imageUrl: "1",
                },
                {
                  isImage: true,
                  alt: "",
                  imageUrl: "1",
                },
                {
                  alt: "",
                  children: <>Hello</>,
                },
              ],
            }}
          />
          <Collage
            title={"Tea Time"}
            span={"My work 2023"}
            columns={3}
            items={[
              {
                src: image1.src,
                alt: "test",
              },
              {
                src: image1.src,
                alt: "test",
              },
              {
                src: image1.src,
                alt: "test",
              },
            ]}
          />
          <Contacts />
        </main>
        <Footer />
      </div>
    </>
  );
}
