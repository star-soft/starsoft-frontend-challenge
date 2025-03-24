import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { productRepo } from "@/repositories/productRepo";
import { Product } from "@/types/Product";
import Image from "next/image";

interface ProductPageProps {
  product: Product | null;
}

const ProductPage = ({ product }: ProductPageProps) => {
  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <PageTransition>
      <div className="flex items-center gap-8">
        <Image
          priority
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="text-white grid gap-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <Button className="bg-primary mt-4 w-full">Comprar</Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default async function ProductPageWrapper({
  params,
}: {
  params: { id: string };
}) {
  // Aguarda explicitamente o `params` (assíncrono no Next.js 15)
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const product = await fetchProductData(id);

  return <ProductPage product={product} />;
}

// Função para buscar os dados do produto (removida do corpo principal para organização)
const fetchProductData = async (id: string): Promise<Product | null> => {
  try {
    const { products } = await productRepo.getProducts(1, 50);
    return products.find((product) => product.id.toString() === id) || null;
  } catch (error) {
    console.error("Erro ao buscar dados do produto:", error);
    return null;
  }
};
