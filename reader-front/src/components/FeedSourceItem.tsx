interface FeedSourceItemProps {
    index: number
    link: string
    onDelete: (index: number) => void
}

export const FeedSourceItem = ({ link, index, onDelete }: FeedSourceItemProps) => {
    return (
        <li className="list-group-item" key={index}>
            <div className="d-flex flex-row justify-content-between">
                <span>{link}</span>
                <button className="btn btn-secondary" onClick={() => { onDelete(index) }}><i className="bi bi-trash3"></i></button>
            </div>
        </li>
    )
}
