
// ===================== Presentation =======================
function showAllDocs (currentWorkspace) {

  getDocuments()
    .then(resp => {
      for (const doc of resp) {
        if (doc.workspace_id === currentWorkspace.id) {
          showDoc(doc)
        }
      }
    })
}

function showDoc (doc) {
  console.log(doc)
  //const docCard = document.createElement('div')
  const docCard = document.createElement('div')
  docCard.className = "card bg-white border border-secondary "
  docCard.innerHTML =
  `<img src="https://timedotcom.files.wordpress.com/2017/03/medical-bills.jpg?quality=85" class="card-img-top" alt="img not avalible">
    <div class="card-body">
      <h5 class="card-title">${doc.name}</h5>
      <p class="card-text file">${doc.link}</p>
      <p class="card-text paid">${doc.paid}</p>
      <p class="card-text deadline">${doc.deadline}</p>
      <button class="btn btn-primary">Delete</button>
    </div>`
  setEditTitle(docCard, doc)
  setEditStatus(docCard, doc)
  setEditDeadline(docCard, doc)
  setEditFile(docCard, doc)
  setDeleteFile(docCard, doc)
  cardDeck.append(docCard)
}

// ===================== Editing =======================

function setEditTitle (docCard, doc) {
  return setEditEvent(docCard, doc, 'card-title')
}
function setEditStatus (docCard, doc) {
  return setEditEvent(docCard, doc, 'card-text paid')
}
function setEditDeadline (docCard, doc) {
  return setEditEvent(docCard, doc, 'card-text deadline')
}
function setEditFile (docCard, doc) {
  return setEditEvent(docCard, doc, 'card-text file')
}

function setEditEvent (docCard, doc, classname) {
  docCard.addEventListener('click', (event) => {
    if (event.target.className === classname) {
      createEditField(docCard, doc, classname)
    }
  })
}

function createEditField (docCard, doc, classname) {
  console.log(classname)
  let fieldLocation = docCard.querySelector(`.${classname.split(' ').join('.')}`)
  const formEl = document.createElement('form')
  if (classname === "card-title") {
    formEl.innerHTML = `Title: <input type="text" name="title">
    <input type="submit" value="Submit">`
    titleSubmission (formEl, doc)
  } else if (classname === "card-text paid") {
    formEl.innerHTML = `Paid: <input type="checkbox" name="paid" ${doc.paid === true ? 'checked' : 'unchecked'}>
    <input type="submit" value="Submit">`
    paidSubmission (formEl, doc)
  } else if (classname === "card-text deadline") {
    formEl.innerHTML = `Deadline: <input type="date" name="deadline">
    <input type="submit" value="Submit">`
    deadlineSubmission (formEl, doc)
  } else if (classname === "card-text file") {
    formEl.innerHTML = `Link to document: <input type="text" name="file">
    <input type="submit" value="Submit">`
    fileSubmission(formEl, doc)
  }
  fieldLocation.append(formEl)
}

function titleSubmission (formEl, doc) {
  return submitEdit(formEl, doc, "title")
}

function paidSubmission (formEl, doc) {
  return submitEdit(formEl, doc, "paid")
}

function deadlineSubmission (formEl, doc) {
  return submitEdit(formEl, doc, "deadline")
}

function fileSubmission (formEl, doc) {
  return submitEdit(formEl, doc, "file")
}


function submitEdit(formEl, doc, sender) {
  formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    updateDocument({
      name: sender === "title" ? event.target.title.value : doc.name,
      paid: sender === "paid" ? event.target.paid.checked : doc.paid,
      deadline: sender === "deadline" ? event.target.deadline.value : doc.deadline,
      file: sender === "file" ? event.target.file.value : doc.link,
      workspace_id: doc.workspace_id,
      doctext: doc.doctext,
      id: doc.id
    })
  })
}

// function submitEditFile(formEl, doc, sender) {

// }

// ===================== Creation =======================

function setCreateEvent () {
  const newDocButton = document.createElement('button')
  newDocButton.innerText = 'Add document'
  newDocButton.addEventListener('click', () => {
    createNewDocForm()
  })
  workspaceEl.append(newDocButton)
}


function createNewDocForm () {
  const FormEl = document.createElement('form')
  FormEl.innerHTML = `
  <input type="hidden" name="workspace" value="${currentWorkspace.id}">
  <input type="hidden" name="docText" value=""> 
  Document name: <input type="text" name="name"><br>
  Document link: <input type="text" name="file"><br>
  Paid: <input type="checkbox" name="paid"><br>
  Deadline: <input type="date" name="deadline"><br>
  <input type="submit" value="Submit">`
  FormEl.addEventListener('submit', (event) => {
    event.preventDefault()
    createDocument({
      name: event.target.name.value,
      file: event.target.file.value,
      paid: event.target.paid.checked,
      deadline: event.target.deadline.value,
      workspace_id: event.target.workspace.value,
      doctext: event.target.docText.value

    })
  })
  workspaceEl.append(FormEl)
}

// ===================== Deleting =======================

function setDeleteFile(docCard, doc) {
  docCard.addEventListener('click', (event) => {
    if (event.target.innerText === 'Delete') {
      deleteDocument(doc)
    }
  })
}




// File: <form method="POST" action="http://localhost:3000/upload_file" enctype="multipart/form-data">
//     <input type="file" name="file" />
//     <button>SUBMIT</button>
//   </form>