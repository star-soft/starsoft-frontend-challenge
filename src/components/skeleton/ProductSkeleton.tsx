import { Skeleton } from "../ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-4">
      <Skeleton className="w-full max-w-[500] h-[500] bg-gray-300 animate-pulse rounded-lg" />
      <div className="text-white grid gap-4 max-w-lg">
        <Skeleton className="w-80 h-[40px] bg-gray-300 animate-pulse rounded" />
        <Skeleton className="w-100 h-[112px] bg-gray-300 animate-pulse rounded" />
        <Skeleton className="w-32 h-[32] bg-gray-300 animate-pulse rounded" />
        <Skeleton className="w-full max-w-[602px] h-[36px] bg-gray-300 animate-pulse rounded" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
