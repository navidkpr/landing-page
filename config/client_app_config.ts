import { getBooleanEnvVariable } from "./util"

// enum NavBarLinkVisibility {
//     "Always" = "always",
//     "MobileOnly" = "mobile-only",
//     "DesktopOnly" = "desktop-only"
// }

export enum SocialType {
    Twitter = "twitter",
    Instagram = "instagram",
    LinkedIn = "linkedin",
    Twitch = "twitch",
    Github = "github",
    Stackoverflow = "stackoverflow",
}

const ClientAppConfig = {
    Mixpanel: {
        ProjectId: process.env['NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN'],
        DebugEnabled: getBooleanEnvVariable('NEXT_PUBLIC_MIXPANEL_DEBUG_ENABLED', true)
    },
    Env: process.env['NEXT_PUBLIC_MIXPANEL_APP_ENV'],
    Urls: {
        DemoVideo: process.env['NEXT_PUBLIC_DEMO_VIDEO_URL'],
        PrimaryCTAUrl: process.env['NEXT_PUBLIC_PRODUCT_URL'] as string, // Only used if FormType is BasicCTA
    },
    Content: {
        WaitlistCTA: "Join the waitlist", // Only used if FormType is Waitlist
        PrimaryCTA: "Download for free", // Only used if FormType is BasicCTA
    },
    Socials: [
        {
            "type": SocialType.Twitter,
            "url": "https://twitter.com/navidkpr",
        },
        {
            "type": SocialType.Github,
            "url": "https://github.com/navidkpr",
        },
        {
            "type": SocialType.LinkedIn,
            "url": "https://linkedin.com/in/navid-pour",
        },
        // {
        //     "type": SocialType.Twitch,
        //     "url": "https://linkedin.com/in/navid-pour",
        // },
    ],
    NavBarLinks: [
        // {
        //     "title": "Watch our demo",
        //     "url": process.env['NEXT_PUBLIC_DEMO_VIDEO_URL'],
        // }
        // {
        //     "title": "Watch our demo",
        //     "url": process.env['NEXT_PUBLIC_DEMO_VIDEO_URL'],
        // }
        // {
        //     "title": "Download extension",
        //     "url": process.env['NEXT_PUBLIC_PRODUCT_URL'],
        //     // "visible": NavBarLinkVisibility.Always
        // }
    ] as Array<{
        "title": string,
        "url": string,
    }>,
}

export default ClientAppConfig