let app = require('express')();
let parser = require('body-parser');
let fs = require('fs');
const PORT = 3000;
let crypto = require('crypto');

let person;

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.post('/signup', (req, res) => {
  let obj = { user: req.body.user, pw: crypto.createHash('sha256', req.body.password).digest('hex')}
  fs.writeFile(req.body.user + '.json', JSON.stringify(obj), (err) => {
    res.send("Account added. Log In to access facilities.");
  })
})
app.post('/login', (req, res) => {
  if (fs.existsSync(req.body.user + '.json')) {
    fs.readFile(req.body.user + '.json', (err, data) => {
      if (err) console.log(err);
      if (crypto.createHash('sha256', req.body.pw).digest('hex') == JSON.parse(data).pw) {
        person = JSON.parse(data);
        if (person.period1 && person.period2 && person.period3 && person.period4 && person.period5 && person.period6 && person.period7 && person.period8 && person.lunch) {
          fs.writeFile('main.html', main + hasSched + mainEnd, err => {
            console.log(err);
            res.sendFile(__dirname + '/main.html');
          })
        } else {
          fs.writeFile('main.html', main + noSched + mainEnd, err => {
            console.log(err);
            res.sendFile(__dirname + '/main.html');
          })
        }
      } else {
        res.send("Wrong Password.");
      }
    })
  } else {
    res.send("User does not exist.");
  }
})
app.post('/schedule', (req, res) => {
  if (person) {
    fs.readFile(person.user + '.json', (err, data) => {
      person = JSON.parse(data);
      person.period1 = req.body.period1;
      person.period2 = req.body.period2;
      person.period3 = req.body.period3;
      person.period4 = req.body.period4;
      person.period5 = req.body.period5;
      person.period6 = req.body.period6;
      person.period7 = req.body.period7;
      person.period8 = req.body.period8;
      person.lunch = req.body.luncha == 'on' ? 'A' : 'B';
      fs.writeFile(person.user + '.json', JSON.stringify(person), err1 => {
        console.log(err1);
      })
      res.send("Schedule made. Go back to your facilities to see your schedule.");
    })
  } else {
    res.send('You are not logged in.');
  }
})
let hasSched = `
<div class="app" data-redir="https://CodeDay2022.rayscript.repl.co/sched.html">Schedule</div>
`
let noSched = `<div class="app" data-redir="https://CodeDay2022.rayscript.repl.co/schedule.html">Make Schedule</div>`
let main = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>My Schedule</title>
  <link href="https://CodeDay2022.rayscript.repl.co/style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <h1>Codes made by 7th graders Rian Chadha and Anakin Dasgupta.</h1>
  <h2>Every project here is made by us or our alt accounts.</h2>
  <div class="library">
    <div class="app" data-redir="https://flashcards.rayscript.repl.co">
      Flashcard Maker
    </div>
    <div class="app" data-redir="https://todo-app.shadowcodesjs.repl.co/">
      Student Agenda
    </div>
    <div class="app" data-redir="https://CodeDay2022.rayscript.repl.co/timer.html">
      Timer
    </div>
    <div class="app" data-redir="https://mathorg.rascript.repl.co/practice.html">Math.org Practice</div>
    <div class="app" data-redir="https://CodeDay2022.rayscript.repl.co/sciencepractice.html">Science Quiz</div>
    <div class="app" data-redir="https://codeday2022.rayscript.repl.co/elapractice.html">ELA Quiz</div>
`;
let mainEnd = `
  </div>
  <script>
    let apps = document.querySelectorAll('.app');
    apps.forEach(app => {
      app.onclick = function(e) {
        location.href = e.target.getAttribute('data-redir');
      }
    })
  </script>
</body>

</html>`;
let beginHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>My Schedule</title>
  <link href="https://CodeDay2022.rayscript.repl.co/style.css" rel="stylesheet" type="text/css" />
</head>

<body>
`
let endHtml = `
</body></html>
`
app.post('/my-sched', (req, res) => {
  res.sendFile(__dirname + '/sched.html');
  if (req.body.day.toLowerCase() == 'a') {
      fs.writeFile('sched.html', `${beginHtml}<table><tr><th>Class</th><th>Timings</th></tr><tr><td>${person.period1}</td><td>8:00-8:54 AM</td></tr><tr><td>${person.period2}</td><td>8:58-9:50 AM</td></tr><tr><td>${person.period3}</td><td>9:54-10:46 AM</td></tr>${person.lunch == 'A' ? `<tr><td>Lunch</td><td>10:49-11:20 AM</td></tr><tr><td>Study Hall</td><td>11:28-12:04 PM</td></tr>` : `<tr><td>Study Hall</td><td>10:49-11:24 AM</td></tr><tr><td>Lunch</td><td>11:28-12:04 AM</td></tr>`}<tr><td>${person.period5}</td><td>12:06-12:58 PM</td></tr><tr><td>${person.period6}</td><td>12:58-1:54 PM</td></tr><tr><td>${person.period7}</td><td>1:58-2:50 PM</td></tr></table>${endHtml}`, err => {
        console.log(err);
    });
  }
    if (req.body.day.toLowerCase() == 'b') {
      fs.writeFile('sched.html', `${beginHtml}<table><tr><th>Class</th><th>Timings</th></tr><tr><td>${person.period4}</td><td>8:00-8:54 AM</td></tr><tr><td>${person.period1}</td><td>8:58-9:50 AM</td></tr><tr><td>${person.period2}</td><td>9:54-10:46 AM</td></tr>${person.lunch == 'A' ? `<tr><td>Lunch</td><td>10:49-11:24 AM</td></tr><tr><td>Study Hall</td><td>11:28-12:04 PM</td></tr>` : `<tr><td>Study Hall</td><td>10:49-11:28 AM</td></tr><tr><td>Lunch</td><td>11:28-12:04 AM</td></tr>`}<tr><td>${person.period8}</td><td>12:06-12:58 PM</td></tr><tr><td>${person.period5}</td><td>12:58-1:54 PM</td></tr><tr><td>${person.period6}</td><td>1:58-2:50 PM</td></tr></table>${endHtml}`, err => {
        console.log(err);
      });
    }
    if (req.body.day.toLowerCase() == 'c') {
      fs.writeFile('sched.html', `${beginHtml}<table><tr><th>Class</th><th>Timings</th></tr><tr><td>${person.period3}</td><td>8:00-8:54 AM</td></tr><tr><td>${person.period4}</td><td>8:58-9:50 AM</td></tr><tr><td>${person.period1}</td><td>9:54-10:46 AM</td></tr>${person.lunch == 'A' ? `<tr><td>Lunch</td><td>10:49-11:24 AM</td></tr><tr><td>Study Hall</td><td>11:28-12:04 PM</td></tr>` : `<tr><td>Study Hall</td><td>10:49-11:25 AM</td></tr><tr><td>Lunch</td><td>11:28-12:04 AM</td></tr>`}<tr><td>${person.period7}</td><td>12:06-12:58 PM</td></tr><tr><td>${person.period8}</td><td>12:58-1:54 PM</td></tr><tr><td>${person.period1}</td><td>1:58-2:50 PM</td></tr></table>${endHtml}`, err => {
        console.log(err);
      });
    }
    if (req.body.day.toLowerCase() == 'd') {
      fs.writeFile('sched.html', `${beginHtml}<table><tr><th>Class</th><th>Timings</th></tr><tr><td>${person.period2}</td><td>8:00-8:54 AM</td></tr><tr><td>${person.period3}</td><td>8:58-9:50 AM</td></tr><tr><td>${person.period4}</td><td>9:54-10:46 AM</td></tr>${person.lunch == 'A' ? `<tr><td>Lunch</td><td>10:49-11:24 AM</td></tr><tr><td>Study Hall</td><td>11:28-12:04 PM</td></tr>` : `<tr><td>Study Hall</td><td>10:49-11:24 AM</td></tr><tr><td>Lunch</td><td>11:28-12:04 AM</td></tr>`}<td>${person.period6}</td><td>12:06-12:58 PM</td></tr><tr><td>${person.period7}</td><td>12:58-1:54 PM</td></tr><tr><td>${person.period8}</td><td>1:58-2:50 PM</td></tr></table>${endHtml}`, err => {
        console.log(err);
    });
  }
})
app.listen(200);