import WaitlistForm from '../../lib/components/landing/waitlist_form'
import MixpanelPageViewTracker from '../../lib/components/mixpanel/mixpanel_page_view_tracker'

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen" style={{backgroundImage: "url('/background.jpg')", backgroundSize: 'cover'}}>
      <MixpanelPageViewTracker page="home" />
      <div className="flex flex-col min-h-screen w-screen items-center justify-center p-4 xs:p-8 md:p-16 bg-primary bg-opacity-[65%]">
      <div className="flex flex-col items-center gap-[16px] px-[16px]">
        <div className="flex flex-col items-center gap-[16px]">
          <h1 className="text-[48px] text-center font-semibold">
            Your coding documentation Copilot
          </h1>
          <h2 className="text-[20px] text-gray-400 text-center">
            Ask questions from any framework or tool and get answers right away
          </h2>
        </div>
        <div className='mt-[24px]'>
          <WaitlistForm />
        </div>
      </div>
      </div>
    </main>
  )
}
