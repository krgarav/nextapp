import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "Auth Pages",
  description: "Authentication pages",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>

        </header>
        {children}<footer></footer></body>
    </html>
  );
}
