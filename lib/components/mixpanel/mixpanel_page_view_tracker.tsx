"use client"

import { useEffect } from "react"
import { MixpanelTracking } from "../../services/mixpanel.service"

export default function MixpanelPageViewTracker({ page }: { page: string }) {
    useEffect(() => {
        MixpanelTracking.getInstance().pageViewed(page)
    })
    return (<></>)
}