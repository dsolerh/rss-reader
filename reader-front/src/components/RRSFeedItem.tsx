import { RSSItem } from "../types/RSSItem"

interface RSSFeedItemProps {
    item: RSSItem
}
export const RSSFeedItem = ({ item }: RSSFeedItemProps) => {
    return (
        <li className="list-group-item">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">{item.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-end">
                        <a href={item.link} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between text-muted">
                    <span>From: {item.source}</span>
                    <span>Date: {item.publish_date}</span>
                </div>
            </div>
        </li>
    )
}
