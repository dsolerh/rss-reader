import { useState } from "react"
import { RSSFeedFilter } from "../types/RSSFeedFilter"
import { RSSItem } from "../types/RSSItem"
import { FilterFeeds } from "./FilterFeeds"
import { RSSFeedItem } from "./RRSFeedItem"

interface MainPanelProps {
    feeds: RSSItem[]
    onFilter: (filter: RSSFeedFilter) => void
}

export const MainPanel = ({ feeds, onFilter }: MainPanelProps) => {
    const [showFilter, setShowFilter] = useState(false)
    const feedsList = feeds.map(feed => (
        <RSSFeedItem item={feed} />
    ))
    return (
        <div>
            <div>
                {showFilter && <FilterFeeds onFilter={onFilter} />}
                <button onClick={() => setShowFilter(v => !v)}></button>
            </div>
            <ul>{feedsList}</ul>
        </div>
    )
}
