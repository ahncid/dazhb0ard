import BoilerBox from "@/components/boilerplate/boilerbox";
import styles from "./page.module.css";
import { fetchAuthors } from "@/lib/data.service";
import DevAssignmentsNavBtn from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavBtn/devAssignmentsNavBtn";

export default async function Page() {
  const authors = await fetchAuthors();
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {" "}
        <DevAssignmentsNavBtn
          link={"/lena-jespersen"}
          title={"Lena Jespersen"}
        />
        <DevAssignmentsNavBtn link={"/lena-riis"} title={"Lena Riis"} />
        <DevAssignmentsNavBtn
          link={"/mikkel-schwitzer"}
          title={"Mikkel Schwitzer"}
        />
        <DevAssignmentsNavBtn link={"/pia-stoerup"} title={"Pia Stoerup"} />
        <DevAssignmentsNavBtn link={"/tina-rosing"} title={"Tina Rosing"} />
      </div>
      <BoilerBox authors={authors} />
    </main>
  );
}
