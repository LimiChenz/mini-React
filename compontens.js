import { Zero } from './zero-case.js'
export default function Test(props) {
    const [data, changeData] = Zero.useState('message')

    function change(e) {
        changeData(e.target.value);
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
