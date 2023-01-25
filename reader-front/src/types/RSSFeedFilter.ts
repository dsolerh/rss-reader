import { RSSItem } from "./RSSItem";

export type RSSFeedFilter = Pick<RSSItem, "title" | "publish_date" | "source">
