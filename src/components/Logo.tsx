import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/">
        <Image
          priority
          src={"/logo-starsoft.svg"}
          alt={"Logo"}
          width={101}
          height={38}
        />
      </Link>
    </div>
  );
};

export default Logo;
