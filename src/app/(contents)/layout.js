import { Footer, Navbar, Provider, WelcomeContainer } from "@/components";
import "../globals.css";

export const metadata = {
  title: "Info stream",
  description: "Info stream: Your gateway to knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="bg-white   flex flex-col items-center justify-center   max-w-7xl mx-auto gap-[200px] md:gap-[100px] mq320:gap-[50px] md:px-[20px] mq320:px-5  ">
            <Navbar />
            <WelcomeContainer />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
