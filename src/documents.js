

// ===================== Presentation =======================

function showDoc (doc) {
  const docCard = document.createElement('div')
  const workspaceID = doc.workspace_id
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
}

function showAllDocs (currentWorkspace) {
  console.log(currentWorkspace)
  getDocuments()
    .then(resp => {
      for (const doc of resp) {
        if (doc.workspace[0] = currentWorkspace) {
          console.log(doc)
          showDoc(doc)
        }
      }
    })
}

// ===================== Creation =======================

//button for showing a form
//form with fields upload, title, status, duedate
//hidden field for workspace 

// ===================== Editing =======================

// ===================== Deleting =======================


