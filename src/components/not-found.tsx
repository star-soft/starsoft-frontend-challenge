import { BackHome } from "@/components/back-home";

export const NotFound = () => {
  return (
    <>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primaryC">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-quinaryC">
              Esse produto não existe
            </p>
            <p className="mb-4 text-lg font-light text-senaryC">
            Desculpe, não conseguimos encontrar essa NFT. Você encontrará muito para explorar na
            página inicial.{" "}
            </p>
          </div>
        </div>
      </section>
      <BackHome />
    </>
  );
};
