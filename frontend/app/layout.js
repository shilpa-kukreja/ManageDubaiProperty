// import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

// const jakarta = Plus_Jakarta_Sans({
//   variable: "--font-jakarta",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   display: "swap",
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });
import FloatingContact from "./components/FloatingContact";


export const metadata = {
  title: "DubaiHomes — Premium Property Management in Dubai",
  description:
    "End-to-end property management in Dubai. Tenant screening, rent collection, maintenance, and legal compliance — handled by RERA-licensed experts.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <main className="flex-1">{children}</main>
                <FloatingContact /> 
      </body>
    </html>
  );
}