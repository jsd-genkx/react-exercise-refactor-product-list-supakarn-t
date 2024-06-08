// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function ProductDashboard({ productList }) {
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
				{productList.map((product, index) => {
					return (
						<div key={index} className="flex h-28">
							<input type="checkbox" name="checkbox" className="m-3 w-5" />
							<div
								id="productContent"
								className="flex w-full border border-neutral-500 rounded-xl overflow-hidden bg-white"
							>
								<img src={product.image} alt="" className="w-1/3" />
								<div
									id="productInfo"
									className="flex flex-col w-2/3 p-4 justify-center"
								>
									<h3>{product.name}</h3>
									<p>{product.price}</p>
								</div>
							</div>
						</div>
					);
				})}
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

ProductDashboard.propTypes = {
	productList: PropTypes.array,
	map: PropTypes.func,
};

export default ProductDashboard;
