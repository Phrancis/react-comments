import React from 'react'
import Comment from '../containers/Comment'

const CommentListComponent = (props) => (
  <div className="commentList">
    {/* DEMO DATA */}
    <Comment author="SirPython">
      This is one comment.
    </Comment>
    <Comment author="DanPantry">
      This is another comment.
    </Comment>
    <Comment>

    </Comment>
  </div>
)
export default CommentListComponent