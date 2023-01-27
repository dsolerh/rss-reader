import { useState } from "react"
import { RSSFeedFilter } from "../types/RSSFeedFilter"
import { RSSItem } from "../types/RSSItem"
import { FilterFeeds } from "./FilterFeeds"
import { RSSFeedItem } from "./RRSFeedItem"
import { RSSFeedPlaceholder } from "./RSSFeedPlaceholder"

interface MainPanelProps {
    feeds: RSSItem[]
    loading: boolean
    onFilter: (filter: RSSFeedFilter) => void
}

function toMili(s: string) {
    return new Date(s).valueOf()
}

export const MainPanel = ({ feeds, onFilter, loading }: MainPanelProps) => {
    const [showFilter, setShowFilter] = useState(false)

    let content;
    if (loading) {
        content = Array.from({ length: 5 }, (_, i) => <RSSFeedPlaceholder key={i} />)
    } else {
        content = feeds
            .sort((a, b) => toMili(a.publish_date) - toMili(b.publish_date))
            .map(feed => <RSSFeedItem item={feed} />)
    }

    return (
        <div className="py-3">
            <h2 className="text-center">Latest News</h2>
            <div className="d-flex flex-row align-items-start justify-content-between mb-2">
                <div className="pe-2 flex-grow-1">
                    {showFilter && <FilterFeeds onFilter={(f) => { setShowFilter(false); onFilter(f) }} />}
                </div>
                <div className="ps-2">
                    <button className="btn btn-secondary" onClick={() => setShowFilter(v => !v)}><i className="bi bi-funnel"></i></button>
                </div>
            </div>
            <div className="mt-2 p-3 border rounded">
                {content.length !== 0 && <ul className="list-group">{content}</ul>}
                {content.length === 0 && <div className="text-center">There is no news</div>}
            </div>
        </div>
    )
}
