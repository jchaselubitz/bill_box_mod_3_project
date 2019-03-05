
// ===================== Presentation =======================

function showDoc (doc) {
  const docCard = document.createElement('div')
  console.log(doc.workspace_id)
  const docTitle = doc.name
  const status = doc.paid
  const docDeadline = doc.deadline
  docCard.innerHTML =
  `<h2 class="docTitle">${docTitle}</h2>
  <p class="paid">${status}</p>
  <p class="deadline">Created on: ${docDeadline}</p>
  <button>Edit</button>
  <button>Delete</button>`
  workspaceEl.append(docCard)
  //console.log(doc.id)
  setEditEvent(docCard, doc)
}

function showAllDocs (currentWorkspace) {
  getDocuments()
    .then(resp => {
      for (const doc of resp) {
        if (doc.workspace_id[0] = currentWorkspace) {
          showDoc(doc)
        }
      }
    })
}

// ===================== Creation =======================

// button for showing a form
// form with fields upload, title, status, duedate
// hidden field for workspace


// ===================== Editing =======================

function setEditEvent (docCard, doc) {
  docCard.addEventListener('click', (event) => {
    if (event.target.innerText === 'Edit') {
      createEditForm(docCard, doc)
    }
  })
}

function createEditForm (docCard, doc) {
  const editFormEl = document.createElement('form')
  editFormEl.innerHTML =
  `
  <input type="hidden" name="docId" value="${doc.id}">
  <input type="hidden" name="workspace" value="${doc.workspace_id}">
  <input type="hidden" name="docText" value=""> 
  Document name:
  <input type="text" name="name"><br>
  Paid:
  <input type="checkbox" name="paid" ${doc.paid === true ? "checked" : "unchecked"}><br>
  Deadline:
  <input type="date" name="deadline"><br>
  <input type="submit" value="Submit">`
  editFormEl.addEventListener('submit', (event) => {
    event.preventDefault()
    updateDocument ({
      name: event.target.name.value, 
      paid: event.target.paid.checked,
      deadline: event.target.deadline.value,
      workspace_id: event.target.workspace.value,
      doctext: event.target.docText.value,
      id: event.target.docId.value

    })
  })
  docCard.append(editFormEl)
}

// ===================== Deleting =======================
