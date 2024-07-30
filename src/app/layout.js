import Topo from "@/components/Topo";
import "./globals.css";

export const metadata = {
  title: "Restaurant",
  description: "Cardápio restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        
        {children}
      </body>
    </html>
  );
}
