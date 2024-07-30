import '../styles/OutlineContainer.css'

export function OutlineContainer({ headerText, children }: { headerText: string, children: any }) {
    return (
        <div className="outline-container">
            {headerText && <div  className="outline-container-header">{headerText}</div>}
            <div className="outline-container-content">
                {children}
            </div>
        </div>
    )
}