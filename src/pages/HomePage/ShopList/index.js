import { ListItem } from '../ListItem/index.js';
import './style.css';

export const ShopList = (props) => {
  const { day, dayResult } = props;

  const element = document.createElement('div');
  element.classList.add('shoplist');
  element.innerHTML = `
    <div class="shoplist__head">
      <h2>${day}</h2>
    </div>
    <form class="shoplist__new">
      <div class="form-fields">  
        <input class="field-input product-input" type="text" />
        <input class="field-input amount-input" type="text" />
        <input class="field-input unit-input" type="text" />
      </div>
      <div class="form-controls">
        <button class="btn-add">Přidat</button>
      </div>
    </form>
    <div class="shoplist__items"></div>
  `;
  const handleAdd = (e) => {
    e.preventDefault();
    const productInput = element.querySelector('.product-input');
    const amountInput = element.querySelector('.amount-input');
    const unitInput = element.querySelector('.unit-input');

    console.log(productInput.value, amountInput.value, unitInput.value);

    // zde zajistíme přidání položky a překreslení komponenty
  };

  element.querySelector('.btn-add').addEventListener('click', handleAdd);

  if (dayResult === 'loading') {
    // zde zajistíme načtení položek a překreslení komponenty
    return element;
  }

  const itemsElement = element.querySelector('.shoplist__items');
  itemsElement.append(...dayResult.map((item) => ListItem(item)));

  return element;
};
