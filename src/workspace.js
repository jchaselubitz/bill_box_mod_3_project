


function chooseWorkspace (currentUser) {
  let workspacesArray = currentUser.workspaces
  let select = document.createElement('select')
  navBar.append(select)
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
  navBar.append(newWorkspaceButton)

  select.addEventListener('change', () => setWorkspace(workspacesArray.find(workspace => workspace.id.toString() === select.value)))
  
}

function setWorkspace (workspace) {
  
  let currentWorkspace = workspace
  window.localStorage.setItem('currentWorkspace', JSON.stringify(currentWorkspace))
  console.log(currentWorkspace)
  showAllDocs(currentWorkspace)
}



// ===================== Create Workspace =======================


function setNewWorkspaceFormEvent () {
  newWorkspaceButton.innerText = '+'
  newWorkspaceButton.id = 'newWorkspaceButton'
  newWorkspaceButton.addEventListener('click', () => {
    createNewWorkspaceForm()
    listWorkspaces()
  })
}
const newWorkspaceForm = document.createElement('form')
function createNewWorkspaceForm () {
  newWorkspaceForm.className = 'form-group'
  newWorkspaceForm.innerHTML = `
  Name your workspace: <input type="text" name="name"><br>
  <input type="hidden" name="name" value="${currentUser.id}"><br>
  <input type="submit" value="Submit">`
  workspaceEl.prepend(newWorkspaceForm)
  newWorkspaceForm.addEventListener('submit', (event) => {
    event.preventDefault()
    createWorkspace({
      name: event.target.name.value,
      user: event.target.user.value
    })
  })
}

// ===================== Add Workspace =======================

let storedWorkspaces = []
// ===== list workspaces ===
function listWorkspaces () {
  getWorkspaces()
  .then(workspaces => {
    (unDisplay(workspaces))
   // storedWorkspaces.push(workspaces)
  })
}

let workspaceList = document.createElement('ul')
function unDisplay(workspaces) {
  for (const workspace of workspaces) {
    const workspaceListEl = document.createElement('li')
    // console.log(workspace)
    workspaceListEl.innerText = `${workspace.name}`
    // console.log('reaching workspaceListEl')
    workspaceListEl.id = `${workspace.id}`
    workspaceListEl.style.display = ""
    workspaceList.append(workspaceListEl)
    clickToAddWorkspace (workspaceListEl, workspace) 
  }
  newWorkspaceForm.append(workspaceList)
}

function clickToAddWorkspace (workspaceListEl, workspace) {
  workspaceListEl.addEventListener('click', () => {
    createUserWorkspaces({user_id: currentUser.id, workspace_id: workspace.id})
  })
}
// //SEARCH
// // get input element
// const searchEl = document.querySelector('#filter-input')
// // Add event Listener
// searchEl.addEventListener('keyup', filterGifts)
// //Get value of input
// function filterGifts() {
//   let filterValue = document.querySelector('#filter-input').value.toUpperCase()
//   // get gifts ul
//   let giftsUl = document.querySelector('.gift-list')
//   // get each gift (Li)
//   let giftLi = giftsUl.querySelectorAll('.gift')
//   // loop through items
//   for (let i = 0; i < giftLi.length; i++) {
//   //if matched
//       if (gifts[i].name.toUpperCase().indexOf(filterValue) > - 1) {
//       giftLi[i].style.display = ''
//     } else {
//       giftLi[i].style.display = 'none'
//     }
//   }
// }



// function findExistingWorkspace () {
//   const existingWorkspaceForm = document.createElement('form')
//   existingWorkspaceForm.className = 'form-group'
//   existingWorkspaceForm.innerHTML = `
//   Name your workspace: <input type="text" name="name"><br>
//   <input type="hidden" name="workspace" value="${workspaceFromSelector.id}"><br>
//   <input type="submit" value="Submit">`
//   workspaceEl.prepend(existingWorkspaceForm)
//   existingWorkspaceForm.addEventListener('submit', (event, currentUser) => {
//     event.preventDefault()
//     updateWorkspace({
//       workspace: event.target.name.value,
//       user: event.target.user.value
//     })
//   })
// }