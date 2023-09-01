"use client"

import { useState } from "react";
import { MixpanelTracking } from "../../services/mixpanel.service";
import WaitlistService from "../../services/waitlist.service";

function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [helper, setHelper] = useState("");
    const [registered, setRegistered] = useState(false);

    function register(e: any) {
        e.preventDefault();
        MixpanelTracking.getInstance().formSubmitted('waitlist-register', { email: email })
        
        new WaitlistService().register(email);
        setHelper("Thanks for registering! We'll get back to you soon.")
        setRegistered(true)
        setEmail("")
    }


    return (
        <div className="px-[16px] flex flex-col justify-center items-center gap-[16px]">
            {!registered &&
                <>
                <form className="flex sm:hidden flex-col gap-[12px] sm:bg-primary-light rounded-full sm:gap-[4px] min-w-full sm:min-w-[396px] justify-between sm:p-[8px]" onSubmit={register}>
                    <input type="email" placeholder="Enter your email address" className="bg-primary-light px-[32px] sm:px-[24px] sm:py-[12px] py-[16px] rounded-full text-gray-200 flex-grow focus:outline-none " value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit" className="bg-secondary hover:scale-[95%] active:scale-[90%] text-[#EDF1F2] px-[32px] sm:px-[16px] sm:py-[8px] py-[16px] rounded-full">Join the waitlist</button>
                </form>
                <form className="hidden sm:flex rounded-full sm:gap-[4px] p-[8px] min-w-full justify-between bg-primary-light" onSubmit={register}>
                    <input type="email" placeholder="Enter your email address" className="px-[16px] py-[8px] bg-transparent rounded-full text-gray-200 flex-grow focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit" className="bg-secondary hover:scale-[95%] active:scale-[90%] text-[#EDF1F2] px-[16px] py-[4px] rounded-full">Join the waitlist</button>
                </form>
                </>
            }
            { registered &&
                <p className="text-[16px] text-secondary">{helper}</p>
            }
        </div>
    )
}

export default WaitlistForm