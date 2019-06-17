import humanize from "underscore.string/humanize";
import titleize from "underscore.string/titleize";

export const humanTitles = string => titleize(humanize(string));
