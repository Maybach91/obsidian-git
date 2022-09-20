import ObsidianGit from "./main";
export class LocalStorageSettings {
    private prefix: string;
    constructor(private readonly plugin: ObsidianGit) {
        this.prefix = this.plugin.manifest.id + ":";
    }

    migrate(): void {
        const keys = ["password", "hostname", "conflict", "lastAutoPull", "lastAutoBackup", "lastAutoPush", "gitPath", "pluginDisabled"];
        for (const key of keys) {
            const old = app.loadLocalStorage(this.prefix + key);
            if (app.loadLocalStorage(key) == null && old != null) {
                if (old != null) {
                    app.saveLocalStorage(this.prefix + key, old);
                    localStorage.removeItem(this.prefix + key);
                }
            }
        }
    }

    getPassword(): string | null {
        return app.loadLocalStorage(this.prefix + "password");
    }

    setPassword(value: string): void {
        return app.saveLocalStorage(this.prefix + "password", value);
    }

    getHostname(): string | null {
        return app.loadLocalStorage(this.prefix + "hostname");
    }

    setHostname(value: string): void {
        return app.saveLocalStorage(this.prefix + "hostname", value);
    }

    getConflict(): string | null {
        return app.loadLocalStorage(this.prefix + "conflict");
    }

    setConflict(value: string): void {
        return app.saveLocalStorage(this.prefix + "conflict", value);
    }

    getLastAutoPull(): string | null {
        return app.loadLocalStorage(this.prefix + "lastAutoPull");
    }

    setLastAutoPull(value: string): void {
        return app.saveLocalStorage(this.prefix + "lastAutoPull", value);
    }

    getLastAutoBackup(): string | null {
        return app.loadLocalStorage(this.prefix + "lastAutoBackup");
    }

    setLastAutoBackup(value: string): void {
        return app.saveLocalStorage(this.prefix + "lastAutoBackup", value);
    }

    getLastAutoPush(): string | null {
        return app.loadLocalStorage(this.prefix + "lastAutoPush");
    }

    setLastAutoPush(value: string): void {
        return app.saveLocalStorage(this.prefix + "lastAutoPush", value);
    }

    getGitPath(): string | null {
        return app.loadLocalStorage(this.prefix + "gitPath");
    }

    setGitPath(value: string): void {
        return app.saveLocalStorage(this.prefix + "gitPath", value);
    }

    getPluginDisabled(): boolean {
        return app.loadLocalStorage(this.prefix + "pluginDisabled") == "true";
    }

    setPluginDisabled(value: boolean): void {
        return app.saveLocalStorage(this.prefix + "pluginDisabled", `${value}`);
    }
}