import { Zero } from './zero-case.js'
import Test from './compontens.js'
export default function App(props) {
    const [message, changeMsg] = Zero.useState({
        aaa: 'aaa',
        bbb: 'bbb'
    });
    const [show, changeShow] = Zero.useState(true);
    const [count, changeCount] = Zero.useState(1);

    function hello(e) {
        let result = Math.random() * 10;
        changeMsg({
            aaa: result,
            bbb: 'bbb'
        });
    }

    const EVENTELEMENT = (
        <div style={{marginTop: '20px'}}>
            <button onClick={e => {hello(e)}}>{message.aaa}</button>
            <div>{count}</div>
            <button onClick={e=> changeShow(!show)}>xxxx</button>
        </div>
    )

    return (
        <div id="App">
            { EVENTELEMENT }
            { show ? Test : null }
        </div>
    )

}
