
import { useState } from 'react';
import { motion } from "framer-motion";

const products = [
  {
    title: "Yellow Kurti",
    price: 2500,
    image: "https://via.placeholder.com/200x200.png?text=Yellow+Kurti",
  },
  {
    title: "Blue Kurti",
    price: 3500,
    image: "https://via.placeholder.com/200x200.png?text=Blue+Kurti",
  },
  {
    title: "Green Kurti",
    price: 2000,
    image: "https://via.placeholder.com/200x200.png?text=Green+Kurti",
  },
];

export default function LiveKerala() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-gray-800 font-sans">
      <section className="text-center py-12">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold">LiveKerala</motion.h1>
        <p className="text-lg mt-2 text-gray-500">Kerala’s Premium Live Shopping Platform</p>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl shadow-md p-4 text-center">
              <img src={product.image} alt={product.title} className="h-40 mx-auto object-cover rounded-xl" />
              <h3 className="font-semibold mt-3">{product.title}</h3>
              <p className="text-pink-600 font-medium">₹{product.price}</p>
              <a
                href={`https://wa.me/917907367730?text=I want to buy ${product.title} for ₹${product.price}`}
                target="_blank"
                className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-xl"
              >
                Order on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold">We’re Live on Instagram</h2>
        <div className="mt-4 max-w-3xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/basil_h7h/embed"
              frameBorder="0"
              allowFullScreen
              title="Instagram Live"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
