const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerArray = [];
const engineerArray = [];
const internArray = [];
const cardArray = [];


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'confirm',
        name: 'start',
        message: 'Would you like to start a Team Profile?',
      }])
      .then((answer) => {
          if (answer.start === true){promptUser2()}
          else console.log(`Have a great day! Please re-run when you would like to make a Team Profile.`)})
        .catch()
        };
const promptUser2 = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'managername',
        message: 'Please input your team manager name.',
      },
      {
        type: 'input',
        name: 'managerid',
        message: 'Please input the employee ID of your team manager.',
      },
      {
          type: 'input',
          name: 'manageremail',
          message: 'What is the email address of your team manager?',
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is the office number of your team manager?',
      }])
      .then((answer) => {
          const teamManager = new Manager(answer.managername, answer.managerid, answer.manageremail, answer.office);
          managerArray.push(teamManager);
          promptChoices();
    })
        .catch()}
    const promptChoices = () => {
        return inquirer.prompt([
      {
        type: 'list',
        name: 'choices',
        message: 'Please select one of the following to add to the team or complete the process:',
        choices: ['Engineer', 'Intern', 'Team Complete']
      }])
      .then((answer) => {
         if(answer.choices === `Engineer`){promptEngineer()}
         else if (answer.choices === `Intern`){promptIntern()}
         else if (answer.choices === `Team Complete`) {
            console.log('Team Building Completed! Creating Webpage!');
            writeTeamProfile();}
         
      })
        .catch() }
      const promptEngineer = () => {
        return inquirer.prompt([
      {
        type: 'input',
        name: 'engineername',
        message: 'What is the name of the engineer?',
      },
      {
        type: 'input',
        name: 'engineerid',
        message: 'What is the engineers employee ID number?',
      },
      {
        type: 'input',
        name: 'engineeremail',
        message: 'What is the email address of the engineer?',
      },
      {
        type: 'input',
        name: 'githubname',
        message: 'What is the Github username of the engineer?',
      }])
      .then((a) => {
        const eng = new Engineer(a.engineername, a.engineerid, a.engineeremail, a.githubname);
        engineerArray.push(eng);
        promptChoices();
      })
        .catch()}
      const promptIntern = () => {
        return inquirer.prompt([
      {
       type: 'input',
       name: 'internname',
       message: 'What is the name of the intern?',
      },
      {
        type: 'input',
        name: 'internid',
        message: 'What is the employee ID number of the intern?',
      },
      {
        type: 'input',
        name: 'internemail',
        message: 'What is the email address of the intern?',
      },
      {
        type: 'input',
        name: 'internschool',
        message: 'What is the name of the school the intern attends/attended?',
      }])
      .then((ans) => {
          const int = new Intern(ans.internname, ans.internid, ans.internemail, ans.internschool);
          internArray.push(int)
          promptChoices();
      })
      .catch();
      
  };
promptUser();

const writeTeamProfile = () => {
    managerArray.forEach(Manager => {
        const managerCard = `<div class="card" style="width: 18rem;">
        <div class="card-header manager">
        ${Manager.name}<br>
        <i class="fas fa-clipboard-check"></i> Manager
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.Id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${Manager.email}">${Manager.email}</a></li>
        <li class="list-group-item">Office: ${Manager.officeNumber}</li>
        </ul>
        </div>`;
        cardArray.push(managerCard);
        });
    engineerArray.forEach(Engineer => {
        const engineerCard =`<div class="card" style="width: 18rem;">
        <div class="card-header engineer">
        ${Engineer.name}<br>
        <i class="fas fa-feather"></i> Engineer
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.Id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${Engineer.email}">${Engineer.email}</a></li>
        <li class="list-group-item">Github: <a href="https://www.github.com/${Engineer.Githubname} target="_blank">${Engineer.Githubname}</a></li>
        </ul>
        </div>`;
        cardArray.push(engineerCard);
        });
    internArray.forEach(Intern => {
        const internCard = `<div class="card" style="width: 18rem;">
        <div class="card-header intern">
        ${Intern.name}<br>
        <i class="fas fa-graduation-cap"></i> Intern
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.Id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${Intern.email}">${Intern.email}</a></li>
        <li class="list-group-item">School: ${Intern.schoolName}</li>
        </ul>
        </div>`;
        cardArray.push(internCard);
    });
    writeHTML(); 
}
const writeHTML = () => {
    teamProfile =`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Team Profile</title>
        <style>
            body, html {
                height: 100%;
            }
            header {
                text-align: center;
                padding: 2%;
                font-size: 5em;
                color: white;
                background: rgb(56,6,80);
                background: linear-gradient(47deg, rgba(56,6,80,1) 0%, rgba(16,16,106,1) 53%, rgba(1,109,131,1) 100%);            height: 15%;
                }
            .card {
                margin: 1%;
                box-shadow: 5px 5px 3px 1px #999;
            }
            .manager {
                background-color: rgb(251, 41, 41);
                color: white;
                text-align: center;
                font-weight: 700;
                font-size: 1.5em;
                }
            .engineer {
                background-color: teal;
                color: white;
                text-align: center;
                font-weight: 700;
                font-size: 1.5em;
                }
            .intern {
                background-color: rgb(68, 208, 255);
                text-align: center;
                font-weight: 700;
                font-size: 1.5em;
                }
        </style>
    </head>
    <body>
    <header>Team Profile</header>
    <main class="container fluid">
        <section class="row" id="cards">
        ${cardArray.toString()}
        </section>
    </main>
    <script src="https://kit.fontawesome.com/347692fd4f.js" crossorigin="anonymous"></script>    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>    
    </body>
    </html>`
    fs.writeFile('./dist/teamprofile.html', teamProfile, (err) => console.error(err));

}
