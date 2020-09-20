import { Base } from ".";
import Parse from "parse";

export default interface Schema extends Base {
    headerImage: Parse.File | undefined;
    lastProgramUpdateTime: Date;
    name: string;
    shortName: string;
    welcomeText: string;
}
