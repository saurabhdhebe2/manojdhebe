import {
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [popularServices, setPopularServices] = useState(false);
  const [firm, setFirm] = useState(false);
  const [gst, setGst] = useState(false);
  const [license, setLicense] = useState(false);
  const [support, setSupport] = useState(false);

  return (
    <div className="flex justify-between px-3 lg:flex lg:justify-around lg:px-12 py-4  bg-gray-100 font-poppins text-black ">
      {/* logo */}

      <span className="text-2xl font-semibold">
        Manoj<span className="text-[#51c198]">Dhebe</span>
      </span>
      <div className="hidden lg:flex gap-4 items-center">
        {/* popular services */}

        <div className="relative">
          <button className="peer list-none hover:text-gray-800 flex gap-2">
            Popular Services
            <span>
              <ChevronDownIcon className="h-5 pt-1 text-black" />
            </span>
          </button>

          <div className="absolute hidden peer-hover:flex hover:flex w-[200px] flex-col bg-transparent text-white">
            <div className="bg-transparent mt-4"></div>
            <a
              className="px-5 py-3 bg-gray-700 hover:bg-gray-900 text-xs"
              href="#"
            >
              Income Tax Filling
            </a>
            <a
              className="px-5 py-3 bg-gray-700 hover:bg-gray-900  text-xs"
              href="#"
            >
              GST Registration
            </a>
            <a
              className="px-5 py-3 bg-gray-700 hover:bg-gray-900  text-xs"
              href="#"
            >
              MSME Registration
            </a>
            <a
              className="px-5 py-3 bg-gray-700 hover:bg-gray-900  text-xs"
              href="#"
            >
              Firm Registration
            </a>
          </div>
        </div>

        {/* Book Consultency */}
        <li className="list-none bg-blue-500 rounded-lg text-white px-4 py-2 active:bg-red-500">
          Book Consultancy
        </li>

        {/* Business Registration */}
        <div className="relative">
          <button className="peer list-none hover:text-gray-800 flex gap-2">
            Firm Registration
            <span>
              <ChevronDownIcon className="h-5 pt-1 text-black" />
            </span>
          </button>

          <div className="absolute hidden peer-hover:flex hover:flex w-[220px] flex-col bg-transparent text-lg">
            <div className="bg-transparent mt-4"></div>

            <a
              className="px-5 py-3 text-white bg-gray-700  text-xs hover:bg-gray-900"
              href="#"
            >
              PROPRIETORSHIP REGISTRATION
            </a>
            <a
              className="px-5 py-3 text-white bg-gray-700  text-xs hover:bg-gray-900"
              href="#"
            >
              PARTNERSHIP REGISTRATION
            </a>
          </div>
        </div>

        {/* GST Portal */}
        <div className="relative">
          <button className="peer list-none hover:text-gray-800 flex gap-2">
            GST PORTAL
            <span>
              <ChevronDownIcon className="h-5 pt-1 text-black" />
            </span>
          </button>

          <div className="absolute hidden peer-hover:flex hover:flex w-[200px] flex-col bg-transparent text-white">
            <div className="bg-transparent mt-4"></div>
            <a
              className="px-5 py-3 bg-gray-700  text-xs hover:bg-gray-900"
              href="#"
            >
              GST Registration
            </a>
            <a
              className="px-5 py-3 bg-gray-700 text-xs hover:bg-gray-900"
              href="#"
            >
              GST Return Filing
            </a>
          </div>
        </div>

        {/* Business License */}
        <div className="relative">
          <button className="peer list-none hover:text-gray-800 flex gap-2">
            BUSINESS LICENSE
            <span>
              <ChevronDownIcon className="h-5 pt-1 text-black" />
            </span>
          </button>

          <div className="absolute hidden peer-hover:flex hover:flex w-[200px] flex-col bg-transparent text-white">
            <div className="bg-transparent mt-4"></div>
            <a
              className="px-5 py-3 bg-gray-700  text-xs hover:bg-gray-900"
              href="#"
            >
              MSME Registration
            </a>
            <a
              className="px-5 py-3 bg-gray-700 text-xs hover:bg-gray-900"
              href="#"
            >
              Gumasta License
            </a>
          </div>
        </div>

        {/* Support */}
        <div className="relative">
          <button className="peer list-none hover:text-gray-800 flex gap-2">
            Support
            <span>
              <ChevronDownIcon className="h-5 pt-1 text-black" />
            </span>
          </button>

          <div className="absolute right-2 hidden peer-hover:flex hover:flex w-[200px] flex-col bg-transparent text-white">
            <div className="bg-transparent mt-4"></div>
            <a
              className="px-5 py-3 bg-gray-700  text-xs hover:bg-gray-900"
              href="#"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* ----------------------- Mobile version ---------------------- */}
      <div className="lg:hidden">
        {menu === false && (
          <Bars3Icon onClick={() => setMenu(true)} className="h-8" />
        )}
        {menu && (
          <XMarkIcon onClick={() => setMenu(false)} className="h-8 ml-auto" />
        )}

        {menu && (
          <div className="flex flex-col gap-2 mt-4">
            {/* Popular Services */}

            {popularServices === false && (
              <button
                onClick={() => setPopularServices(true)}
                className="flex gap-2 bg-gray-200 px-4 py-2"
              >
                Popular Services
                <span>
                  <ChevronDownIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}
            {popularServices && (
              <button
                onClick={() => setPopularServices(false)}
                className="flex gap-2 bg-gray-200 px-4 py-2"
              >
                Popular Services
                <span>
                  <ChevronUpIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}

            {popularServices && (
              <>
                <li className="text-xs py-2">Income Tax Filling</li>
                <li className="text-xs py-2"> GST Registration </li>
                <li className="text-xs py-2">MSME Registration </li>
                <li className="text-xs py-2">Firm Registration</li>
              </>
            )}

            {/* Book Consultancy */}
            <button className="flex gap-2 my-2 bg-blue-500 rounded-lg text-white px-4 py-2 active:bg-red-500">
              Book Consultancy
            </button>

            {/* Firm Registration */}
            {firm === false && (
              <button
                onClick={() => setFirm(true)}
                className="flex gap-2 bg-gray-200 px-4 py-2 "
              >
                FIRM REGISTRATION
                <span>
                  <ChevronDownIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}
            {firm && (
              <button
                onClick={() => setFirm(false)}
                className="flex gap-2 bg-gray-200 px-4 py-2 "
              >
                FIRM REGISTRATION
                <span>
                  <ChevronUpIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}

            {firm && (
              <>
                <li className="text-xs py-2">PROPRIETORSHIP REGISTRATION </li>
                <li className="text-xs py-2">PARTNERSHIP REGISTRATION </li>
              </>
            )}

            {/* GST PORTAL */}
            {gst === false && (
              <button
                onClick={() => setGst(true)}
                className="flex gap-2 bg-gray-200 px-4 py-2 "
              >
                GST PORTAL
                <span>
                  <ChevronDownIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}
            {gst && (
              <button
                onClick={() => setGst(false)}
                className="flex gap-2 bg-gray-200 px-4 py-2 "
              >
                GST PORTAL
                <span>
                  <ChevronUpIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}

            {gst && (
              <>
                <li className="text-xs py-2">GST REGISTRATION </li>
                <li className="text-xs py-2">GST Return Filing</li>
              </>
            )}

            {/* BUSINESS LICENSE */}
            {license === false && (
              <button
                onClick={() => setLicense(true)}
                className="flex gap-2 bg-gray-200 px-4 py-2 "
              >
                BUSINESS LICENSE
                <span>
                  <ChevronDownIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}
            {license && (
              <button
                onClick={() => setLicense(false)}
                className="flex gap-2 bg-gray-200 px-4 py-2 "
              >
                BUSINESS LICENSE
                <span>
                  <ChevronUpIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}

            {license && (
              <>
                <li className="text-xs py-2">MSME Registration </li>
                <li className="text-xs py-2">Gumasta License</li>
              </>
            )}

            {/* Support */}
            {support === false && (
              <button
                onClick={() => setSupport(true)}
                className="flex gap-2 bg-gray-200 px-4 py-2 "
              >
                Support
                <span>
                  <ChevronDownIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}
            {support && (
              <button
                onClick={() => setSupport(false)}
                className="flex gap-2 bg-gray-200 px-4 py-2 "
              >
                Support
                <span>
                  <ChevronUpIcon className="h-5 pt-1 text-black" />
                </span>
              </button>
            )}

            {support && (
              <>
                <li className="text-xs py-2">Contact Us </li>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
