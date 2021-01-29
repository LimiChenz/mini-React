import { Zero } from './zero-case.js'
import Test from './compontens.js'
export default function App(props) {
    function hello(e){
        console.log('eventment...', e);
    }

    const EVENTELEMENT = (
        <div>
            <button onClick={e => {hello(e)}}>123456</button>
        </div>
    )
    return (
        <div id="App">
            { EVENTELEMENT }
            { Test }
        </div>
    )

}
