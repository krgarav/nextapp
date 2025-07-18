export const metaData = () => {
  return {
    title: "Profile",
    description: "User profile page",
  };
};

export default function ProfileLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
