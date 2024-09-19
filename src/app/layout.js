import vazirmatn from "@/utils/fonts";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import NextProviders from "@/providers/NextProviders";

export const metadata = {
  title: "املاک ایران",
  description: "سامانه خرید و اجاره ملک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} dark:bg-gray-950`}>
        <NextProviders>
          <Layout>{children}</Layout>
        </NextProviders>
      </body>
    </html>
  );
}
