// eslint-disable-next-line no-unused-vars
import React from "react";

function ProductDashboard() {
	return (
		<section
			id="dashboard"
			className="bg-sky-50 border border-sky-300 w-full lg:w-[600px] p-4 rounded-xl"
		>
			<h2>Product Dashboard</h2>
			<div
				id="productDashboard"
				className="flex flex-col gap-2 h-96 p-3 overflow-y-scroll"
			>
				{/* each product here */}
			</div>
			<button
				id="addToCard"
				type="button"
				className="bg-blue-500 text-white w-full p-3 mt-5 hover:bg-blue-700"
			>
				<i className="fa-solid fa-cart-shopping"></i> Add to Card
			</button>
		</section>
	);
}

export default ProductDashboard;
