const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-50 md:mr-40">
      <div className="container mx-auto px-8 py-20 md:p-20 ">
        <div className="p-4">
          <h2 className="text-3xl font-semibold ">About Us</h2>
          <p className="mt-1 mb-8 text-gray-300">
            Welcome to WEHOWARE, a leading innovator in the software industry.
            Our journey began in 2022, with a mission to revolutionize the way
            businesses interact with technology. We're not just developers;
            we're pioneers shaping the future of digital solutions.
          </p>
          <h3 className="text-3xl font-semibold">Who We Are</h3>
          <p className="mt-1 mb-8 text-gray-300">
            At WEHOWARE, we believe in the power of technology to transform and
            empower businesses. Our team of expert developers, creative
            thinkers, and problem-solvers are dedicated to delivering
            cutting-edge software solutions tailored to your unique needs.
          </p>
          <h3 className="text-2xl font-semibold mt-4">Our Mission</h3>
          <p className="mt-1 mb-8 text-gray-300">
            Our mission is to develop software that not only meets but exceeds
            expectations. We focus on creating products that are user-friendly,
            highly functional, and which drive efficiency and productivity for
            businesses of all sizes.
          </p>
          <h3 className="text-2xl font-semibold mt-4">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src="https://res.cloudinary.com/cakhil/image/upload/v1678928342/DP_lu0wtv.jpg"
                  alt="Team Member"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-lg text-gray-900 font-bold">
                    SAI AKHIL
                  </h4>
                  <p className="text-sm text-gray-600">CEO/FOUNDER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
