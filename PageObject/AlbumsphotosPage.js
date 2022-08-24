
class Albumsphotos {
  constructor() {
    this.URL = '/albums/1/photos';
  }

  readElementPostion(array, position) {
    for (let index = 0; index < array.length; index++) {
      if (index == position) {
        const element = array[index];
        const convertToString = JSON.stringify(element);

        return convertToString;
      }
    }
  }
}

export default Albumsphotos
