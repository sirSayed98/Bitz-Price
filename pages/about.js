import Link from 'next/link'
const about = () => (
    <>
        <div><h1> hello from about</h1> </div>
        <ul>
            <li><Link href='/'><a> home</a></Link> </li>
            <li><Link href='/about'><a> about</a></Link> </li>
        </ul>
    </>

);
export default about