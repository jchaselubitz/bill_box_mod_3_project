


function getTestUser () {
  return getUsers()
    .then(resp => { 
      console.log(resp)
      setWorkspace(resp[0]) 
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
