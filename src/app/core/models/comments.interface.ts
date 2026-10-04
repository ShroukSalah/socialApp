export interface CommentsResponse {
  success: boolean
  message: string
  data: Comments
  meta: Meta
}

export interface Comments {
  comments: Comment[]
}

export interface Comment {
  _id: string
  image?: string
  commentCreator: CommentCreator
  post: string
  parentComment: any
  likes: any[]
  createdAt: string
  repliesCount: number
  content?: string
}

export interface CommentCreator {
  _id: string
  name: string
  username: string
  photo: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  currentPage: number
  limit: number
  total: number
  numberOfPages: number
}
