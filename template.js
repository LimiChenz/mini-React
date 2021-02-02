import { Zero } from './zero-case.js'
import Test from './compontens.js'
export default function App(props) {
    const [message, changeMsg] = Zero.useState('message')
    const [count, changeCount] = Zero.useState(1)
    function hello(e) {
        let result = Math.random() * 10;
        changeCount( 23 )
        changeMsg(result);
    }

    const EVENTELEMENT = (
        <div style={{marginTop: '20px'}}>
            <button onClick={e => {hello(e)}}>{message}</button>
            <div>{count}</div>
        </div>
    )

    return (
        <div id="App">
            { EVENTELEMENT }
            { Test }
        </div>
    )

}
