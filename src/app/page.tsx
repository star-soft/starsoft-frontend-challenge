import ProductList from "@/components/ProductList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT SHOP</title>
      </Head>
      <div>
        <ProductList />
      </div>
    </>
  );
}
