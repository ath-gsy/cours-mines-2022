import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cours Mines Nancy 2022</title>
        <meta name="description" content="Exercices de cours" />
      </Head>

      <main className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h1>Cours HTML, CSS, Bootstrap</h1>

            <h2>Cours</h2>

            <ul>
              <li>
                <Link href="cours/titres">Titres</Link>
              </li>
              <li>
                <Link href="cours/paragraphes">Paragraphes</Link>
              </li>
              <li>
                <Link href="cours/blog">Blog</Link>
              </li>
              <li>
                <Link href="cours/liste">Listes</Link>
              </li>
              <li>
                <Link href="cours/tableau">Tableaux</Link>
              </li>
              <li>
                <Link href="cours/form">Formulaires</Link>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bootstrap
                </a>
              </li>
            </ul>

            <h2>Exercices</h2>

            <ul>
              <li>
                <Link href="exercices/exercice1">Exercice 1</Link>
              </li>
              <li>
                <Link href="exercices/exercice2">Exercice 2</Link>
              </li>
              <li>
                <Link href="exercices/exercice3">Exercice 3</Link>
              </li>
              <li>
                <Link href="exercices/exercice4">Exercice 4</Link>
              </li>
              <li>
                <Link href="exercices/twitter">Twitter</Link>
              </li>
              <li>
                <Link href="exercices/beeper/home">Beeper</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
