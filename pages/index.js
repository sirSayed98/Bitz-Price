import Link from 'next/link'
const index = () => (
    <>
        <div><h1> hello from index</h1> </div>
        <ul>
            <li><Link href='/'><a> home</a></Link> </li>
            <li><Link href='/about'><a> about</a></Link> </li>
        </ul>
    </>
);



export default index