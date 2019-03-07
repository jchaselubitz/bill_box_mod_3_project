//top navigation
const navBar = document.createElement('ul')
navBar.className = 'navbar nav bg-primary'
navBar.id = 'navBar'

//side navigation
const sideNav = document.createElement('ul')
sideNav.className = "col-2 bg-dark"

sideNav.id = 'sideNav'

//login/create panel
const loginPanel = document.createElement('div')
loginPanel.className = 'loginPanel container bg-white border border-secondary'


//workspace
const workspaceEl = document.createElement('div')
workspaceEl.className = "col bg-light"

//documents
const cardDeck = document.createElement('div')
cardDeck.className = 'card-deck'
workspaceEl.append(cardDeck)