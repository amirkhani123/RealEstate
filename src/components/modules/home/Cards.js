import Image from "next/image";
import Link from "next/link";

function Cards() {
  return (
    <div className="flex flex-wrap items-start justify-between mt-2">
      <Link className="home-card" href="/buy-residentials?category=apartment">
        <Image
          src="/images/apartment.png"
          width={850}
          height={250}
          alt="image.png"
          className="h-[160px]"
        />
        <p>آپارتمان</p>
      </Link>
      <Link className="home-card" href="/buy-residentials?category=villa">
        <Image
          src="/images/villa.png"
          width={850}
          height={250}
          alt="image.png"
          className="h-[160px]"
        />
        <p>ویلا</p>
      </Link>
      <Link className="home-card" href="/buy-residentials?category=store">
        <Image
          src="/images/stor.png"
          width={850}
          height={250}
          alt="image.png"
          className="h-[160px]"
        />
        <p>مغازه</p>
      </Link>
      <Link className="home-card" href="/buy-residentials?category=office">
        <Image
          src="/images/office.png"
          width={850}
          height={250}
          alt="image.png"
          className="h-[165px]"
        />
        <p>اداره</p>
      </Link>
    </div>
  );
}

export default Cards;
