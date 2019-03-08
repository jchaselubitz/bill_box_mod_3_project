
const logoutButton = document.createElement('button')
logoutButton.className = 'btn btn-light'
logoutButton.innerText = 'Logout'

function setNav (status) {
  if (status === 'in') {
    loginPanel.remove()
    all.prepend(navBar)
    main.append(sideNav)
    main.append(workspaceEl)
    navBar.append(logoutButton)
    // navBar.append(newWorkspaceButton)
    setLogoutEvent ()

  } else {
    main.append(loginPanel)
    setNewUserFormEvent()
    logoutButton.remove()
  }
}

