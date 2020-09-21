import Cache from "./Cache";

export default class Caches {
    private static caches: Map<string, Cache> = new Map();

    static get Count(): number {
        return this.caches.size;
    }

    static clear() {
        this.caches.clear();
    }

    static async get(conferenceId: string): Promise<Cache> {
        // @ts-ignore
        if (!window.clowdr || !window.clowdr.caches) {
            // @ts-ignore
            window.clowdr = window.clowdr || {};
            // @ts-ignore
            window.clowdr.caches = this;
        }

        let cache = this.caches.get(conferenceId);

        if (!cache) {
            cache = new Cache(conferenceId);
            this.caches.set(conferenceId, cache);
            await cache.initialise();
        }

        return cache;
    }
}
