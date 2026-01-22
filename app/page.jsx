import React from "react";
import Navbar from "./components/navbar.jsx";
import Cart from "./components/Cart.jsx";
import Link from "next/link.js";
import { User } from "lucide-react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Cart />
    </div>
  );
}
