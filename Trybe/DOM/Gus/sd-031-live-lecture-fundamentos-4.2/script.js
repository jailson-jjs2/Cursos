const randomIndex = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const students31 = {
  studentsInfo: [
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U013K7V5JGP-93cc1b1a7783-512",
      trybe: "CH31",
      student_name: "Gustavo Abreu Caetano",
      project_lessons_learned: 10000,
      project_playground_functions: 10000
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02HY56K3V1-576c178143fd-512",
      trybe: "CH31",
      student_name: "Lucas Leal",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02SH49DQUB-b22fbde163e8-512",
      trybe: "CH31",
      student_name: "Renan Leandro Fernandes",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U01UA4J9FML-a3ed66f524ec-512",
      trybe: "CH31",
      student_name: "Ana Carolina Mendes Duarte",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02SVNBPXLZ-eac72fc5ebaa-512",
      trybe: "CH31",
      student_name: "Emanuelli Zequinelli Rosa dos Santos",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02C7E7MS07-dfd764f5f8ff-512",
      trybe: "CH31",
      student_name: "Matheus Guedes Ribeiro",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U02NR1BLCCT-b1e9a35faaad-512",
      trybe: "CH31",
      student_name: "Natássia Rafaelle Medeiros Siqueira",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U03A4LULS9F-2e920b87d97a-512",
      trybe: "CH31",
      student_name: "Vitor Mauricio Cardoso",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    },
    {
      picture: "https://ca.slack-edge.com/TM13XHBBQ-U01JXK7AV4J-45261d13fc93-512",
      trybe: "CH31",
      student_name: "Eliezer Queiroz",
      project_lessons_learned: randomIndex(0, 100),
      project_playground_functions: randomIndex(0, 100)
    }
  ]
}

const futureProjects = {
  fundamentos: [
    {
      secao: 4,
      project_name: 'Pixels Art',
    },
    {
      secao: 5,
      project_name: 'Trybewarts',
    },
    {
      secao: 6,
      project_name: 'Unit Tests',
    },
    {
      secao: 7,
      project_name: 'Zoo Functions',
    }
  ],
  front_end: [
    {
      secao: 1,
      project_name: 'Shopping Cart',
    },
    {
      secao: 2,
      project_name: 'Solar System',
    },
    {
      secao: 3,
      project_name: 'Tryunfo',
    },
    {
      secao: 4,
      project_name: 'TrybeTunes',
    },
    {
      secao: 5,
      project_name: 'Front-end Online Store',
    },
    {
      secao: 6,
      project_name: 'Testes em React',
    },
    {
      secao: 7,
      project_name: 'Trybe Wallet',
    },
    {
      secao: 8,
      project_name: 'Jogo de Trivia',
    },
    {
      secao: 9,
      project_name: 'StarWars Datatable com Context API e Hooks',
    },
    {
      secao: 10,
      project_name: 'App de Receitas',
    }
  ],
  back_end: [
    {
      secao: 1,
      project_name: 'Docker Todo-List',
    },
    {
      secao: 2,
      project_name: 'All For One',
    },
    {
      secao: 3,
      project_name: 'One For All',
    },
    {
      secao: 4,
      project_name: 'Talker Manager',
    },
    {
      secao: 5,
      project_name: 'Store Manager',
    },
    {
      secao: 6,
      project_name: 'API de Blogs',
    },
    {
      secao: 8,
      project_name: 'Trybesmith',
    },
    {
      secao: 9,
      project_name: 'Trybers and Dragons',
    },
    {
      secao: 10,
      project_name: 'TFC - Trybe Futebol Clube',
    },
    {
      secao: 11,
      project_name: 'Commerce',
    },
    {
      secao: 12,
      project_name: 'Car Shop',
    },
    {
      secao: 13,
      project_name: 'App de Delivery',
    },
  ],
  ciencia_computacao: [
    {
      secao: 1,
      project_name: 'Job Insights',
    },
    {
      secao: 2,
      project_name: 'Relatório de Estoque',
    },
    {
      secao: 3,
      project_name: 'Tech News',
    },
    {
      secao: 4,
      project_name: 'Algoritmos',
    },
    {
      secao: 5,
      project_name: 'TING - Trybe is Not Google',
    },
    {
      secao: 6,
      project_name: 'Restaurant Orders',
    },
  ]
}

const studentName = document.getElementById('name');
const gradeLessonsLearned = document.getElementById('gradeLessonsLearned');
const gradePlayground = document.getElementById('gradePlayground');
const picture = document.getElementById('picture');
const results = document.querySelector('#results');
const newProjects = document.querySelector('.future-projects');
const selectName = document.getElementById('selectName');

const getRandomStudent = () => {
  const array = students31.studentsInfo;
  const index = randomIndex(0, array.length - 1);
  
  studentName.innerHTML = `${array[index].student_name} - ${array[index].trybe}`;
  gradeLessonsLearned.innerHTML = `${array[index].project_lessons_learned}%`;
  gradePlayground.innerHTML = `${array[index].project_playground_functions}%`;
  picture.src = array[index].picture;
}

const verifyGrades = () => {
  getRandomStudent();

  if (parseInt(gradeLessonsLearned.innerHTML) >= 80 && parseInt(gradePlayground.innerHTML) >= 80) {
    results.innerHTML = 'ENTREGUE!';
    results.className = 'green';
  } else {
    results.innerHTML = 'AINDA NÃO ENTREGUE.';
    results.className = 'red';
  }
}

const createProjectList = () => {
  const newTitle = document.createElement('h2');
  newTitle.innerHTML = 'Projetos Futuros:';
  newProjects.appendChild(newTitle);
  
  for (const key in futureProjects) {
    const title = document.createElement('h3');
    title.innerHTML = key;
    title.style.fontSize = '40px';
    newProjects.appendChild(title);
    for (let index = 0; index < futureProjects[key].length; index += 1) {
      const elem = futureProjects[key][index];
      const newParagraph = document.createElement('p');
      newParagraph.innerHTML = elem.project_name;
      newProjects.appendChild(newParagraph);
    }
  }
}

const createSelect = () => {
  for (let index = 0; index < students31.studentsInfo.length; index += 1) {
    const newOption = document.createElement('option');
    newOption.innerHTML = students31.studentsInfo[index].student_name;
    selectName.appendChild(newOption);
  }
}

verifyGrades();
createProjectList();
createSelect();
