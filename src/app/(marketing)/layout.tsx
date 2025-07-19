import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "Marketing Layout",
  description: "Marketing section which involve profile",
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
