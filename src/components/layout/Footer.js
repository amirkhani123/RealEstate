import { listFoter } from "@/constants/Variables";

function Footer() {
  return (
    <footer className="flex bg-primary p-2 lg:rounded-md lg:mb-1 justify-between">
      <div className="w-[50%]">
        <h3 className=" font-medium text-lg">سامانه خرید و اجاره ملک</h3>
        <p className=" text-sm  text-slate-300 font-extralight">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>
      <div>
        <ul className="list-disc">
          {listFoter.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
