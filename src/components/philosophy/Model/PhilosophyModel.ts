import { philosopyhJson } from "../Resource/philosophyData";
import { Philosophy } from "./Philosophy";

export function getPhilosophies(): Philosophy[] {
    return philosopyhJson.data;
}
