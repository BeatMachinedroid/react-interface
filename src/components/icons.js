import { faSearch,faShoppingCart,faBars } from '@fortawesome/free-solid-svg-icons';
function Icons() {
  return (
    <div class="icons">
        <div class={faSearch} id="search-btn" ></div>
        <div class={faShoppingCart} id="cart-btn"></div>
        <div class={faBars} id="menu-btn"></div>
    </div>
  );
}

export default Icons;