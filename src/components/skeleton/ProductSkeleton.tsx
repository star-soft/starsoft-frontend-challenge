import { Skeleton } from "../ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-8 p-4">
      <Skeleton className="rounded-lg w-full max-w-[500px] aspect-square" />
      <div className="text-white grid gap-4 w-full max-w-[512px]">
        <Skeleton className="w-full max-w-[200px] h-[60px] bg-gray-300 animate-pulse rounded" />
        <Skeleton className="w-full max-w-[512px] h-[112px] bg-gray-300 animate-pulse rounded" />
        <Skeleton className="w-32 h-[32] bg-gray-300 animate-pulse rounded" />
        <Skeleton className="w-full max-w-[512px] h-[36px] bg-gray-300 animate-pulse rounded" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
