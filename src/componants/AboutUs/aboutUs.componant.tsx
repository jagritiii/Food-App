import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg leading-7 text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel erat sit amet augue imperdiet porttitor eget a ex. Sed nec
              dapibus sapien. Duis vel lacus a eros dapibus semper.
            </p>
            <p className="text-lg leading-7 text-gray-700 mb-4">
              In condimentum fermentum turpis, non blandit quam volutpat ac.
              Nullam aliquet nulla eget odio varius volutpat. In hac habitasse
              platea dictumst. Nam eget felis in dolor finibus tristique ac
              vitae enim.
            </p>
            <p className="text-lg leading-7 text-gray-700">
              Nullam porttitor ultrices erat quis gravida. Vestibulum bibendum
              cursus urna eu dignissim. Nam bibendum odio nunc, at placerat
              felis fermentum eu.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;