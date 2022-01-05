import React from "react";
import '../../css/Filter/Filter.css';
 function Filter(props) {
  return (
      <div className="filter-wrapper">
            <h2 className="filter-title">
                Filter
            </h2>
            <div className="num-of-products">
                Number of Products : {props.productsNumber} 
            </div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select  className="filter-select" onChange={props.handleFilterBySize} value={props.size}>
                    <option value="ALL">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>

            <div className="filter-by-size">
            <span>Order</span>
            <select  className="filter-select" onChange={props.handleFilterByOrder} value={props.sort}>
                <option value="latest">Lastest</option>
                <option value="lowest">lower</option>
                <option value="highest">Highest</option>
       
            </select>
        </div>
      </div>
      );
}

export default Filter;