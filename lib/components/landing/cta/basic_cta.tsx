"use client";
import Link from "next/link";
import ClientAppConfig from "../../../../config/client_app_config";
import { MixpanelTracking } from "../../../services/mixpanel.service";


export default function BasicCTA() {
    function primaryCTAActionHandler() {
        MixpanelTracking.getInstance().buttonClicked(
            'primary-cta', 
            { url: ClientAppConfig.Urls.PrimaryCTAUrl, text: ClientAppConfig.Content.PrimaryCTA }
        )
        window.open(ClientAppConfig.Urls.PrimaryCTAUrl, "_blank")
    }
    return (
        <button onClick={primaryCTAActionHandler}>
            <div 
                className="bg-secondary hover:scale-[96.5%] active:scale-[94%] text-[#EDF1F2] rounded-full text-[18px] px-[24px] py-[8px]"
                onClick={() => { 
                    
                }}
            >
                {ClientAppConfig.Content.PrimaryCTA}
            </div>
        </button>
    )
}