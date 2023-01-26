import { useState } from 'react';
import './App.css';
import { ControlPanel } from './components/ControlPanel';
import { MainPanel } from './components/MainPanel';
import { API_URL } from './config';
import { RSSFeedFilter } from './types/RSSFeedFilter';
import { RSSItem } from './types/RSSItem';

function App() {
    const [feeds, setFeeds] = useState<RSSItem[]>([])
    const [error, setError] = useState("")

    const searchFeeds = async (urls: string[]) => {
        if (urls.length === 0) {
            return
        }

        const query = urls
            .map(url => `urls=${url}`)
            .join("&")

        let response;
        try {
            response = await fetch(`${API_URL}?${query}`)
        } catch (error) {
            setError("Te connection failed")
            return
        }

        if (!response.ok) {
            setError(`The server responded: ${response.statusText}`)
            return
        }

        const data: { items: RSSItem[] } = await response.json()
        console.log(data);

        setFeeds(data.items)
    }

    const filterFeeds = (filter: RSSFeedFilter) => {
        setFeeds(feeds => feeds.filter(feed => {
            const conditions = []
            if (filter.title) conditions.push(filter.title === feed.title)
            if (filter.source) conditions.push(filter.source === feed.source)
            if (filter.publish_date) conditions.push(filter.publish_date === feed.publish_date)

            return conditions.every(e => e)
        }))
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4">
                    <ControlPanel onChangeFeed={searchFeeds} />
                </div>
                <div className="col-lg-8">
                    <MainPanel feeds={feeds} onFilter={filterFeeds} />
                </div>
                <NotificationToast message={error} onClose={() => setError("")} />
            </div>
        </div>
    );
}

export default App;
