import { getBooleanEnvVariable } from "./util"

const AppConfig = {
    Mixpanel: {
        ProjectId: process.env['NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN'],
        DebugEnabled: getBooleanEnvVariable('NEXT_PUBLIC_MIXPANEL_DEBUG_ENABLED', true)
    },
    // GrowthBook: {
    //     SDKEndpoint: process.env['NEXT_PUBLIC_GROWTHBOOK_SDK_ENDPOINT']
    // },
    Env: process.env['NEXT_PUBLIC_APP_ENV'],
    Urls: {
        DemoVideo: process.env['NEXT_PUBLIC_DEMO_VIDEO_URL'],
    }
}

export default AppConfig