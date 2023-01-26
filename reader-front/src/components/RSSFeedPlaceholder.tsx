export const RSSFeedPlaceholder = () => {
    return (
        <li className="list-group-item">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                </div>
                <div className="card-body">
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-4"></span>
                    </p>
                    <div className="d-flex justify-content-end">
                        <button tabIndex={-1} className="btn btn-dark btn-sm disabled placeholder col-6"></button>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between text-muted">
                    <div className="placeholder-glow"><span className="placeholder col-7"></span></div>
                    <div className="placeholder-glow"><span className="placeholder col-3"></span></div>
                </div>
            </div>
        </li>
    )
}
