const filters = document.querySelectorAll('.filter__item');
const triangles = document.querySelectorAll('.triangle');
let filter = {
   '0': false, //hasDesign
   '1': false, //hasLogo
   '2': false, //hasPhotography
   '3': false, //hasPoster
   '4': false, //hasResources
   '5': false, //hasTShirts
   '6': false //hasVidoes
};

for (let i = 0; i < filters.length; i++) {
   filters[i].onclick = (event) => {
      if (filter[i] == false) {
         filter[i] = true;
         triangles[i].style = 'border-top: 15px solid transparent; border-right: 20px solid #7ababa; border-bottom: 15px solid transparent;';
         event.currentTarget.style = 'background-color: #7ababa';

         const listFilter = Object.values(filter);
         let hasFilter = false;
         for(let i of listFilter) if (i === true) hasFilter = true;
         if (hasFilter) AllAddWorks()
         else firstAddWorks();
      }
      else {
         filter[i] = false;
         triangles[i].style = 'border-top: 15px solid transparent; border-right: 20px solid rgb(251, 250, 246); border-bottom: 15px solid transparent;';
         event.currentTarget.style = 'background-color: rgb(251, 250, 246)';
         
         const listFilter = Object.values(filter);
         let hasFilter = false;
         for(let i of listFilter) if (i === true) hasFilter = true;
         if (hasFilter) AllAddWorks()
         else firstAddWorks();
      }
   };
}

async function lastDates() {
   let works = await fetch('js/works.json');
   works = await works.json();
   let listWorks =[]

   let hasFilter = false;
   const listFilter = Object.values(filter);
   for(let i of listFilter) if (i === true) hasFilter = true;

   if (hasFilter === false) {
      works.sort((a, b) => new Date(b["date"]) - new Date(a["date"]));
      return works;
   } else {
      works.sort((a, b) => new Date(b["date"]) - new Date(a["date"]));
      works = works.filter((a) => {
         a["filter"].forEach(elem => {
            if (filter[elem]) {
               listWorks.push(a);
            }
         });
      });
      const res = listWorks.reduce((o, i) =>  {
         if (!o.find(v => v.name == i.name)) {
            o.push(i);
         }
         return o;
      }, []);
      return res;
   }
}


firstAddWorks();
async function firstAddWorks() {
   const works = await lastDates();
   document.querySelector('.works').remove();
   const portfolioWorks = document.createElement('div');
   portfolioWorks.className = "works";
   document.querySelector('.portfolio_section__works').append(portfolioWorks);

   for (let i = 0; i < 6; i++) {
      const work = document.createElement('div');
      work.className = "work";
      const workInfo = document.createElement('div');
      workInfo.className = "work_info";
      const workDate = new Date(works[i]["date"]);
      workInfo.innerHTML = `
      Name: ${works[i]["name"]} <br>
      Date: ${workDate.getDate()}/${workDate.getMonth()}/${workDate.getFullYear()} <br>
      Technology: ${works[i]["technology"]} <br>
      Price: ${works[i]["price"]}
      `;
      work.onmouseover = () => { work.append(workInfo) };
      work.onmouseout = () => { workInfo.remove() };

      const workImg = document.createElement('img');
      workImg.alt = "Error";
      const workIcon = document.createElement('div');
      workIcon.className = "work__icon";
      const workIconImg = document.createElement('img');
      workIconImg.alt = "Error";
      const workText = document.createElement('div');
      workText.className = "work__text";

      portfolioWorks.append(work);
      workImg.src = works[i]["img"];
      work.append(workImg);
      work.append(workIcon);
      workIconImg.src = works[i]["icon"];
      workIcon.append(workIconImg);
      workText.innerHTML = works[i]["name"];
      work.append(workText);
   }
}



async function AllAddWorks() {
   const works = await lastDates();
   document.querySelector('.works').remove();
   const portfolioWorks = document.createElement('div');
   portfolioWorks.className = "works";
   document.querySelector('.portfolio_section__works').append(portfolioWorks);

   for (let i = 0; i < works.length; i++) {
      const work = document.createElement('div');
      work.className = "work";
      const workInfo = document.createElement('div');
      workInfo.className = "work_info";
      const workDate = new Date(works[i]["date"]);
      const workImg = document.createElement('img');
      workImg.alt = "Error";

      workInfo.innerHTML = `
      Name: ${works[i]["name"]} <br>
      Date: ${workDate.getDate()}/${workDate.getMonth()}/${workDate.getFullYear()} <br>
      Technology: ${works[i]["technology"]} <br>
      Price: ${works[i]["price"]}
      `;
      work.onmouseover = () => { 
         work.append(workInfo);
      };
      work.onmouseleave = () => { 
         workInfo.remove();
      };

      const workIcon = document.createElement('div');
      workIcon.className = "work__icon";
      const workIconImg = document.createElement('img');
      workIconImg.alt = "Error";
      const workText = document.createElement('div');
      workText.className = "work__text";

      portfolioWorks.append(work);
      workImg.src = works[i]["img"];
      work.append(workImg);
      work.append(workIcon);
      workIconImg.src = works[i]["icon"];
      workIcon.append(workIconImg);
      workText.innerHTML = works[i]["name"];
      work.append(workText);
   }
}

const worksAll = document.createElement('div');
worksAll.className = 'works__all';
worksAll.innerHTML = 'BROWSE ALL';
document.querySelector('.portfolio_section').append(worksAll);
worksAll.onclick = () => {
   if (worksAll.innerHTML == 'BROWSE ALL') {
      for (let i = 0; i < filters.length; i++) filters[i].click();
      worksAll.innerHTML = 'HIDE ALL';
   }
   else {
      for (let i = 0; i < filters.length; i++) filters[i].click();
      worksAll.innerHTML = 'BROWSE ALL';
   }
};