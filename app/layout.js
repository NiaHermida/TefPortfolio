import "./globals.scss";

export const metadata = {
  title: "Portfolio",
};

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;