export enum CTAType {
    Waitlist = "waitlist",
    BasicCTA = "basic_cta", // Basic single-button CTA
}

const ServerAppConfig = {
    Content: {
        Heading: "Read less, code more",
        Subheading: "Ask questions from Chat GPT and coding documentation, without leaving VSCode",
    },
    Urls: {
        
    },
    EmbeddedLoomVideoSettings: {
        // Used to control embedded Loom video

        Url: process.env["LOOM_EMBED_URL"] as string,
        // You can get the url by clicking share > embed > Copy embed code on a loom video
        // Note: The url will be inside the code snippet under 'src' attribute of the iframe tag

        HideControls: true, // Set to true to hide the controls on the video player
    },
    FeatureFlags: {
        // Controls the overall features of the landing page
        EmbeddedLoomVideo: true,
        CTAType: CTAType.BasicCTA,
    },
}

export default ServerAppConfig