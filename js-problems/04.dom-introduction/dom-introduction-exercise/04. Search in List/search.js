function search() {
   let inputText = document.querySelector('#searchText');
   let nodeTowns = document.querySelectorAll('#towns li');
   const matchedResult = document.querySelector('#result');

   let parsedTowns = [...nodeTowns];
   let searchedTown = inputText.value.trim();
   let matches = 0;

   if (searchedTown && searchedTown !== '') {
      for (const parsedTown of parsedTowns) {
         let currentTown = parsedTown.innerText.trim();
         if (currentTown.toLowerCase().includes(searchedTown.toLowerCase())) {
            matches++;
            parsedTown.style.fontWeight = 'bold';
            parsedTown.style.textDecoration = 'underline';
         }
      }

      matchedResult.innerText = `${matches} matches found`;
   }
}