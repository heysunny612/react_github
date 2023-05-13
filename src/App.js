import styles from './App.module.css';
import ContainerContents from './ContainerContents';
import ContainerHeader from './ContainerHeader';
import Footer from './Footer';

function App() {
  return (
    <>
      <header className={styles.header}>Header</header>
      <main className={styles.container}>
        <ContainerHeader />
        <ContainerContents />
      </main>
      <Footer />
    </>
  );
}

export default App;
