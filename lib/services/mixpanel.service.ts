import mixpanel from "mixpanel-browser"
import AppConfig from "../../config/app_config"

export class MixpanelTracking {
    private static _instance: MixpanelTracking

    public static getInstance(): MixpanelTracking {
        if (MixpanelTracking._instance == null) {
            return (MixpanelTracking._instance = new MixpanelTracking())
        }
        return this._instance
    }

    public constructor() {
        if (MixpanelTracking._instance) {
            throw new Error('Error: Instance Creation of MixpanelTracking is not allowed. Use Mixpanel.getInstance instead.')
        }
        try {
            mixpanel.init(AppConfig.Mixpanel.ProjectId as string, { debug: AppConfig.Mixpanel.DebugEnabled })
        } catch (error) {
            console.log('Mixpanel blocked by privacy settings or ad blocker')
        }
    }

    private getSource(): string {
        const urlParams = new URLSearchParams(window.location.search);
        const source = urlParams.get('s') as string | null;
        if (!source) {
            return 'direct'
        } else {
            if (source === 'r') {
                return 'reddit'
            }
            if (source === 't') {
                return 'twitter'
            }
            if (source === 'e') {
                return 'email'
            }
            if (source === 'fb') {
                return 'facebook_1'
            }
            if (source === 'yt') {
                return 'youtube'
            }
            return source
        }
    }

    public track(name: string, data: any = {}) {
        data['Environment'] = AppConfig.Env
        try {
            mixpanel.track(name, { ...data, Source: this.getSource()})
        } catch (error) {
            console.log('Mixpanel blocked by privacy settings or ad blocker')
        }
    }

    public pageViewed(pageName: string, extraData: any = {}) {
        this.track('page_viewed', { Name: pageName, ...extraData })
    }

    public featureFlag(featureName: string, variation: string) {
        this.track('feature_flag', { Name: featureName, variation: variation})
    }

    public formSubmitted(formName: string, form_data: object = {}) {
        this.track('form_submitted', { Name: formName, 'Form Data': form_data })
    }
}