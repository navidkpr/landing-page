export function getEnvVarOrDefault(key: string, defaultValue: any = undefined) {
    return process.env[key]? process.env[key] : defaultValue
}

export function getBooleanEnvVariable(key: string, defaultValue: boolean = false): boolean {
    const envValue = process.env[key]
    if (!envValue) {
        return defaultValue
    }

    if (envValue.toLowerCase() === "false" || envValue === "0") {
        return false
    }

    return true
}