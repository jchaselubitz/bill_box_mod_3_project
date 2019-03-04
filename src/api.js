const baseURL = `http://localhost:3000/api/v001`
const documentsURL = `${baseURL}/documents`
const usersURL = `${baseURL}/users`
const workspacesURL = `${baseURL}/workspaces`
const commentsURL = `${baseURL}/comments`
const tagsURL = `${baseURL}/tags`


// =====++++============ GET FUNCTION ===============================

function getDocuments() {
  return fetch(documentsURL)
    .then(resp => resp.json)
    .then(resp => console.log(resp))
}



// =====++++============ POST FUNCTION ===============================

function createDocument(document) {
  return createFunc(documentsURL, document, 'document')
}

function createWorkspace(workspace) {
  return createFunc(workspacesURL, workspace, 'workspace')
}

function createTag(tag) {
  return createFunc(tagsURL, tag, 'tag')
}

function createComment(comment) {
  return createFunc(commentsURL, comment, 'comment')
}

function createUser(user) {
return createFunc(usersURL, user, 'user')
}

function createFunc(url, object, key) {
  const options = {
    method: "POST",
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({[key]: object})
    }
  return fetch(url, options)
    .then(resp => resp.json)
    .then(resp => console.log(resp))
}


// =====++++============ PATCH FUNCTION ===============================

function patchDocument(document) {
  return patchFunc(`${documentsURL}/${document.id}`, document, 'document')
}

function patchWorkspace(workspace) {
  return patchFunc(`${workspacesURL}/${workspace.id}`, workspace, 'workspace')
}

function patchTag(tag) {
  return patchFunc(`${tagsURL}/${tag.id}`, tag, 'tag')
}

function patchComment(comment) {
  return patchFunc(`${commentsURL}/${comment.id}`, comment, 'comment')
}

function patchUser(user) {
return patchFunc(`${usersURL}/${user.id}`, user, 'user')
}

function patchFunc(url, object, key) {
  const options = {
    method: "patch",
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({[key]: object})
    }
  return fetch(url, options)
    .then(resp => resp.json)
    .then(resp => console.log(resp))
}

// =====++++============ POST FUNCTION ===============================

function deleteDocument(document) {
  return createFunc(documentsURL, document, 'document')
}

function deleteWorkspace(workspace) {
  return deleteFunc(workspacesURL, workspace, 'workspace')
}

function deleteTag(tag) {
  return deleteFunc(tagsURL, tag, 'tag')
}

function deleteComment(comment) {
  return deleteFunc(commentsURL, comment, 'comment')
}

function deleteUser(user) {
return deleteFunc(usersURL, user, 'user')
}

function deleteFunc(url, object, key) {
  const options = {
    method: "DELETE",
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({[key]: object})
    }
  return fetch(url, options)
    .then(resp => resp.json)
    .then(resp => console.log(resp))
}