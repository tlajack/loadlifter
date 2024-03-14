import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/Header";

export const metadata = {
  title: "Load Lifter",
  description: "Rough Terrain Forklifts",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="pageContainer">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
