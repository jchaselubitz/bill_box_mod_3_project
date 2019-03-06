
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
  const docCard = document.createElement('div')
  docCard.innerHTML =
  `<h2 class="title">${doc.name}</h2>
  <p class="paid">${doc.paid}</p>
  <p class="deadline">Deadline: ${doc.deadline}</p>
  <p class="file">${doc.image}</p>
  <button>Delete</button>`
  setEditTitle(docCard, doc)
  setEditStatus(docCard, doc)
  setEditDeadline(docCard, doc)
  setEditFile(docCard, doc)
  workspaceEl.append(docCard)
}

// ===================== Editing =======================

function setEditTitle (docCard, doc) {
  return setEditEvent(docCard, doc, 'title')
}
function setEditStatus (docCard, doc) {
  return setEditEvent(docCard, doc, 'paid')
}
function setEditDeadline (docCard, doc) {
  return setEditEvent(docCard, doc, 'deadline')
}
function setEditFile (docCard, doc) {
  return setEditEvent(docCard, doc, 'file')
}


function setEditEvent (docCard, doc, classname) {
  docCard.addEventListener('click', (event) => {
    if (event.target.className === classname) {
      createEditField(docCard, doc, classname)
    }
  })
}

function createEditField (docCard, doc, classname) {
  let fieldLocation = docCard.querySelector(`.${classname}`)
  const formEl = document.createElement('form')
  if (classname === "title") {
    formEl.innerHTML = `Title: <input type="text" name="title">
    <input type="submit" value="Submit">`
    titleSubmission (formEl, doc)
  } else if (classname === "paid") {
    formEl.innerHTML = `Paid: <input type="checkbox" name="paid" ${doc.paid === true ? 'checked' : 'unchecked'}>
    <input type="submit" value="Submit">`
    paidSubmission (formEl, doc)
  } else if (classname === "deadline") {
    formEl.innerHTML = `Deadline: <input type="date" name="deadline">
    <input type="submit" value="Submit">`
    deadlineSubmission (formEl, doc)
  } else if (classname === "file") {
    formEl.innerHTML = `File: <form method="POST" action="http://localhost:3000/upload_file" enctype="multipart/form-data">
    <input type="file" name="file" />
    <button>SUBMIT</button>
  </form>
  `
    fileSubmission (formEl, doc)
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
      //image: sender === "file" ? event.target.file.files[0] : doc.image,
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
  Paid: <input type="checkbox" name="paid"><br>
  Deadline: <input type="date" name="deadline"><br>
  <input type="submit" value="Submit">`
  FormEl.addEventListener('submit', (event) => {
    event.preventDefault()
    createDocument({
      name: event.target.name.value,
      paid: event.target.paid.checked,
      deadline: event.target.deadline.value,
      workspace_id: event.target.workspace.value,
      doctext: event.target.docText.value

    })
  })
  workspaceEl.append(FormEl)
}

// ===================== Deleting =======================
