import ServerAppConfig, { CTAType } from '../../config/server_app_config'
import BasicCTA from '../../lib/components/landing/cta/basic_cta'
import WaitlistCTA from '../../lib/components/landing/cta/waitlist_cta'
import LoomVideo from '../../lib/components/landing/loom_video'
import Socials from '../../lib/components/landing/socials'
import MixpanelPageViewTracker from '../../lib/components/mixpanel/mixpanel_page_view_tracker'

export default function Home() {
  return (
    <main className="flex flex-col min-h-[720px] md:min-h-screen h-screen" style={{backgroundImage: "url('/background.jpg')", backgroundSize: 'cover'}}>
      <MixpanelPageViewTracker page="home" />
      <div className="flex flex-col w-screen min-h-full items-center justify-center p-4 xs:p-8 md:p-16 bg-primary bg-opacity-[65%]">
      <div className="flex flex-col items-center gap-[16px] px-[16px]">
        {ServerAppConfig.FeatureFlags.EmbeddedLoomVideo &&
          <LoomVideo />
        }
        <div className="flex flex-col items-center gap-[16px]">
          <h1 className="text-[48px] text-center font-semibold text-gray-100 leading-[56px]">
            {ServerAppConfig.Content.Heading}
          </h1>
          <h2 className="text-[20px] text-gray-400 text-center">
            {ServerAppConfig.Content.Subheading}
          </h2>
        </div>
        <div className='mt-[24px]'>
          {ServerAppConfig.FeatureFlags.CTAType == CTAType.Waitlist && 
            <WaitlistCTA />
          }
          {ServerAppConfig.FeatureFlags.CTAType == CTAType.BasicCTA && 
            <BasicCTA />
          }
        </div>
      
      </div>
      </div>
      <Socials />
    </main>
  )
}
