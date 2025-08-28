import './Hidden.css'

export const Hidden = ({visible}) => {
    return(
        <div 
            className={`show ${visible}`}>
        </div>
    )
}


export const Change = ({change}) => {
    return(
        <div 
            className={`show ${change}`}>
        </div>
    )
}