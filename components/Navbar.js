import Link from 'next/link'
const Navbar = () => (
    <>
        <ul>
            <li><Link href='/'><a> home</a></Link> </li>
            <li><Link href='/about'><a> about</a></Link> </li>
        </ul>
    </>
);



export default Navbar