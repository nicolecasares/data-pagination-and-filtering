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

// function createElement(elementName, property, value) {
//    const element = document.createElement(elementName);
//    element[property] = value;
//   }

const showPage = (list, page) => { 
  const start = (page * 9) - 9;
  const end = page * 9;
  const ul =  document.querySelector('.student-list');
  ul.innerHTML = '';

  for(let i = 0; list.length < 10; i++) {
      if(list[i] >= start && list[i] < end) {

         const createElement = (elementName, property, value) => {
            const element = document.createElement(elementName);
            element[property] = value;
         }

         // Creating all the elements for each student
         const li = createElement(li, className, 'student-item cf');
         const detailContainer = createElement(div, className, 'student-details');
         const profilePic = createElement(img, className, 'avatar');
            profilePic.src = '';
            profilePic.alt = ''; 
         const studentName = createElement(h3, className, 'email');
         const studentEmail = createElement(span, className, 'joined-details');
         const joinedContainer = createElement(div, className, 'joined-details'); 
         const joindDate = createElement(span, className, 'date');
         


      }
  }

};


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
