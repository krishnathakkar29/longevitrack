import Navbar from "../sections/navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      {/* Transparent Navbar - now positioned fixed */}
      <Navbar />

      {/* Main Content - no padding needed since navbar is transparent */}
      <main className="relative w-screen overflow-hidden">{children}</main>
    </div>

    // Optional: Global background gradient overlay
    // <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none z-0" />
  );
}

export default Layout;
