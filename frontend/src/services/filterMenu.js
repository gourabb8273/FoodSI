/**
 * Filter menu item on given search item
 */
function filterMenu(product, searchText) {
  //searching
  if (!!searchText) {
    return product.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.subCategoryId.toLowerCase().includes(searchText.toLowerCase())
    );
  } else return product;
}

export default filterMenu;
