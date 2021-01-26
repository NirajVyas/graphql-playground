import React, { useState } from 'react';

export const JobForm = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1 className="title">New Job</h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" name="title" value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="input" style={{height: '10em'}}
                name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" onClick={handleClick}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}