import Image from "next/image";

function Banner() {
  return (
    <div className=" text-primary flex  bg-[#C1E6FB]  p-2 rounded-xl max-md:flex-col  max-md:items-center">
      <div>
        <h1 className="my-4 mt-16 text-lg font-medium w-fit border-b-[3px]  p-px border-b-primary">
          املاکی به وسعت ایران
        </h1>
        <h3 className="font-normal">خرید و فروش ملک را راحت تر کردیم !</h3>
        <span className="font-normal mt-2">
          تیم املاک ایران سعی دارد یک فضایی ایجاد کند تا خرید و فروش ملک را راحت
          تر کند این شرکت از سال 1403 شروع به فعالت کرده است
        </span>
      </div>
      <Image src="/images/home.png" width={410} height={750} alt="bannerpng" />
    </div>
  );
}

export default Banner;
