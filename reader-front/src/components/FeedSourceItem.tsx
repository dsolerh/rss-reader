interface FeedSourceItemProps {
    index: number
    link: string
    onDelete: (index: number) => void
}

export const FeedSourceItem = ({ link, index, onDelete }: FeedSourceItemProps) => {
    return (
        <li key={index}>
            {link}
            <button onClick={() => { onDelete(index) }}></button>
        </li>
    )
}
