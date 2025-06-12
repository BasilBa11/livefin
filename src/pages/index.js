export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white text-gray-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-pink-600">Welcome to LiveKerala</h1>
      <p className="text-lg mb-6 text-center">Experience premium live shopping. Stay tuned for our exclusive product drops and flash deals.</p>
      <a href="https://wa.me/7907367730" className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition-all">Chat on WhatsApp</a>
    </div>
  );
}