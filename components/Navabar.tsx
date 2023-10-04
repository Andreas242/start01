import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
    </nav>
  );
}

// det finnes ett issue med den her navigeringen
