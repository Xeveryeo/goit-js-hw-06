let categories = document.getElementsByClassName("item");
console.log("Number of categories: " + categories.length);

for (let i = 0; i < categories.length; i++) {
  const categoryTitle = categories[i].firstElementChild.innerHTML;
  console.log(`Category: ${categoryTitle}`);

  const categoryItems = categories[i].getElementsByTagName("li");
  const categoryItemsCount = categoryItems.length;
  console.log(`Elements: ${categoryItemsCount}`);
}