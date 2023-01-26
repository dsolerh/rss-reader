interface FeedSourceItemProps {
    index: number
    link: string
    onDelete: (index: number) => void
}

export const FeedSourceItem = ({ link, index, onDelete }: FeedSourceItemProps) => {
    return (
        <li className="list-group-item" key={index}>
            <div className="row g-4">
                <div className="col-10"><span style={{ wordBreak: "break-all" }}>{link}</span></div>
                <div className="col-2">
                    <button className="btn btn-secondary" onClick={() => { onDelete(index) }}><i className="bi bi-trash3"></i></button>
                </div>
            </div>
        </li >
    )
}
