import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { client } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)

export default function Home({ products }) {
  console.log('products', products);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">My Shop</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>

          <div className={styles.grid}>

          <div className={styles.grid}>
            {products.map((product) => {
              const {defaultProductVariant = {}} = product
              const {images} = defaultProductVariant
              return (
                <a key={product._id} href="#" className={styles.card}>
                  <img src={builder.image(images[0]).width(300)} />
                  <h3>{product.title}</h3>
                  <p>{product.blurb.en}</p>
                </a>
              )
            })}
          </div>

          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const products = await client.fetch(`*[_type == "product"]`);
  return {
    props: {
      products
    }
  }
}