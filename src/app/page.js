// import styles from "./page.module.css";

import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <div className="grid h-screen place-content-center bg-black">
      {/* <div className={styles.mysection}>
        <h1>Title</h1>
        <p>Just trying to see if page module will work as planned</p>
        <p>Just trying to see if page module will work as planned</p>
        <p>Just trying to see if page module will work as planned</p>
      </div> */}

        <Accordion/>
    </div>
  );
}
