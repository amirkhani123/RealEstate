import { categorys } from "@/constants/Variables";
import Image from "next/image";
import Link from "next/link";

function Cards() {
  return (
    <div className="flex flex-wrap items-start justify-between mt-2">
      {categorys.map((i, index) => (
        <Link
          key={index}
          className="home-card"
          href={`/buy-residentials?category=${Object.keys(i)} `}
        >
          <Image
            src={`/images/${Object.keys(i)}.png`}
            width={550}
            height={200}
            alt="image.png"
            className="h-[160px]"
          />
          <p>{Object.values(i)}</p>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
