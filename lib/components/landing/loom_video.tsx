import ServerAppConfig from "../../../config/server_app_config";


export default function LoomVideo() {

    const settings = ServerAppConfig.EmbeddedLoomVideoSettings
    const url = settings.Url + (settings.HideControls? "?hide_owner=true&hide_title=true&hide_share=true&hideEmbedTopBar=true" : "")
    // const url = "https://www.loom.com/embed/1666e640c6074f1c947d32f5a4b41b61"
    return (
        <div className="relative h-[0]
            lg:w-[70%] lg:pb-[40%]
            md:w-[75%] md:pb-[45%]
            sm:w-[80%] sm:pb-[50%]
            w-[90%] pb-[56.25%]
        "><iframe src={url} allowFullScreen style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}></iframe></div>
    )
}