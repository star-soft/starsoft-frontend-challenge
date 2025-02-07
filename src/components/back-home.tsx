import Link from "next/link";

import Transition from "@/components/transition-components";
import { MoveLeft } from "lucide-react";

export const BackHome = () => {
  return (
    <div className="mt-6 w-full">
      <Transition>
        <Link href={`/`}>
          <div className="flex justify-center p-4 rounded-lg hover:text-primaryC bg-quaternaryC w-full md:w-2/4 lg:w-1/3">
            <MoveLeft className="mr-2" /> Retornar a página inicial
          </div>
        </Link>
      </Transition>
    </div>
  );
};
