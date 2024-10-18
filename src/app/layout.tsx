import "@/styles/index.scss";
export const metadata = {
  title: "Blog | Webwave Digital Marketing Insights & Web Development Tips",
  description:
    "Stay updated with the latest digital marketing trends, SEO strategies, and web development tips on the Webwave blog. Enhance your online presence with expert insights.",
  metadataBase: new URL("https://www.webwave.co.in/"),
  alternates: {
    canonical: "/blog",
  },
  keywords: [
    "digital marketing blog",
    "SEO tips",
    "web development insights",
    "online marketing strategies",
    "Webwave blog",
    "industry trends",
    "Bangalore",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
