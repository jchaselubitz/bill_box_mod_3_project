
const workspaceEl = document.querySelector('#workspace')
let newWorkspaceButton = document.createElement('button')

function chooseWorkspace (currentUser) {
  let workspacesArray = currentUser.workspaces
  let select = document.createElement('select')
  select.id = 'workspaceChooser'
  let opt = document.createElement('option')
  opt.textContent = "Select Workspace"
  select.append(opt)
  for (const workspace of workspacesArray) {
    let opt = document.createElement('option')
    opt.value = workspace.id
    opt.textContent = workspace.name
    select.append(opt)
  }
  setNewWorkspaceFormEvent()
  workspaceEl.append(newWorkspaceButton)

  select.addEventListener('change', () => setWorkspace(workspacesArray.find(workspace => workspace.id.toString() === select.value)))
  navBar.append(select)
}

function setWorkspace (workspace) {
  let currentWorkspace = workspace
  createWorkspaceThing()
  showAllDocs(currentWorkspace)
}

function createWorkspaceThing () {
  setLogoutEvent ()
}

// ===================== Create Workspace =======================


function setNewWorkspaceFormEvent () {
  newWorkspaceButton.innerText = 'Create Workspace'
  newWorkspaceButton.addEventListener('click', () => {
    createNewWorkspaceForm()
  })
}

function createNewWorkspaceForm () {
  const newWorkspaceForm = document.createElement('form')
  newWorkspaceForm.className = 'newWorkspaceForm'
  newWorkspaceForm.innerHTML = `
  Name your workspace: <input type="text" name="name"><br>
  <input type="hidden" name="user" value="${currentUser.id}"><br>
  <input type="submit" value="Submit">`
  document.body.append(newWorkspaceForm)
  newWorkspaceForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log({
    //   name: event.target.name.value,
    //   user: event.target.user.value
    // })
    createWorkspace({
      name: event.target.name.value,
      user: event.target.user.value
    })
  })
}
