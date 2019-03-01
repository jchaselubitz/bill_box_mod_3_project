#Tables

rails generate scaffold User name:string password:string

## users
  name: 
  password: 

  has_many :user_workspaces
  has_many :workspaces, through :user_workspaces
  
## workspaces
  name: string

  has_many :user_workspaces
  has_many :users, through :user_workspaces

## user_workspaces
  user_id: integer
  workspace_id: integer

  belongs_to: user
  belongs_to: workspace

## documents
  name: string
  workspace_id: integer
  creation_date: datetime
  file: (what is the best way to do this?)
  upload_link: string

  (doc_text: string)

  has_many :doc_tags
  has_many :tags through, :doc_tags

## comments
  content
  user_id
  document_id

  belongs_to :user
  belongs_to :document

## ActiveStorage
  automatic