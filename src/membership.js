

let currentUser = window.localStorage.getItem('currentUser') ? JSON.parse(window.localStorage.getItem('currentUser')) : null
let currentWorkspace = window.localStorage.getItem('currentWorkspace') && window.localStorage.getItem('currentWorkspace') !== 'undefined' ? JSON.parse(window.localStorage.getItem('currentWorkspace')) : null
let newWorkspaceButton = document.createElement('button')

// ===================== Login =======================
function authenticate () {
  if (!currentUser) {
    setNav("out")
    getUsers()
      .then(users => showLogin(users))
  } else {
    setNav("in")
    if (currentWorkspace) {
      showAllDocs(currentWorkspace)
      chooseWorkspace (currentUser)
    } else {
      chooseWorkspace(currentUser)
    }
  }
}
// ===================== Login =======================

// function showLoginButton () {

// }

function showLogin (users) {
  const logForm = document.createElement('form')
  logForm.id = 'logForm'
  logForm.className = 'logForm'
  logForm.innerHTML = `Username:<input type="text" name="username">
  <input type="submit" value="Log In" class="btn btn-primary">`

  loginPanelForm.append(logForm)
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
newUserButton.className = 'btn btn-link center'
newUserButton.innerText = 'Create Account'

function setNewUserFormEvent () {
  newUserButton.addEventListener('click', () => {
    newUserButton.remove()
    createNewUserForm()
  })
  loginPanelButtonContainer.append(newUserButton)
}

function createNewUserForm () {
  hideLogin()
  const newUserForm = document.createElement('form')
  const newUserFormDiv = document.createElement('div')
  newUserFormDiv.className = "form"
  newUserFormDiv.innerHTML = `
  <input type="hidden" name="password" value=""> 
  First name: <input type="text" name="name"><br>
  Username: <input type="text" name="username"><br>
  Email: <input type="email" name="email"><br>
  <input type="submit" value="Submit" class="btn btn-primary"><br>
  <input value="log in" class="btn btn-link">`
  newUserFormDiv.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log({
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    })
    authenticate()
  })
  // newUserFormDiv.addEventListener("click", (event) => {
  //   if (event.target.innerText === "log in") {
  //     console.log('blarg')
  //     window.reload()
  //   }

  newUserForm.append(newUserFormDiv)
  loginPanelForm.append(newUserForm)
}
