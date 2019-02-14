import { humanize, titleize } from "underscore.string";

export const humanTitles = string => titleize(humanize(string));
