import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image
            className="cursor-pointer w-32"
            // onClick={() => router.push("/")}

            src={assets.logo}
            alt="logo"
          />
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Our Sponsors</h2>
            <div className="flex space-x-6">
              {/* Sponsor 1 Link */}
              <a href="https://www.cisco.com" target="_blank" rel="noopener noreferrer">
                <Image
                  className="w-24 h-24"
                  src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/cisco_gray.app.svg?$Mobile$"
                  alt="Sponsor 1"
                  width={96}
                  height={96}
                />
              </a>
              {/* Sponsor 2 Link */}
              <a href="https://www.bmw.com" target="_blank" rel="noopener noreferrer">
                <Image
                  className="w-24 h-24"
                  src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/bmw_gray.app.svg?$Mobile$"
                  alt="Sponsor 2"
                  width={96}
                  height={96}
                />
              </a>
              {/* Sponsor 3 Link */}
              <a href="https://www.playstation.com" target="_blank" rel="noopener noreferrer">
                <Image
                  className="w-24 h-24"
                  src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/playstation_gray.app.svg?$Mobile$"
                  alt="Sponsor 3"
                  width={96}
                  height={96}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Create By</h2>
            <div className="text-sm space-y-2">
              <p>นาย ชิวงศ์ มูลครบุรี 66162110130-5</p>
              <p>นาย ภูศิษฐ์ ธนาศิริเดชานันท์ 66162110507-7</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm flex items-center justify-center space-x-2">
        {/* Enlarged GitHub icon */}
        <FaGithub className="text-3xl" />
        <a href="https://github.com/MarkCnw/GameStore_Project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          <span>View on GitHub Click to see</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
