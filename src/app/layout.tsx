
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shankar Raju's Portfolio",
  description: "My portfolio illustrates how engineering PULSES like a HEARTBEAT within me.",
  // Add OG meta tags here (optional)
  openGraph: {
    title: "Shankar Raju's Portfolio",
    description: "My portfolio illustrates how engineering PULSES like a HEARTBEAT within me.",
    type: "website",
    siteName:"Pulse Portfolio",
    images:[{
      url:"https://ogp.dsabyte.com/api/image.png?layoutName=Blog&Title=Welcome+to+my+portfolio&Author+Name=Shankar+Raju&Author+Avtar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F59025857%3Fv%3D4&Icon+URL=https%3A%2F%2Fdsabyte.com%2Flogo.png&Tags=Data+Scientist%2C+Machine+Learning+Engineer%2C+AI+Engineer&Theme=dark&ext=.png"
  }]
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
