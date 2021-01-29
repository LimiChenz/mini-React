import { Zero } from './zero-case.js'
export default function Test(props) {
    let data = 'message'


    function change(e) {
        data = e.target.value;
        console.log(e.target.value);
    }

    return (
        <div id="test">
            <input abc="123" value={data} onChange={ e => {
                change(e);
            }} />
        </div>
    )

}
