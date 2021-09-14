function solve() {

   document.querySelector('button').addEventListener('click', createMyArticle);
   let [myAuthor, myTitle, myCategory] = document.querySelectorAll('input');
   let myTextAreaInput = document.querySelector('textarea');
   let myMainSection = document.querySelectorAll(`main section`)[0];

   function createMyArticle() {
      let title = myTitle.value;
      let author = myAuthor.value;
      let category = myCategory.value;
      let content = myTextAreaInput.value;
      myTitle.value = '';
      myAuthor.value = '';
      myCategory.value = '';
      myTextAreaInput.value = '';
      const article = document.createElement('article');

      const h1 = e('h1', title); // TITLE
      const categoryP = e('p', `Category: `); // CATEGORY
      article.appendChild(categoryP);
      let categoryStrong = e('strong', category);
      categoryP.appendChild(categoryStrong);
      categoryP.style.display == 'normal'
      h1.appendChild(categoryP);

      const creatorP = e('p', `Creator: `); // CREATOR
      article.appendChild(creatorP);
      let creatorStrong = e('strong', author);
      creatorP.appendChild(creatorStrong);
      creatorP.style.display == 'normal'
      h1.appendChild(creatorP);

      const contentP = e('p', content);
      contentP.style.display == 'normal'
      h1.appendChild(contentP); // CONTENT

      const myTwoButtons = e('div', undefined, "buttons");
      let deleteBtn = createElement('button', 'Delete', [`class=btn delete`]);
      let archiveBtn = createElement('button', 'Archive', ["class=btn archive"]);
      myTwoButtons.appendChild(deleteBtn);
      myTwoButtons.appendChild(archiveBtn);
      h1.appendChild(myTwoButtons);
      article.appendChild(h1);
      myMainSection.appendChild(article);
      deleteBtn.addEventListener('click', () => deleteContent);
      archiveBtn.addEventListener('click', () => archiveContent(title));
      sortTitles();

      function sortTitles() {
         Array
         .from(article.children)
         .sort((a,b) => a.textContent.localeCompare(b.textContent))
         .forEach(g => article.appendChild(g));
     }
   }

   function deleteContent(e) {
      let li = e.target.parentNode;
      console.log(li);
      let ul = li.parentNode;
      console.log(ul);
      let module = ul.parentNode;
      console.log(module);
      li.remove();
      if (ul.children.length === 0) {
         module.remove();
      }
   }

   function archiveContent(title) {
      let ol = document.querySelector('ol');
      let onlyTitle = e('li', title);
      ol.appendChild(onlyTitle);
   }

   function e(type, content, className) {
      const result = document.createElement(type);
      result.textContent = content;
      if (className) {
         result.className = className;
      }
      return result;
   }

   function createElement(type, text, attributes = []) {
      let element = document.createElement(type);
      if (text) {
         element.textContent = text;
      }
      attributes.map(attr => attr.split('=').forEach(([name, value]) => {
         element.setAttribute(name, value);
      }));

      return element;
   }
}
