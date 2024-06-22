
import '../app/bootstrap/dist/css/bootstrap.min.css'
import { Header } from "./components/Header";
import { Content} from "./components/Content";
import { Logo} from "./components/Logo";
import styles from "./page.module.css";
import { Customer} from "./components/Customer";
import { Flex } from "./components/Flex";
import { Innovate } from "./components/Innovate";


export default function Home() {
  return (
    <main className={styles.main}>

      <Header />
      <Content />
      <Logo />
      <Customer />
      <Flex />
      <Innovate />      

    </main>

  );
}
