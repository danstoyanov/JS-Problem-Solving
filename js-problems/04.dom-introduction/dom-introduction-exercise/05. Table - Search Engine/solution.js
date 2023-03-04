function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let elements = document.querySelectorAll('tbody > tr');

   function onClick() {
      let inputValue = document.querySelector('#searchField').value.trim().toLocaleLowerCase();

      for (const element of elements) {
         if (element.textContent.trim().toLocaleLowerCase().includes(inputValue)) {
            element.setAttribute('class', 'select');
         } else {
            element.removeAttribute('class');
         }
      }
   }
}