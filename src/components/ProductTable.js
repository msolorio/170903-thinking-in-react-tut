import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable(props) {

  function getTableRows() {
    const rows = [];
    let previousCategory = null;

    props.products.forEach((product) => {
      if (product.category !== previousCategory) {
        rows.push(
          <ProductCategoryRow key={product.category}
            category={product.category} />
        );
      }
      
      rows.push(
        <ProductRow key={product.name}
          name={product.name}
          price={product.price}
          stocked={product.stocked} />
      );

      previousCategory = product.category;
    });

    return rows;
  };

  return (
    <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {getTableRows()}
        </tbody>
      </table>
    </div>
  );
}
