import { motion } from "framer-motion";

export default function EcoLandingPage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat font-sans text-gray-900"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/symphony.png')",
      }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-md">
        <div>
          <span>📍 New York, NY</span>
        </div>
        <div className="space-x-4">
          <span>📞 +1 (800) 123-4567</span>
          <span>✉️ contact@gainlove.org</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse items-center gap-10 px-4 py-20 md:flex-row md:px-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.transparenttextures.com/patterns/arches.png"
            alt="decorative bg"
            className="h-full w-full object-cover opacity-10"
          />
        </div>
        <div className="z-10 w-full text-center md:w-1/2 md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Justice begins where <br /> inequality ends
          </motion.h1>
          <p className="mb-6 text-gray-600">
            We're building a world where everyone has the power to shape their
            lives.
          </p>
          <button className="rounded-full bg-black px-6 py-3 font-medium text-white">
            Donate Now
          </button>
        </div>
        <div className="z-10 w-full md:w-1/3">
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <img
              src="https://i.pinimg.com/736x/05/bb/75/05bb75fa5d7eaf8dcfcd7ff05e1e9c02.jpg"
              alt="Part 1"
              className="col-span-2 h-32 w-full rounded-xl object-cover"
            />
            <img
              src="https://i.pinimg.com/736x/fa/bd/a7/fabda724bdb3d494680229a71fec3b01.jpg"
              alt="Part 2"
              className="h-32 w-full rounded-xl object-cover"
            />
            <img
              src="https://i.pinimg.com/736x/fa/bd/a7/fabda724bdb3d494680229a71fec3b01.jpg"
              alt="Part 3"
              className="h-32 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="px-6 py-20 text-center md:px-20">
        <h2 className="mb-4 text-3xl font-bold">Our Programs</h2>
        <p className="mb-10 text-gray-600">
          It is through resources that you are able to give and get out of
          everything now. It is not essential to reinvent or go tired.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <img
              src="https://i.pinimg.com/736x/05/bb/75/05bb75fa5d7eaf8dcfcd7ff05e1e9c02.jpg"
              alt="Anti Poverty"
              className="mb-4 h-48 w-full rounded-xl object-cover"
            />
            <h3 className="mb-2 text-xl font-semibold">
              Anti Poverty Programs & Services
            </h3>
            <p className="text-sm text-gray-600">
              Programs and services designed to reduce the effects of and
              eliminate the root causes of poverty.
            </p>
            <button className="mt-4 font-medium text-orange-600">
              Learn More
            </button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <img
              src="https://i.pinimg.com/736x/fa/bd/a7/fabda724bdb3d494680229a71fec3b01.jpg"
              alt="Family Programs"
              className="mb-4 h-48 w-full rounded-xl object-cover"
            />
            <h3 className="mb-2 text-xl font-semibold">
              Family & Community Programs
            </h3>
            <p className="text-sm text-gray-600">
              Programs designed to educate and engage all ages of the community,
              help resolve issues.
            </p>
            <button className="mt-4 font-medium text-orange-600">
              Learn More
            </button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <img
              src="https://i.pinimg.com/736x/fa/bd/a7/fabda724bdb3d494680229a71fec3b01.jpg"
              alt="Teen Programs"
              className="mb-4 h-48 w-full rounded-xl object-cover"
            />
            <h3 className="mb-2 text-xl font-semibold">Teen Programs</h3>
            <p className="text-sm text-gray-600">
              Diverse relatable resources content to break generational barriers
              and build bright futures.
            </p>
            <button className="mt-4 font-medium text-orange-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Fundraiser Section */}
      <section className="grid items-center gap-10 bg-[#fef7ed] px-6 py-20 md:grid-cols-2 md:px-20">
        <div className="grid grid-cols-3 gap-2">
          <img
            src="https://i.pinimg.com/736x/fa/bd/a7/fabda724bdb3d494680229a71fec3b01.jpg"
            alt="Child Fundraiser"
            className="h-28 w-full rounded-full object-cover"
          />
          <img
            src="https://i.pinimg.com/736x/05/bb/75/05bb75fa5d7eaf8dcfcd7ff05e1e9c02.jpg"
            alt="Child Fundraiser"
            className="h-28 w-full rounded-full object-cover"
          />
          <img
            src="https://i.pinimg.com/736x/fa/bd/a7/fabda724bdb3d494680229a71fec3b01.jpg"
            alt="Child Fundraiser"
            className="h-28 w-full rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold">
            2020 fundraiser champions for social justice
          </h3>
          <p className="text-gray-700">
            Help raise $30,000 for the community of Stonewood Cameroon. We’ll
            launch a specific campaign educating the local population and
            working with leaders on education and equality awareness for a
            brighter future.
          </p>
        </div>
      </section>

      {/* Give a Future Section */}
      <section className="grid items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-20">
        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Give a future full of choices
          </h2>
          <p className="mb-6 text-gray-700">
            Every child deserves a healthy start, the opportunity to learn and
            protection from harm. Yet, millions of children around the world are
            denied these basic rights. Help us change that.
          </p>
          <div className="flex gap-4">
            <button className="rounded-full bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">
              Donate
            </button>
            <button className="rounded-full bg-gray-200 px-6 py-3 font-medium text-gray-900 hover:bg-gray-300">
              Learn More
            </button>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/736x/05/bb/75/05bb75fa5d7eaf8dcfcd7ff05e1e9c02.jpg"
          alt="Child future"
          className="h-72 w-full rounded-xl object-cover"
        />
      </section>

      {/* Footer */}
      <footer className="mt-10 bg-gray-900 py-6 text-center text-white">
        <p>&copy; 2025 Gainlove. All rights reserved.</p>
      </footer>
    </div>
  );
}
