const { createElement } = require('parse5/lib/tree-adapters/default');

const worksection = document.getElementById('workingprojectid');

let containerid = ['firstdiv', 'secondiv', 'thirdiv', 'fourthdiv'];
function createproject(id, i) {
  const firstdiv = document.createElement('div');
  firstdiv.className = 'section-workproject bg-white';
  firstdiv.id = 'section-workproject bg-white';
}

containerid.forEach((item, i) => {
  //   worksection.appendChild(createproject(item, i));
  createproject(item, i);
});
