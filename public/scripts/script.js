function renderView(view) {
  const content = document.getElementById("content");

  const templates = {
    addProduct: `
        <h2>Add Product</h2>
        <form enctype="multipart/form-data" method="POST">
        <input type="file" name="productImg" />
        <input type="text" placeholder="Product Name" name= "productname"/>
        <input type="number" placeholder="Price" name="price"/>
        <input type="text" placeholder="Product Description" name= "description"/>
        <button action = "submit">Add Product</button>
        </form>
      `,
    editProduct: `
        <h2>Edit Product</h2>
        <form enctype="multipart/form-data" method="PUT">
        <input type="text" placeholder="Enter the id of product you need to update" />
        <input type="text" placeholder="Updated Name" name = "updated name "/>
        <input type="number" placeholder="Updated Price" name = "updated price" />
        <input type="text"  name="description"/>
        <button action = "submit">Update Product</button>
        </form>
      `,
    deleteProduct: `
        <h2>Delete/Update Product</h2>
        <input type="text" placeholder="Enter Product ID" />
        <button>Delete Product</button>
      `,
    addBanner: `
        <h2>Add Banner</h2>
        <form enctype="multipart/form-data" method="POST" action="/dashboard/addbanner">
          <input type="text" name="title" placeholder="banner title" required />
          <input type="file" placeholder="banner" name="banner" required/>
          <button type="submit">Upload Banner</button>
        </form>
      `
  };

  content.innerHTML = templates[view] || "<h2>Welcome</h2>";
}
