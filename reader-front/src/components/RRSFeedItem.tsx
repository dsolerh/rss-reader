import { RSSItem } from "../types/RSSItem"

interface RSSFeedItemProps {
    item: RSSItem
}
export const RSSFeedItem = ({ item }: RSSFeedItemProps) => {
    return (
        <li>
            <a href={item.link} target="_blank">
                <div>{item.title}</div>
                <div>{item.source}</div>
                <div>{item.publish_date}</div>
                <div>{item.description}</div>
            </a>
        </li>
    )
}
