
const logoutButton = document.createElement('button'); logoutButton.innerText = 'Logout'

function setNav (status) {
  if (status === 'in') {
    loginPanel.remove()
    all.prepend(navBar)
    main.append(sideNav)
    main.append(workspaceEl)
    navBar.append(logoutButton)
    setLogoutEvent()
  } else {
    main.append(loginPanel)
    setNewUserFormEvent()
    logoutButton.remove()
  }
}

