"use client";
import LinkButton from "@/components/elements/linkButton";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const MobileMenu = ({ isOpen, handleClose }) => {
  const data = [
    {
      id: 1,
      title: "Hiring",
      url: "/hiring"
    },
    {
      id: 2,
      title: "Employees",
      url: "/employees"
    },
    {
      id: 3,
      title: "Contractors",
      url: "/contractors"
    },
    {
      id: 4,
      title: "Integration",
      url: "/integrations"
    },
    {
      id: 5,
      title: "Payroll",
      url: "/payroll"
    },
    {
      id: 6,
      title: "API",
      url: "/api"
    },
  ]

  return (
    <div onClick={handleClose} className="relative w-full h-full">
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div className="fixed inset-0 overflow-y-auto top-0 z-10 transform text-left w-full sm:px-0 left-0 md:flex md:justify-end md:pt-20 md:pr-12 lg:pr-16 xl:pr-20">
            <div className="flex-col items-center w-full md:max-w-2xl lg:max-w-xl xl:max-w-lg">
              <div className="fixed inset-0 bg-black/30 md:bg-transparent" />

              <div onMouseLeave={handleClose} className="overflow-hidden min-h-full relative z-20">

                <div className="bg-white w-full h-full overflow-y-auto px-5 pt-12 md:pt-6 pb-12 ">
                  <div className="flex justify-end md:hidden">
                    <button className="" onClick={handleClose}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L1 17" stroke="#84CC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 17L1 1" stroke="#84CC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-col gap-y-6">
                      {data?.map(datum => <div key={datum?.id} className="">
                        <Link href={datum?.url} className="text-lg font-semibold text-primary hover:text-secondary">
                         {datum?.title}
                        </Link>
                      </div>)}
                    </div>
                  </div>
                  <div className="mt-10 w-full flex flex-col gap-y-4">
                    <LinkButton
                      title={"Book A Demo"}
                      href={"/book-a-demo"}
                      buttonType="primary"
                      customClassName="w-full py-4"
                    />
                    <LinkButton
                      title={"Log In"}
                      buttonType=""
                      customClassName="w-full py-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>

  )
}

export default MobileMenu