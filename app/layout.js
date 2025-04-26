import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Hackathon Website",
  description: "Simple Hackathon Website with Next.js, Tailwind, and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
        <main className="flex-grow container mx-auto p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

