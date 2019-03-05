

function getTestUser () {
  let currentUser
  getUsers()
    .then(resp => { 
      currentUser = resp[0]
      setWorkspace(currentUser) 
    })
}

// let currentUser = window.localStorage.getItem('currentUser') ? JSON.parse(window.localStorage.getItem('currentUser')) : null

// if (!currentUser) {
//   //show login
// } else {
//   // user is logged in, show dashboard
// }

// const loginSuccess = user => {
//   currentUser = user
//   window.localStorage.setItem('currentUser', JSON.stringify(currentUser))
// }
// login({username: "", password: ""})
//   .then(loginSuccess)
