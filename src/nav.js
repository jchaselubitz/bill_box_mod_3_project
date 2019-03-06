const navBar = document.querySelector('#navBar')
const logoutButton = document.createElement('button'); logoutButton.innerText = 'Logout'

function setNav (status) {
  if (status === 'in') {
    navBar.append(logoutButton)
    setLogoutEvent()
  } else {
    setNewUserFormEvent()
    logoutButton.remove()
  }
}

