import { useEffect, useState } from 'react'
import useInput from '../hooks/useInput'
import { FeedSourceItem } from './FeedSourceItem'
import { Input } from './Input'

interface ControlPanelProps {
    onChangeFeed: (feeds: string[]) => void
}

function urlInvalid(url: string): boolean {
    return !/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.?[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(url)
}

export const ControlPanel = ({ onChangeFeed }: ControlPanelProps) => {
    const feed = useInput("", "The value must not be empty", urlInvalid)
    const [feeds, setFeeds] = useState<string[]>([])

    const addFeed = () => {
        setFeeds(feeds => [...feeds, feed.value])
    }

    const deleteFeed = (index: number) => {
        setFeeds(feeds => { feeds.splice(index, 1); return [...feeds] })
    }

    useEffect(() => { onChangeFeed(feeds) }, [feeds, onChangeFeed])

    const feeedList = feeds.map((feed, index) => (
        <FeedSourceItem
            key={index}
            link={feed}
            index={index}
            onDelete={deleteFeed}
        />
    ))

    return (
        <div>
            <ul>{feeedList}</ul>
            <Input
                id="feed"
                label="Fedd Source"
                type="text"
                value={feed.value}
                error={feed.error}
                onChange={feed.onChangeHandler}
                onBlur={feed.onBlurHandler}
            />
            <button onClick={addFeed}>Add Source</button>
        </div>
    )
}
