window.onload = function() {

  let container = this.document.querySelector(".container");
  let ul = this.document.querySelector("#pagination");
  let listCl = this.document.querySelector("#Mlist");
  let nolistCl = this.document.querySelector("#Mnolist");
  
  let arrObj = [
    {img: "img/th3.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th12.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th6.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th7.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th8.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th9.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th10.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th11.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th12.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th13.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th14.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th15.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th16.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th17.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th18.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th19.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th3.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th11.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th7.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th15.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th8.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th8.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th19.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th3.jpg",name: "some Plant" , description: "some Desription", value: "28$"},
    {img: "img/th3.jpg",name: "some Plant" , description: "some Desription", value: "28$"}
  ];
  
  let itemsOnPage = 8;
  let liCount = Math.ceil(arrObj.length / itemsOnPage);
  let arrOfNodes = createArrOfItems();
  let arrOfLi = [];
  let active;

  // Создаю пагинацию и вешаю событие на каждую
  
  for(let i = 1; i <= liCount; i++){
    let li = document.createElement('li');
    li.innerHTML = i;
    ul.appendChild(li);
    arrOfLi.push(li);
  }
  
  for(let li of arrOfLi){
    li.addEventListener('click',function(){
      displayItems(this);
    })
  }

  //...
  
  // Вывожу первую страницу

  displayItems(arrOfLi[0]);
  
  // Функция вывода

  function displayItems(li){
         if(active){
          active.classList.remove('active');
         }
         active = li;

         li.classList.add('active');

         let numOfpage = +li.innerHTML;
         
         let start = (numOfpage - 1) * itemsOnPage;
         let end = start + itemsOnPage;
         
         let currentItems = arrOfNodes.slice(start, end);
         container.innerHTML = '';
  
         for(let items of currentItems){
          container.appendChild(items);
         }
   }
  

  //Создаю массив Node элемментов из обычного массива;

  function createArrOfItems(){
      let tmpArr = [];
      for(let i = 0; i < arrObj.length; i++){
      let row = document.createElement('div');
      row.classList.add('column');
      
      createImg(arrObj[i].img, row);
      createCell(arrObj[i].name, row);
      createCell(arrObj[i].description, row);
      createCell(arrObj[i].value, row);

      tmpArr.push(row);
    }
    return tmpArr;

    //Вложенные функции на создания яечек
  
    function createImg(src, row){
      var myImage = new Image(75, 75);
      myImage.src = src;
      row.appendChild(myImage);
    }

    function createCell(text, row){
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.innerHTML = text;
      row.appendChild(cell);
    }

  }

  // Переключение режимов показа
  
  listCl.onclick = function(){
    container.classList.remove('modeNoList');
    let i = 0;
    while(arrOfNodes[i]){
    arrOfNodes[i].className = 'column';
    arrOfNodes[i].firstElementChild.style.width = '75px';
    i++;
    }
    
  }

  nolistCl.onclick = function(){
    let i = 0;
    container.classList.add('modeNoList');
    while(arrOfNodes[i]){
      arrOfNodes[i].className = 'row';
      arrOfNodes[i].firstElementChild.style.width = '200px';
      i++;
    }
    
    }

  
}  

        
  
   
