import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        {/* โลโก้และรายละเอียด */}
        <div className="w-4/5">
          <Image
            className="cursor-pointer w-32"
            src={assets.logo}
            alt="logo"
          />
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* ส่วนของสปอนเซอร์ */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="font-medium text-gray-900 mb-5">Our Sponsors</h2>

          {/* แถวแรก (3 โลโก้) */}
          <div className="flex justify-center space-x-6">
            {/* Nintendo */}
            <a href="https://www.nintendo.com" target="_blank" rel="noopener noreferrer">
              <Image
                className="w-24 h-24"
                src="https://logos-world.net/wp-content/uploads/2020/11/Nintendo-Logo-700x394.png"
                alt="Nintendo"
                width={96}
                height={96}
              />
            </a>
            {/* BMW */}
            <a href="https://www.bmw.com" target="_blank" rel="noopener noreferrer">
              <Image
                className="w-24 h-24"
                src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/bmw_gray.app.svg?$Mobile$"
                alt="BMW"
                width={96}
                height={96}
              />
            </a>
            {/* PlayStation */}
            <a href="https://www.playstation.com" target="_blank" rel="noopener noreferrer">
              <Image
                className="w-24 h-24"
                src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/sponsor/football/playstation_gray.app.svg?$Mobile$"
                alt="PlayStation"
                width={96}
                height={96}
              />
            </a>
          </div>

          {/* แถวที่สอง (2 โลโก้) */}
          <div className="flex justify-center space-x-6 mt-4">
            {/* Blizzard */}
            <a href="https://www.blizzard.com" target="_blank" rel="noopener noreferrer">
              <Image
                className="w-24 h-24"
                src="https://logos-world.net/wp-content/uploads/2022/06/Blizzard-Logo-700x394.png"
                alt="Blizzard"
                width={96}
                height={96}
              />
            </a>
            {/* GTA 6 */}
            <a href="https://www.rockstargames.com" target="_blank" rel="noopener noreferrer">
              <Image
                className="w-24 h-24"
                src="https://logos-world.net/wp-content/uploads/2024/10/Gta-6-Logo-500x281.png"
                alt="GTA 6"
                width={96}
                height={96}
              />  
            </a>
          </div>
        </div>

        {/* ส่วนของผู้สร้าง */}
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

      {/* ส่วนของ GitHub */}
      <p className="py-4 text-center text-xs md:text-sm flex items-center justify-center space-x-2">
        <FaGithub className="text-3xl" />
        <a href="https://github.com/MarkCnw/GameStore_Project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          <span>View on GitHub Click to see</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
