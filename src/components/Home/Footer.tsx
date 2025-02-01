import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-between items-center w-full h-32 px-5 bg-[#002045] xl:px-40">
        {/* Logo Section */}
        <div className="w-40">
          <Image
            src="/icons/logo.svg"
            alt="Company Logo"
            height={60}
            width={100}
            className="h-auto w-auto"
          />
        </div>

        {/* Social Links Section */}
        <div className="flex items-center space-x-4 lg:hidden">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/social/linkdin.svg"
              alt="LinkedIn"
              height={30}
              width={30}
            />
          </a>
          <a href="tel:+123456789">
            <Image
              src="/icons/social/phone.svg"
              alt="Phone"
              height={30}
              width={30}
            />
          </a>
          <a href="tel:+123456789">
            <Image
              src="/icons/social/email.svg"
              alt="Phone"
              height={30}
              width={30}
            />
          </a>
        </div>

        <div className="lg:flex items-center hidden space-x-4">
          <p className="text-[#00e4e6] font-bold">Our Solutions</p>
          <div className="h-10 w-[1px] bg-[#00e4e6]"></div>
          <div className="lg:flex items-center space-x-6">
            <p className="text-[#00e4e6] cursor-pointer duration-500 hover:text-[#005bc4]">
              AnyCaaS
            </p>
            <p className="text-[#00e4e6] cursor-pointer duration-500 hover:text-[#005bc4]">
              AnyBaaS
            </p>
            <p className="text-[#00e4e6] cursor-pointer duration-500 hover:text-[#005bc4]">
              AnyPaaS
            </p>
          </div>
        </div>
      </footer>

      {/* copy right */}

      <div className="flex flex-col justify-center lg:justify-between lg:flex-row items-center bg-[#00152d] px-10 h-20 w-full xl:px-40">
        <p className="text-[#1e7fef] text-sm">
          <span className="font-bold">©2023 All rights reserved.</span> Any
          Technology Pte Ltd.
        </p>
        <p className="text-[#1e7fef] text-sm">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
