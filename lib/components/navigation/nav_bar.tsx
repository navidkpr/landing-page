"use client"

import Link from "next/link";
import { useState } from "react";
import ClientAppConfig from "../../../config/client_app_config";

export default function NavBar() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="absolute py-[16px] px-[16px] md:py-[48px] md:px-[64px] w-screen min-w-screen">
            <div className="flex flex-wrap justify-between items-center text-gray-200 gap-[64px] text-[24px] md:text-[18px] font-medium">
                <div className="flex min-h-full">
                    <div>
                    <div className="flex lg:flex-grow self-end gap-[16px]">
                        <a href="" >
                            bunkie
                        </a>
                    </div>
                    </div>
                </div>
                { ClientAppConfig.NavBarLinks.length > 0 && (
                    <div className="flex flex-grow justify-end md:justify-start min-h-full">
                        <div className="block md:hidden">
                            <button className="flex items-end px-3 py-2 border rounded  border-gray-200 hover:text-white hover:border-white" onClick={() => setShowModal(!showModal)}>
                                <svg className="fill-current h-[16px] w-[16px] text-gray-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
                            </button>
                        </div>
                        <div>
                        { ClientAppConfig.NavBarLinks.map((link, index) => 
                            <div key={index} className="hidden md:flex lg:flex-grow self-end gap-[16px] ml-[16px] text-gray-300 hover:text-gray-100">
                                <Link href={link.url as string} target="_blank" rel="noopener noreferrer">
                                    {link.title}
                                </Link>
                            </div>
                        )}
                        </div>
                    </div>
                )}
            </div>
            { showModal && 
                <>
                    { ClientAppConfig.NavBarLinks.map((link, index) => 
                        <div key={index} className="flex md:hidden py-[16px] px-[16px] mt-[8px] rounded-[12px] bg-primary-light w-full lg:flex-grow self-end gap-[16px] text-gray-300 hover:text-gray-100">
                            <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.title}
                            </Link>
                        </div>
                    )}
                </>
            }
        </div>
    )
}