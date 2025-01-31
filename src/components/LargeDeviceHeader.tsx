import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { RiGlobalLine } from "react-icons/ri";
import Button from "./Button";

interface SubSegment {
  title: string;
  url: string;
}

const subSegments: SubSegment[] = [
  { title: "AnyCaas", url: "/anycaas" },
  { title: "Cloud Solutions", url: "/cloud-solutions" },
  { title: "Security Services", url: "/security-services" },
];

const LargeDeviceHeader = () => {
  return (
    <nav className="bg-transparent h-24 flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          priority
          alt="logo"
          width={70}
          height={70}
          className="w-40 h-auto"
        />
      </Link>

      {/* Navigation Menu */}
      <ul className="flex items-center text-white">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-lg hover:bg-transparent focus:outline-none">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-auto p-2 rounded-lg shadow-lg border bg-white">
                <ul className="w-[250px]">
                  {subSegments.map((segment, index) => (
                    <li
                      key={index}
                      className="hover:text-[#1b76e9] rounded-md transition-all"
                    >
                      <Link href={segment.url} className="block p-2">
                        {segment.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <li className="text-lg ml-10">
          <Link href="/services">Services</Link>
        </li>
        <li className="text-lg hover:underline hover:underline-offset-8 duration-700 ml-14">
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>

      <Select>
        <SelectTrigger className="w-[90px] h-[45px] bg-transparent focus:outline-none text-white text-lg p-2 rounded-full">
          <p className="flex items-center">
            <i className="mr-2">
              <RiGlobalLine />
            </i>
            En
          </p>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">
              <p className="text-base">EN (English)</p>
            </SelectItem>
            <SelectItem value="banana">TH (Thai)</SelectItem>
            <SelectItem value="blueberry">ID (Bahasa indonesial)</SelectItem>
            <SelectItem value="grapes">TW (Traditional Chinese)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Contact Button */}

      <Button text="Contact Us" />
    </nav>
  );
};

export default LargeDeviceHeader;
