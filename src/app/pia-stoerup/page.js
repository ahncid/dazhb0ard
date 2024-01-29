import styles from "./page.module.css";
import DevAuthorHero from "@/components/dev/devAuthorHero/devAuthorHero";
import { fetchAuthorByNicUrl } from "@/lib/data.service";

export default async function Page() {
  const niceUrl = "pia-stoerup";

  const author = await fetchAuthorByNicUrl(niceUrl);

  return (
    <main className={styles.page}>
      <h1>Portfolio Galleri</h1>

      {author && <DevAuthorHero author={author}></DevAuthorHero>}
    </main>
  );
}
