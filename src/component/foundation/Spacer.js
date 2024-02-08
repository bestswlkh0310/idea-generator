export const Spacer = (props) => {

    let {w, h} = props

    if(w === undefined) {
        w = 0
    }
    if(h === undefined) {
        h = 0
    }

    return <div style={{width: w, height: h}}></div>
}