import { Boss } from "./boss";
import { User } from "./user";

export interface Data {
    user: User;
    terraria_bosses: Array<Boss>;
}
