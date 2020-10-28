import item from './item';

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

function findAndUpdate(id, newData){
  const currentItem = this.findById(id);
  Object.assign(currentItem, newData);
}


const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  findAndUpdate,
  addItem,
  findAndDelete,
  toggleCheckedFilter
};