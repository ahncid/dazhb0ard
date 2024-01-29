import DevAssignmentsNavigation from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavigation";
import styles from "./layout.module.css";
import DevAssignmentsNavBtn from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavBtn/devAssignmentsNavBtn";

export default function AssignmentsLayout({ children }) {
  return (
    <section className={styles.layout}>
      <div className={styles.navigation}>
        <div className={styles.navContainer}>
          <DevAssignmentsNavBtn
            link={"/galleries/umbra/lena-jespersen"}
            title={"Lena Jespersen"}
          />
          <DevAssignmentsNavBtn
            link={"/galleries/obscura/lena-riis"}
            title={"Lena Riis"}
          />
          <DevAssignmentsNavBtn
            link={"/galleries/obscura/mikkel-schwitzer"}
            title={"Mikkel Schwitzer"}
          />
          <DevAssignmentsNavBtn
            link={"/galleries/umbra/pia-stoerup"}
            title={"Pia Stoerup"}
          />
          <DevAssignmentsNavBtn
            link={"/galleries/umbra/tina-rosing"}
            title={"Tina Rosing"}
          />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
