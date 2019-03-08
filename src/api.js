const baseURL = `http://localhost:3000/api/v001`
const documentsURL = `${baseURL}/documents`
const uploadFileURL = `${baseURL}/upload_file`
const usersURL = `${baseURL}/users`
const workspacesURL = `${baseURL}/workspaces`
const commentsURL = `${baseURL}/comments`
const tagsURL = `${baseURL}/tags`
// =====++++============ GET FUNCTION =======================

function getDocuments () {
  return getFunc(documentsURL)
}

function getWorkspaces () {
  console.log('reaching getWorkspaces API')
  return getFunc(workspacesURL)
}

function getTags () {
  return getFunc(tagsURL)
}

function getComments () {
  return getFunc(commentsURL)
}

function getUsers () {
  return getFunc(usersURL)
}

function getFunc (url) {
  return fetch(url)
    .then(resp => resp.json())
}

// =====++++============ POST FUNCTION ===============================

function createDocument (document) {
  return createFunc(documentsURL, document, 'document')
}

function createWorkspace (workspace) {
  return createFunc(workspacesURL, workspace, 'workspace')
}

function createTag (tag) {
  return createFunc(tagsURL, tag, 'tag')
}

function createComment (comment) {
  return createFunc(commentsURL, comment, 'comment')
}

function createUser (user) {
  return createFunc(usersURL, user, 'user')
}

function createFunc (url, object, key) {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ [key]: object })
  }
  return fetch(url, options)
    .then(resp => resp.json())
}

// =====++++============ PATCH FUNCTION ===============================

function updateDocument (document) {
  console.log("update Post", document)
  return patchFunc(`${documentsURL}/${document.id}`, document, 'document')
}

function updateWorkspace (workspace) {
  return patchFunc(`${workspacesURL}/${workspace.id}`, workspace, 'workspace')
}

function updateTag (tag) {
  return patchFunc(`${tagsURL}/${tag.id}`, tag, 'tag')
}

function updateComment (comment) {
  return patchFunc(`${commentsURL}/${comment.id}`, comment, 'comment')
}

function updateUser (user) {
  return patchFunc(`${usersURL}/${user.id}`, user, 'user')
}

function patchFunc (url, object, key) {
  const options = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ [key]: object })
  }
  return fetch(url, options)
    .then(resp => resp.json)
    .then(resp => console.log("responce from patch", resp))
}

// =====++++============ POST FUNCTION ===============================

function deleteDocument (document) {
  return deleteFunc(`${documentsURL}/${document.id}`, document, 'document')
}

function deleteWorkspace (workspace) {
  return deleteFunc(`${workspacesURL}/${workspace.id}`, workspace, 'workspace')
}

function deleteTag (tag) {
  return deleteFunc(`${tagsURL}/${tag.id}`, tag, 'tag')
}

function deleteComment (comment) {
  return deleteFunc(`${commentsURL}/${comment.id}`, comment, 'comment')
}

function deleteUser (user) {
  return deleteFunc(`${usersURL}/${user.id}`, user, 'user')
}

function deleteFunc (url, object, key) {
  const options = {
    method: 'DELETE' }

  return fetch(url, options)
    .then(resp => resp.json)
    .then(resp => console.log(resp))
}
