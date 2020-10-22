/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/




/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// using this article https://medium.com/chingu/looping-over-arrays-and-objects-in-javascript-57e1188c1ba2

const showPage = (list, page) => { 
   // create two variables which will represent the index for the first and last student on the page
  const start = (page * 9) - 9;
  const end = page * 9;
  // select the element with a class of `student-list` and assign it to a variable
  const ul =  document.querySelector('.student-list');
  // set the innerHTML property of the variable you just created to an empty string
  const studentList = ul.innerHTML = '';

   // loop over the length of the `list` parameter
   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex){
         studentList = `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
           <h3>Ethel Dean</h3>
           <span class="email">ethel.dean@example.com</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined 12-15-2005</span>
         </div>
       </li> 
         
         `; 
      }
      
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {

}

showPage(0, 0);

// Call functions
