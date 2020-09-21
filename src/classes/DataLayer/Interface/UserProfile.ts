import * as Schema from "../Schema";
import { PromisesRemapped } from "../WholeSchema";
import { StaticCachedBase, StaticBaseImpl, LocalDataT, CachedBase } from "./Base";
import { Conference, Flair, UserPresence, ProgramPerson, _User } from ".";

type SchemaT = Schema.UserProfile;
type K = "UserProfile";
const K_str: K = "UserProfile";

export default class Class extends CachedBase<K> implements SchemaT {
    constructor(
        conferenceId: string,
        data: LocalDataT[K],
        parse: Parse.Object<PromisesRemapped<SchemaT>> | null = null) {
        super(conferenceId, K_str, data, parse);
    }

    get affiliation(): string | undefined {
        return this.data.affiliation;
    }

    set affiliation(value) {
        this.data.affiliation = value;
    }

    get bio(): string | undefined {
        return this.data.bio;
    }

    set bio(value) {
        this.data.bio = value;
    }

    get country(): string | undefined {
        return this.data.country;
    }

    set country(value) {
        this.data.country = value;
    }

    get displayName(): string {
        return this.data.displayName;
    }

    set displayName(value) {
        this.data.displayName = value;
    }

    get position(): string | undefined {
        return this.data.position;
    }

    set position(value) {
        this.data.position = value;
    }

    get profilePhoto(): Parse.File | undefined {
        return this.data.profilePhoto;
    }

    set profilePhoto(value) {
        this.data.profilePhoto = value;
    }

    get pronouns(): Array<string> {
        return this.data.pronouns;
    }

    set pronouns(value) {
        this.data.pronouns = value;
    }

    get realName(): string {
        return this.data.realName;
    }

    set realName(value) {
        this.data.realName = value;
    }

    get dataConsentGiven(): boolean {
        return this.data.dataConsentGiven;
    }

    set dataConsentGiven(value) {
        this.data.dataConsentGiven = value;
    }

    get tags(): Schema.UserProfileTag[] {
        return this.data.tags;
    }

    set tags(value) {
        this.data.tags = value;
    }

    get webpage(): string | undefined {
        return this.data.webpage;
    }

    set webpage(value) {
        this.data.webpage = value;
    }

    get welcomeModalShown(): boolean {
        return this.data.welcomeModalShown;
    }

    set welcomeModalShown(value) {
        this.data.welcomeModalShown = value;
    }

    get conference(): Promise<Conference> {
        return this.uniqueRelated("conference");
    }

    get primaryFlair(): Promise<Flair> {
        return this.uniqueRelated("primaryFlair");
    }

    set primaryFlair(value) {
        value.then(x => {
            this.data.primaryFlair = x.id;
        });
    }

    get presence(): Promise<UserPresence> {
        return this.uniqueRelated("presence");
    }

    get programPersons(): Promise<ProgramPerson[]> {
        return StaticBaseImpl.getAllByField("ProgramPerson", "profile", this.id, this.conferenceId);
    }

    get user(): Promise<_User> {
        return this.uniqueRelated("user");
    }

    get userId(): string {
        return this.data.user;
    }

    get flairs(): Promise<Flair[]> {
        return this.nonUniqueRelated("flairs");
    }

    set flairs(value) {
        value.then(xs => {
            this.data.flairs = xs.map(x => x.id);
        });
    }

    static getByUserId(userId: string, conferenceId: string): Promise<Class | null> {
        return StaticBaseImpl.getByField("UserProfile", "user", userId, conferenceId);
    }

    static get(id: string, conferenceId: string): Promise<Class | null> {
        return StaticBaseImpl.get(K_str, id, conferenceId);
    }

    static getAll(conferenceId: string): Promise<Array<Class>> {
        return StaticBaseImpl.getAll(K_str, conferenceId);
    }

    static onDataUpdated(conferenceId: string) {
        return StaticBaseImpl.onDataUpdated(K_str, conferenceId);
    }

    static onDataDeleted(conferenceId: string) {
        return StaticBaseImpl.onDataDeleted(K_str, conferenceId);
    }
}

// The line of code below triggers type-checking of Class for static members
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _: StaticCachedBase<K> = Class;
