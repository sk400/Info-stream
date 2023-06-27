import { Provider } from "@/components";
import "../../globals.css";

export const metadata = {
  title: "Profile",
  description: "profile page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
