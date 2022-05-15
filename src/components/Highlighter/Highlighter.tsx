import React from "react"
import "./Highlighter.scss"

const Highlighter = (props: any) => {
    const {filter, text} = props
    if (!filter) return text
    const regexp = new RegExp(filter, 'ig')
    const matchValue = text.match(regexp)
    if (matchValue) {
        return text.split(regexp).map((s: string, index: number, array: []) => {
            if (index < array.length - 1) {
                const same = matchValue.shift()
                return <>{s}<span className="highlighter">{same}</span></>
            }
            return s
        })
    }
    return text
}
export default Highlighter