export default function DapoerDjawa() {
  return (
    <section className="bg-gray-50 text-gray-800 work-sans leading-normal text-base tracking-normal">
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Work+Sans:200,400,600&display=swap');

        html {
            scroll-behavior: smooth;
        }

        .work-sans {
            font-family: 'Work Sans', sans-serif;
        }
        
        #menu-toggle:checked + #menu {
            display: block;
        }
        
        .carousel-open:checked + .carousel-item {
            position: static;
            opacity: 100;
            transition: opacity 0.6s ease-out;
        }
        
        .carousel-item {
            -webkit-transition: opacity 0.6s ease-out;
            transition: opacity 0.6s ease-out;
        }
        
        #carousel-1:checked ~ .control-1,
        #carousel-2:checked ~ .control-2,
        #carousel-3:checked ~ .control-3 {
            display: flex;
        }
        
        .carousel-indicators {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            bottom: 2%;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 10;
        }
        
        #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
        #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
        #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
            color: #1f2937; 
        }
      `}</style>

      <nav
        id="header"
        className="fixed w-full z-50 top-0 py-3 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300"
      >
        <div className="relative w-full container mx-auto flex flex-wrap items-center justify-between px-6">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block hover:text-black z-20"
          >
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="hidden md:flex flex-1 items-center">
            <nav>
              <ul className="flex items-center gap-6 text-base text-gray-700">
                <li>
                  <a
                    className="font-semibold hover:text-black transition duration-200"
                    href="#shop"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold hover:text-black transition duration-200"
                    href="#about"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex-1 flex justify-center">
            <a href="#" className="flex items-center">
              <img src="logo.png" alt="Logo" className="h-12 w-auto mr-3" />
              <span className="font-bold text-2xl text-gray-900">
                DapoerDjawa
              </span>
            </a>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            <a
              className="inline-block no-underline hover:text-black transition duration-200"
              href="#"
            >
              <svg
                className="fill-current text-gray-600 hover:text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle fill="none" cx="12" cy="7" r="3" />
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
              </svg>
            </a>
            <a
              className="inline-block no-underline hover:text-black transition duration-200"
              href="#"
            >
              <div className="relative">
                <svg
                  className="fill-current text-gray-600 hover:text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7zM17.341,14h-6.697L8.371,9h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </nav>

      <div
        className="carousel relative container mx-auto mt-24 px-4 sm:px-0"
        style={{ maxWidth: "1600px" }}
      >
        <div className="carousel-inner relative overflow-hidden w-full rounded-2xl shadow-md">
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden
            defaultChecked
          />
          <div className="carousel-item absolute top-0 left-0 opacity-0 w-full">
            <img
              src="Banner Idul Fitri.png"
              alt="Banner Idul Fitri"
              className="w-full h-auto block"
            />
          </div>
          <label
            htmlFor="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-6 absolute cursor-pointer hidden items-center justify-center text-2xl font-bold text-gray-800 hover:text-white rounded-full bg-white/80 hover:bg-gray-900 transition duration-300 z-10 inset-y-0 left-0 my-auto shadow-md"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-6 absolute cursor-pointer hidden items-center justify-center text-2xl font-bold text-gray-800 hover:text-white rounded-full bg-white/80 hover:bg-gray-900 transition duration-300 z-10 inset-y-0 right-0 my-auto shadow-md"
          >
            ›
          </label>

          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item absolute top-0 left-0 opacity-0 w-full">
            <img
              src="Banner Nataru.png"
              alt="Banner Nataru"
              className="w-full h-auto block"
            />
          </div>
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-6 absolute cursor-pointer hidden items-center justify-center text-2xl font-bold text-gray-800 hover:text-white rounded-full bg-white/80 hover:bg-gray-900 transition duration-300 z-10 inset-y-0 left-0 my-auto shadow-md"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-6 absolute cursor-pointer hidden items-center justify-center text-2xl font-bold text-gray-800 hover:text-white rounded-full bg-white/80 hover:bg-gray-900 transition duration-300 z-10 inset-y-0 right-0 my-auto shadow-md"
          >
            ›
          </label>

          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item absolute top-0 left-0 opacity-0 w-full">
            <img
              src="Banner Imlek.png"
              alt="Banner Imlek"
              className="w-full h-auto block"
            />
          </div>
          <label
            htmlFor="carousel-2"
            className="prev control-3 w-10 h-10 ml-2 md:ml-6 absolute cursor-pointer hidden items-center justify-center text-2xl font-bold text-gray-800 hover:text-white rounded-full bg-white/80 hover:bg-gray-900 transition duration-300 z-10 inset-y-0 left-0 my-auto shadow-md"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="next control-3 w-10 h-10 mr-2 md:mr-6 absolute cursor-pointer hidden items-center justify-center text-2xl font-bold text-gray-800 hover:text-white rounded-full bg-white/80 hover:bg-gray-900 transition duration-300 z-10 inset-y-0 right-0 my-auto shadow-md"
          >
            ›
          </label>

          <ol className="carousel-indicators mb-3">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-3xl text-gray-400 hover:text-gray-800 drop-shadow-sm transition duration-200"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-3xl text-gray-400 hover:text-gray-800 drop-shadow-sm transition duration-200"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-3xl text-gray-400 hover:text-gray-800 drop-shadow-sm transition duration-200"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>

      <section id="shop" className="bg-gray-50 pt-16 pb-12 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between pb-6 border-b border-gray-300 mb-10">
            <h2 className="uppercase tracking-wide font-bold text-gray-900 text-2xl">
              Our Products
            </h2>
            <div className="flex items-center gap-4">
              <button className="hover:bg-gray-200 p-2 rounded-full transition duration-200">
                <svg
                  className="fill-current text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
              </button>
              <button className="hover:bg-gray-200 p-2 rounded-full transition duration-200">
                <svg
                  className="fill-current text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a href="#" className="block overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="Nastar Classic.png"
                  alt="Nastar Classic"
                />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition"
                  >
                    Nastar Classic
                  </a>
                </div>
                <p className="text-xl font-bold text-gray-900 mt-auto">
                  Rp92.000
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a href="#" className="block overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="Choco Chip Cookies.png"
                  alt="Choco Chip Cookies"
                />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition"
                  >
                    Choco Chip Cookies
                  </a>
                </div>
                <p className="text-xl font-bold text-gray-900 mt-auto">
                  Rp68.000
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a href="#" className="block overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="Putri Salju.png"
                  alt="Putri Salju"
                />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition"
                  >
                    Putri Salju
                  </a>
                </div>
                <p className="text-xl font-bold text-gray-900 mt-auto">
                  Rp86.000
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a href="#" className="block overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="Lidah Kucing.png"
                  alt="Lidah Kucing"
                />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition"
                  >
                    Lidah Kucing
                  </a>
                </div>
                <p className="text-xl font-bold text-gray-900 mt-auto">
                  Rp88.000
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a href="#" className="block overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="Bola Bola Rambutan Coklat.png"
                  alt="Bola Bola Rambutan Coklat"
                />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition"
                  >
                    Bola Bola Rambutan Coklat
                  </a>
                </div>
                <p className="text-xl font-bold text-gray-900 mt-auto">
                  Rp85.000
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a href="#" className="block overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="Nastar Daun.png"
                  alt="Nastar Daun"
                />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition"
                  >
                    Nastar Daun
                  </a>
                </div>
                <p className="text-xl font-bold text-gray-900 mt-auto">
                  Rp97.000
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a href="#" className="block overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="Cookies Vanila & Coklat.png"
                  alt="Cookies Vanila & Coklat"
                />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition"
                  >
                    Vanila Choco Cookies
                  </a>
                </div>
                <p className="text-xl font-bold text-gray-900 mt-auto">
                  Rp72.000
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <a href="#" className="block overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="Kue Kacang.png"
                  alt="Kue Kacang"
                />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href="#"
                    className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition"
                  >
                    Cookies Kacang
                  </a>
                </div>
                <p className="text-xl font-bold text-gray-900 mt-auto">
                  Rp80.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-white py-16 border-t border-gray-200 scroll-mt-20"
      >
        <div className="container mx-auto px-6 max-w-4xl text-center md:text-left">
          <h2 className="uppercase tracking-wide font-bold text-gray-900 text-2xl mb-6">
            About Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
            Dapoer Djawa adalah UMKM rumahan yang bermula di Perum BDS 2,
            Balikpapan, pada awal 2020. Saat pandemi membatasi aktivitas,
            langkah kecil ini dimulai dari dapur rumah kami untuk menyajikan kue
            kering bagi keluarga. Tanpa pabrik atau mesin canggih, operasional
            kami jalankan dengan ketekunan dalam menimbang, menguleni, dan
            memanggang adonan secara manual setiap hari. Walau berskala kecil,
            kejujuran rasa dan kualitas bahan selalu menjadi prioritas utama.
            Baik itu Nastar, Putri Salju, atau varian cookies lainnya, semua
            diracik layaknya sajian untuk keluarga di ruang tamu.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
            Kini, pesanan yang berawal dari tetangga sekitar telah meluas
            menjangkau lebih banyak pelanggan secara online. Pertumbuhan ini
            mendorong kami untuk terus bertransformasi menjadi lebih profesional
            dalam melayani Anda, tanpa pernah meninggalkan kehangatan resep asli
            rumahan kami. Terima kasih telah mendukung perjalanan dan karya
            Dapoer Djawa.
          </p>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 py-10 scroll-mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; 2026 DapoerDjawa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/_dapoer_djawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="instagram.png"
                alt="Instagram"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://tiktok.com/@dapeordjawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="tiktok.png"
                alt="tiktok"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://wa.me/62895383270632"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="wa.png"
                alt="wa"
                className="w-8 h-8 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
