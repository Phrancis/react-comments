import React from 'react'
import CommentContainer from '../containers/CommentContainer'

const CommentList = (props) => (
  <div className="commentList">
    {/* DEMO DATA */}
    <CommentContainer author="SirPython">
      This is one comment.
    </CommentContainer>
    <CommentContainer author="DanPantry">
      This is another comment.
    </CommentContainer>
    <CommentContainer>

    </CommentContainer>
  </div>
)
export default CommentList