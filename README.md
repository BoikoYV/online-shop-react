### Online Store of goods for pets 🐶🏠

#### React (React Roating, React Hooks), Redux (Thunk)


*📝The project is still in development*

[Live Demo](https://online-shop-react.vercel.app/)

### 📚About the project

Online store of houses for pets consists of 3 pages:
- Home (Catalog);
- Cart;
- Favorites;

![image](https://user-images.githubusercontent.com/68449997/138617518-7d8facff-1b8e-4a78-aea4-7927828eec42.png)


#### 📘Functional:
- interaction with the cart (adding and removing products);
- interaction with favorites (adding and removing products);
- synchronization of products in the cart, favorites with the Local storage;
- clarifying modal windows before adding and removing products;
- showing skeleton loader using `react-content-loader`;
- substitute the default image if the product doesn`t have photo;
- selection products` count in the cart and calculation of the total amount of this product;
- block with general information about the order, the total amount;
- the ability to enter a promotional code for a specific discount;
- get guest promocode by clicking on the animated dog;

<img src="https://user-images.githubusercontent.com/68449997/139599093-54e25a8a-697a-429f-a675-58fd1f21b689.png" height="150">

- checkout modal with information about the order and customer (if there is a lot of information in the modal window, it can be scrolled);
- form of order data information (name , number , where and how to deliver) with validation;
- unit tests of most used components: modal and buttons, using Jest and testing-library;

#### 🎥 App video demo:

https://user-images.githubusercontent.com/68449997/139599195-04bb8141-513f-459d-a7bc-87badf1f7de8.mp4



#### 📒The following features are planned to be added:
- page of 1 product;
- main page;
- make adaptive for all pages;
