import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CardSkeleton = () => {
  return (
    <Card className="h-full max-w-[289px] xl:max-w-[360px] m-auto xl:max-h-[555px] w-full bg-foreground border-0 text-white">
      <CardHeader>
        <Skeleton className="rounded-lg w-full max-w-[290px] aspect-square" />
      </CardHeader>
      <CardContent className="w-[251px] lg:w-[289px]">
        <CardTitle>
          <Skeleton className="h-10" />
        </CardTitle>
        <CardDescription>
          <Skeleton />
        </CardDescription>
      </CardContent>
      <CardFooter className="grid">
        <div className="text-xl font-bold flex items-center gap-2 mb-4">
          <Skeleton className="w-10 h-9" />
          <Skeleton className="w-30 h-9" />
        </div>
        <Skeleton className="h-15" />
      </CardFooter>
    </Card>
  );
};

export default CardSkeleton;
