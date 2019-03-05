

//function for setting the workspace based on user

let currentWorkspace
function setWorkspace (currentUser) {
  //### SET BASED ON LOGGED-IN USER
  currentWorkspace = currentUser.workspaces[0]
  showAllDocs(currentWorkspace)

}
//function for creating workspace 
const workspaceEl = document.querySelector('#workspace')