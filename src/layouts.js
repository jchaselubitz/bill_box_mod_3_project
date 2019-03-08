//top navigation
const navBar = document.createElement('ul')
navBar.className = 'navbar nav'
navBar.id = 'navBar'

//side navigation
const sideNav = document.createElement('ul')
sideNav.className = "col-2 bg-dark"

sideNav.id = 'sideNav'

//login/create panel
const loginPanel = document.createElement('div')
loginPanel.className = 'loginPanel container bg-white border border-secondary'

loginPanelForm = document.createElement('div')
//loginPanelForm.className = "loginPanelForm"

loginPanelButtonContainer = document.createElement('div')
loginPanelButtonContainer.className = 'loginPanelButtonContainer'

loginPanel.append(loginPanelForm)
loginPanel.append(loginPanelButtonContainer)


//workspace
const workspaceEl = document.createElement('div')
workspaceEl.className = "workspace col bg-light"



//documents
const cardDeck = document.createElement('div')
cardDeck.className = 'card-deck'
workspaceEl.append(cardDeck)

const main = document.getElementById('main')