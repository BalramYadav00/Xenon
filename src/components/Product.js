import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Product() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth");
  const logoutHandler = () => {
    localStorage.setItem("auth", false);
    navigate("/");
  };
  if (localStorage.getItem("auth") !== "true") {
    return <div>Login please</div>;
  }
  return (
    <div class="bg-white">
      <header class="relative">
        <div class="bg-warm-gray-50">
          <nav
            class="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8"
            aria-label="Global"
          >
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full lg:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img
                    class="h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-green-400.svg"
                    alt="Workflow"
                  />
                </a>
                <div class="-mr-2 flex items-center lg:hidden">
                  <button
                    type="button"
                    class="bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500"
                    aria-expanded="false"
                  >
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="hidden space-x-10 lg:flex lg:ml-10">
                <a
                  href="#"
                  class="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >
                  Home
                </a>

                <Link
                  to={"/contact"}
                  class="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >
                  Contac Us
                </Link>

                <a
                  href="#"
                  class="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >
                  Partners
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >
                  News
                </a>
              </div>
            </div>
            <div class="hidden lg:flex lg:items-center lg:space-x-6">
              <button
                onClick={logoutHandler}
                class="py-2 px-6 bg-warm-gray-100 border border-transparent rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-200"
              >
                {" "}
                {auth ? "Logout" : "Login"}{" "}
              </button>
            </div>
          </nav>
        </div>
        <div class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
          <details
            class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
            close
          ><summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
          Menu
        </summary>
            <div class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&shade=500"
                    alt=""
                  />
                </div>
                {/* <div class="-mr-2">
                  <button
                    type="button"
                    class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                    open
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
              <div class="pt-5 pb-6">
                <div class="px-2 space-y-1">
                  <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                  >
                    Home
                  </a>

                  <Link
                    to={"/contact"}
                    class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                  >
                    contact Us
                  </Link>

                  <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                  >
                    Partners
                  </a>

                  <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                  >
                    News
                  </a>
                </div>
                <div class="mt-6 px-5">
                  <button
                    onClick={logoutHandler}
                    class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-teal-500 text-white font-medium hover:bg-teal-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </details>
        </div>
      </header>
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" class="sr-only">
          Products
        </h2>

        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          <a href="#" class="group">
            <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg"
                alt="Person using a pen to cross a task off a productivity paper card."
                class="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              <h3>Focus Paper Refill</h3>
              <p>$13</p>
            </div>
            <p class="mt-1 text-sm italic text-gray-500">3 sizes available</p>
          </a>

          <a href="#" class="group">
            <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg"
                alt="Paper card sitting upright in walnut card holder on desk."
                class="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              <h3>Focus Card Holder</h3>
              <p>$64</p>
            </div>
            <p class="mt-1 text-sm italic text-gray-500">Walnut</p>
          </a>

          <a href="#" class="group">
            <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
              <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg"
                alt="Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop."
                class="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              <h3>Focus Carry Case</h3>
              <p>$32</p>
            </div>
            <p class="mt-1 text-sm italic text-gray-500">Heather Gray</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
