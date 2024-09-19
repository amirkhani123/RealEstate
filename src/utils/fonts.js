import localFont from "next/font/local";
const vazirmatn = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Bold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});
export default vazirmatn;
