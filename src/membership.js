

let currentUser = window.localStorage.getItem('currentUser') ? JSON.parse(window.localStorage.getItem('currentUser')) : null

// ===================== Login =======================
function authenticate () {
  if (!currentUser) {
    setNav("out")
    getUsers()
      .then(users => showLogin(users))
  } else {
    setNav("in")
    chooseWorkspace(currentUser)
  }
}
// ===================== Login =======================

// function showLoginButton () {

// }

function showLogin (users) {
  const logForm = document.createElement('form')
  logForm.innerHTML = `Username: <input type="text" name="username">
  <input type="submit" value="Log In">`
  logForm.id = 'logForm'
  document.body.append(logForm)
  logForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let currentUserAttempt = event.target.username.value
    if (users.find(user => user.username === currentUserAttempt)) {
      let test = users.find(user => user.username === currentUserAttempt)
      loginSuccess(test)
      logForm.remove()
    } else {
      const alert = "That user does not exist"
      logForm.append(alert)
    }
  })
}

function hideLogin () {
  let logForm = document.getElementById("logForm")
  logForm.remove()
}

const loginSuccess = user => {
  currentUser = user
  window.localStorage.setItem('currentUser', JSON.stringify(currentUser))
  newUserButton.remove()
  setNav("in")
  chooseWorkspace(currentUser)
}

// ===================== Logout =======================



function setLogoutEvent () {
  logoutButton.addEventListener("click", () => {
    logout ()
  })
}

function logout () {
  window.localStorage.removeItem('currentUser')
  window.location.reload()
}


// ===================== Create User =======================
let newUserButton = document.createElement('button')
newUserButton.innerText = 'Create Account'

function setNewUserFormEvent () {
  newUserButton.addEventListener('click', () => {
    newUserButton.innerText = 'Log In'
    createNewUserForm()
  })
  document.body.append(newUserButton)
}

function createNewUserForm () {
  hideLogin()
  const newUserForm = document.createElement('form')
  newUserForm.className = 'newUserForm'
  newUserForm.innerHTML = `
  <input type="hidden" name="password" value=""> 
  First name: <input type="text" name="name"><br>
  Username: <input type="text" name="username"><br>
  Email: <input type="text" name="email"><br>
  <input type="submit" value="Submit">`
  newUserForm.addEventListener('submit', (event) => {
    event.preventDefault()
    createUser({
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    })
    authenticate ()
  })
  document.body.append(newUserForm)
}
