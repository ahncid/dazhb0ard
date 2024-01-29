import Link from "next/link";
import { fetchGalleries } from "@/lib/data.service";
import styles from "./page.module.css";
import DevGalleryHero from "@/components/dev/devGalleryHero/devGalleryHero";
import { fetchAuthors } from "@/lib/data.service";
import DevAuthorHero from "@/components/dev/devAuthorHero/devAuthorHero";

export default async function Page() {
  const portfolios = await fetchAuthors();

  return (
    <main className={styles.page}>
      <h1>Portfolie Gallerier</h1>
      {/* Loop´er over vores galleri data. */}
      {portfolios.map((authors, index) => {
        {
          /* Indsætter vores Hero komponent og sender "gallery" objectet med */
        }
        return <DevAuthorHero key={index} author={authors}></DevAuthorHero>;
      })}
    </main>
  );
}
