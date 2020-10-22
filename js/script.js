/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// using this article https://medium.com/chingu/looping-over-arrays-and-objects-in-javascript-57e1188c1ba2

const showPage = (list, page) => { 
   // create two variables which will represent the index for the first and last student on the page
  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;
  // select the element with a class of `student-list` and assign it to a variable
  const ul =  document.querySelector('.student-list');
  // set the innerHTML property of the variable you just created to an empty string
  const studentList = ul;

studentList.innerHTML = '';

   // loop over the length of the `list` parameter
   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex){
         const studentItem = list[i];
         studentList.insertAdjacentHTML('beforeend',
         `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${studentItem.picture.thumbnail}" alt="Profile Picture">
           <h3>${studentItem.name.first} ${studentItem.name.last} </h3>
           <span class="email">${studentItem.email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${studentItem.date}</span>
         </div>
       </li> 
         `
         ); 
      } 
   }
};

const addPagination = (list) => {
   console.log(list);
   // create a variable to calculate the number of pages needed
   numOfPages = Math.ceil(list.length / 9);
  // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('ul.link-list');
  // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = '';
  // loop over the number of pages needed
   for(let i = 1; i <= numOfPages; i++) {
      linkList.insertAdjacentHTML('beforeend', 
      `
      <li>
         <button type="button">${i}</button>
      </li>
      `
      );
      const firstButton = document.querySelector('.pagination li:first-child button');
      firstButton.className = 'active';
   }
   linkList.addEventListener('click', (e) => {
      if(e.target.nodeName == "BUTTON") {
         const activeButton = document.querySelector('.active');
         activeButton.className = ' ';
         e.target.className = 'active';
         const page = e.target.textContent;
         showPage(list, page);

      }

   });

  // create an event listener on the `link-list` element
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments

};
// Call functions
showPage(data, 1);
addPagination(data);