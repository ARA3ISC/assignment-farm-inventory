import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<>
			<div className="flex justify-between ">
				<Link to={'/'}>
					<h1 className="logo text-xl font-bold cursor-pointer hover:text-black">Farm Inventory</h1>
				</Link>
				{/* <h1 className="logo text-xl font-bold cursor-pointer hover:text-black">Farm Inventory</h1> */}
				<ul className="flex items-center text-lg">
					<Link to={'/'}>
						<li className="mx-9 hover:text-black cursor-pointer">Home</li>
					</Link>
					<Link to={'additem'}>
						<li className="mx-9 hover:text-black cursor-pointer">Add item</li>
					</Link>
				</ul>
			</div>
		</>
	)
}

export default Navbar;
