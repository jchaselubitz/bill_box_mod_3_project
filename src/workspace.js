

//function for setting the workspace based on user

let currentWorkspace
function setWorkspace (currentUser) {
  console.log(currentUser)
  currentWorkspace = currentUser.workspaces[0]
  console.log(currentWorkspace)
  showAllDocs(currentWorkspace)

}

//function for creating workspace 
const workspaceEl = document.querySelector('#workspace')