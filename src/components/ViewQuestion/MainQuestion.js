import { Bookmark } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function MainQuestion() {
  return (
    <div className='main'>
       <div className='main-container'>
          <div className='main-top'>
            <h2 className='main-question'>This is a question title</h2>
              <Link to='/add-question'>
                <button>Ask Question</button>
              </Link>        
          </div>
          <div className='main-desc'>
            <div className='info'>
              <p>Timestamp</p>
              <p>Active<span>today</span></p>
              <p>Viewed<span>43 times</span></p>
            </div>
          </div>
          <div className='all-questions'>
            <div className='all-questions-container'>
                <div className='all-questions-left'>
                  <div className='all-options'>
                    <p className='arrow'>▲</p>
                    <p className='arrow'>0</p>
                    <p className='arrow'>▼</p>
                    <Bookmark />
                    <History />
                  </div>
              </div>

            </div>
            <div className='question-answer'>
              <p>This is question body</p>
                <div className='author'>
                  <small>asked "Timestamp"</small>
                  <div className='auth-details'>
                      <Avatar />
                      <p>Author name</p>
                  </div>
                </div>
                <div className='comments'>
                  <div className='comment'>
                    <p>This is comment - <span>User name</span>
                    <small>Timestamp</small></p>

                  </div>
                  <p onClick={() => setshow(!show)}>Add a comment</p>
                  {
                    show && (<div className='title'>
                      <textarea type="text" 
                        placeholder='Add your comment'
                        rows={5}
                      style={{ }}>           
                      </textarea>
                        <button>Add comment</button>
                    </div>)
                  }
                </div>
        </div>


      </div>
    </div>
       

  </div>
  )
}

export default MainQuestion