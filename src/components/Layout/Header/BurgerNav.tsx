"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import burger from "../../../../public/svgs/burger-menu.svg";
import down from "../../../../public/svgs/down-arrow.svg";

const BurgerNav = ({ categories }: any) => {
  return (
    <div className="">
      <div>
        <Menu as="div" className="relative w-[45px]">
          {({ open }) => (
            <>
              <Menu.Button as="button" aria-label="öppna hamburger meny">
                <Image src={burger} alt="hamburgermeny ikon" />
              </Menu.Button>

              <Transition
                className={`absolute left-0 lg:w-[40vw] w-[90vw]   duration-75 ease-in-out top-10 `}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items
                  className={`py-4 px-4 items-start flex-col flex gap-3 h-[80vh] overflow-scroll  text-[#333] font-bold shadow-xl bg-white`}
                >
                  {categories?.nodes &&
                    categories.nodes.map((item: any) => {
                      console.log("item?.children =====>", item?.children);
                      if (item?.children?.nodes?.length > 0) {
                        return (
                          <Disclosure key={item?.id}>
                            <div className="flex justify-between items-center w-full py-1 border-b-[1px] border-[#3333334d]">
                              <Menu.Item key={item?.id}>
                                <MyLink
                                  className="py-4"
                                  href={`/produktkategori/${item?.slug}`}
                                >
                                  {item?.name}
                                </MyLink>
                              </Menu.Item>

                              <Disclosure.Button className="">
                                <Image src={down} alt="down arrow" />
                              </Disclosure.Button>
                            </div>
                            <Disclosure.Panel className="flex-col flex pl-4">
                              {item?.children?.nodes &&
                                item.children.nodes.map((child: any) => {
                                  if (child?.children?.nodes?.length > 0) {
                                    return (
                                      <Disclosure key={child.id}>
                                        <div className="flex justify-between items-center w-full py-1 border-b-[1px] border-[#3333334d]">
                                          <Menu.Item key={item?.id}>
                                            <MyLink
                                              className="py-4"
                                              href={`/produktkategori/${item?.slug}/${child?.slug}`}
                                            >
                                              {item?.name}
                                            </MyLink>
                                          </Menu.Item>

                                          <Disclosure.Button className="">
                                            <Image
                                              src={down}
                                              alt="down arrow"
                                            />
                                          </Disclosure.Button>
                                        </div>

                                        <Disclosure.Panel className="flex-col flex pl-4">
                                          {child?.children?.nodes &&
                                            child.children.nodes.map(
                                              (kid: any) => {
                                                return (
                                                  <Menu.Item key={kid?.id}>
                                                    <MyLink
                                                      className="py-4"
                                                      href={`/produktkategori/${item?.slug}/${child?.slug}/${kid?.slug}`}
                                                    >
                                                      {child?.name}
                                                    </MyLink>
                                                  </Menu.Item>
                                                );
                                              }
                                            )}
                                        </Disclosure.Panel>
                                      </Disclosure>
                                    );
                                  } else {
                                    return (
                                      <Menu.Item key={child?.id}>
                                        <MyLink
                                          className="py-4"
                                          href={`/produktkategori/${item?.slug}/${child?.slug}`}
                                        >
                                          {child?.name}
                                        </MyLink>
                                      </Menu.Item>
                                    );
                                  }
                                })}
                            </Disclosure.Panel>
                          </Disclosure>
                        );
                      } else {
                        return (
                          <Menu.Item key={item?.id}>
                            <MyLink
                              className="py-4"
                              href={`/produktkategori/${item?.slug}`}
                            >
                              {item?.name}
                            </MyLink>
                          </Menu.Item>
                        );
                      }
                    })}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default BurgerNav;

// eslint-disable-next-line react/display-name
const MyLink = forwardRef((props: any, ref: any) => {
  let { href, children, ...rest } = props;

  return (
    <Link href={href} as={href} legacyBehavior>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});
