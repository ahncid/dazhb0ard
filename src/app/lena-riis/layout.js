import DevAssignmentsNavigation from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavigation";
import styles from "./layout.module.css";
import DevAssignmentsNavBtn from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavBtn/devAssignmentsNavBtn";

export default function AssignmentsLayout({ children }) {
  return (
    <section className={styles.layout}>
      <div className={styles.navigation}>
        <div className={styles.navContainer}>
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
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
