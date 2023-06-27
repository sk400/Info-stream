export const metadata = {
  title: "Studio",
  description: "Sanity studio for managing data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
