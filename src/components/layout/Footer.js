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
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
