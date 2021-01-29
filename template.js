import { Zero } from './zero-case.js'
import Test from './compontens.js'
export default function App(props) {

    const data = Zero.reactive({
        message: 'message'
    })

    console.log(data.message);

    function hello(e){
        // console.log('eventment...', e);
        data.message = Math.random() * 10;
        console.log(data.message);
    }

    // Zero.effect(hello)

    const EVENTELEMENT = (
        <div>
            <button onClick={e => {hello(e)}}>{ data.message }</button>
        </div>
    )
    return (
        <div id="App">
            { EVENTELEMENT }
            { Test }
        </div>
    )

}
