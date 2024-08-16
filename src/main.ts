import './css/style.css';
import FullList from './model/FullList';
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
  const input = document.getElementById("newItem") as HTMLInputElement;

  const modal = document.getElementById("itemExistsModal") as HTMLDivElement;
  const closeModalButton = document.getElementsByClassName("close")[0] as HTMLSpanElement;

  const closeModal = (): void => {
    modal.style.display = "none";
  };

  closeModalButton.onclick = closeModal;

  window.onclick = (event: MouseEvent): void => {
    if (event.target === modal) {
      closeModal();
    }
  };

  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const newEntryText: string = input.value.trim();
    if (!newEntryText.length) return;

    const existingItem = fullList.list.find(item => item.item.toLowerCase() === newEntryText.toLowerCase());

    if (existingItem) {
      modal.style.display = "block";
      return;
    }

    const newItem = new ListItem(undefined, newEntryText);
    fullList.addItem(newItem);
    template.render(fullList);

    input.value = '';
  });

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement;
  clearItems.addEventListener('click', (): void => {
    fullList.clearList();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
