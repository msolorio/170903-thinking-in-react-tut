import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable(props) {

  function getTableRows() {
    const rows = [];
    let previousCategories = [];
    const productsClone = props.products.slice(0);

    productsClone.sort((a, b) => {
      return a.category < b.category;
    });

    productsClone.forEach((product) => {

      if (product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) < 0) return;

      if (props.inStockOnly && !product.stocked) return;

      if (previousCategories.indexOf(product.category) < 0) {
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

      previousCategories.push(product.category);
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
