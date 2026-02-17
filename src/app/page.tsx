// // import Link from "next/link";

// // export default function HomePage() {
// //   return (
// //     <div>

// //       <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-28">
// //         <div className="max-w-5xl mx-auto text-center px-4">
// //           <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
// //             Discover Amazing Products
// //           </h1>
// //           <p className="text-lg opacity-90 mb-8">
// //             Best deals, best brands, best prices.
// //           </p>
// //           <Link
// //             href="/products"
// //             className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition transform duration-300"
// //           >
// //             Shop Now
// //           </Link>
// //         </div>
// //       </section>


// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          
// //           <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
// //             <h3 className="font-semibold text-xl mb-3">🚚 Free Shipping</h3>
// //             <p className="text-gray-500">On all orders over $50</p>
// //           </div>

// //           <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
// //             <h3 className="font-semibold text-xl mb-3">🔒 Secure Payment</h3>
// //             <p className="text-gray-500">100% secure payment</p>
// //           </div>

// //           <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
// //             <h3 className="font-semibold text-xl mb-3">💬 24/7 Support</h3>
// //             <p className="text-gray-500">Dedicated support team</p>
// //           </div>

// //         </div>
// //       </section>
// //     </div>
// //   );
// // }





// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">

//       {/* Hero Section */}
//       <section className="bg-gray-800  text-white py-32">
//         <div className="max-w-5xl mx-auto text-center px-4">
//           <h1 className="text-6xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
//             Shop the Latest & Greatest
//           </h1>
//           <p className="text-xl md:text-lg opacity-90 mb-10">
//             Best Deals • Top Brands • Unbeatable Prices
//           </p>
//           <Link
//             href="/products"
//             className="inline-block bg-white text-gray-800 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
//           >
//             Shop Now
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

//           <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
//             <h3 className="font-semibold text-2xl mb-4">🚚 Free Shipping</h3>
//             <p className="text-gray-500">On all orders over $50</p>
//           </div>

//           <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
//             <h3 className="font-semibold text-2xl mb-4">🔒 Secure Payment</h3>
//             <p className="text-gray-500">100% secure payment</p>
//           </div>

//           <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
//             <h3 className="font-semibold text-2xl mb-4">💬 24/7 Support</h3>
//             <p className="text-gray-500">Dedicated support team</p>
//           </div>

//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-200 mt-auto">
//         <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-8">

//           {/* About */}
//           <div>
//             <h4 className="text-xl font-bold mb-4">ShopMart</h4>
//             <p className="text-gray-400 text-sm">
//               Your one-stop destination for the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.
//             </p>
//             <p className="text-gray-400 text-sm mt-4">
//               123 Shop Street, Octoper City, DC 12345 <br/>
//               (+20) 01093333333 <br/>
//               support@shopmart.com
//             </p>
//           </div>

//           {/* Shop */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">SHOP</h4>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li>Electronics</li>
//               <li>Fashion</li>
//               <li>Home & Garden</li>
//               <li>Sports</li>
//               <li>Deals</li>
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">CUSTOMER SERVICE</h4>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li>Contact Us</li>
//               <li>Help Center</li>
//               <li>Track Your Order</li>
//               <li>Returns & Exchanges</li>
//               <li>Size Guide</li>
//             </ul>
//           </div>

//           {/* About/Policies */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">ABOUT & POLICIES</h4>
//             <ul className="space-y-2 text-gray-400 text-sm">
//               <li>About ShopMart</li>
//               <li>Careers</li>
//               <li>Press</li>
//               <li>Investor Relations</li>
//               <li>Sustainability</li>
//               <li>Privacy Policy</li>
//               <li>Terms of Service</li>
//               <li>Cookie Policy</li>
//               <li>Shipping Policy</li>
//               <li>Refund Policy</li>
//             </ul>
//           </div>

//         </div>
//         <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
//           &copy; {new Date().getFullYear()} ShopMart. All rights reserved.
//         </div>
//       </footer>

//     </div>
//   );
// }















import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">

      {/* Hero Section - Gradient رمادي */}
      <section className="py-28 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Shop the Latest & Greatest
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-sm">
            Best Deals • Top Brands • Unbeatable Prices
          </p>

          <Link
            href="/products"
            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-500 hover:text-white transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">

          <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="font-semibold text-2xl mb-4 text-gray-900">🚚 Free Shipping</h3>
            <p className="text-gray-500">On all orders over $50</p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="font-semibold text-2xl mb-4 text-gray-900">🔒 Secure Payment</h3>
            <p className="text-gray-500">100% secure payment</p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="font-semibold text-2xl mb-4 text-gray-900">💬 24/7 Support</h3>
            <p className="text-gray-500">Dedicated support team</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

          {/* About */}
          <div>
            <h4 className="text-2xl font-bold mb-4">ShopMart</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop destination for the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.
            </p>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              123 Shop Street, Octoper City, DC 12345 <br/>
              (+20) 01093333333 <br/>
              support@shopmart.com
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4">SHOP</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-yellow-500 cursor-pointer">Electronics</li>
              <li className="hover:text-yellow-500 cursor-pointer">Fashion</li>
              <li className="hover:text-yellow-500 cursor-pointer">Home & Garden</li>
              <li className="hover:text-yellow-500 cursor-pointer">Sports</li>
              <li className="hover:text-yellow-500 cursor-pointer">Deals</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CUSTOMER SERVICE</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-yellow-500 cursor-pointer">Contact Us</li>
              <li className="hover:text-yellow-500 cursor-pointer">Help Center</li>
              <li className="hover:text-yellow-500 cursor-pointer">Track Your Order</li>
              <li className="hover:text-yellow-500 cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-yellow-500 cursor-pointer">Size Guide</li>
            </ul>
          </div>

          {/* About/Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ABOUT & POLICIES</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-yellow-500 cursor-pointer">About ShopMart</li>
              <li className="hover:text-yellow-500 cursor-pointer">Careers</li>
              <li className="hover:text-yellow-500 cursor-pointer">Press</li>
              <li className="hover:text-yellow-500 cursor-pointer">Investor Relations</li>
              <li className="hover:text-yellow-500 cursor-pointer">Sustainability</li>
              <li className="hover:text-yellow-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-yellow-500 cursor-pointer">Terms of Service</li>
              <li className="hover:text-yellow-500 cursor-pointer">Cookie Policy</li>
              <li className="hover:text-yellow-500 cursor-pointer">Shipping Policy</li>
              <li className="hover:text-yellow-500 cursor-pointer">Refund Policy</li>
            </ul>
          </div>

        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ShopMart. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
