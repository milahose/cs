import React, { Component } from 'react';
import './styles.css';

var App = React.createClass({
  getInitialState: function(){
    return {blogs: []}
  },
  add: function(newBlogText){
    var newBlog = this.state.blogs;
    newBlog.push({'desc': newBlogText});
    this.setState({blogs: newBlog});
  },
  delete: function(id){
    var newBlogs = this.state.blogs;
    newBlogs.splice(id, 1);
    this.setState({blogs: newBlogs});
  },
  save: function(newText, id){
    var newBlogs = this.state.blogs;
    newBlogs[id] = {'desc': newText};
    this.setState({blogs: newBlogs});
  },
  render: function() {
    return (
    <div>
      <NoteMenu blogs={this.state.blogs} addBlog={this.add}/>
      <NoteList blogs={this.state.blogs} deleteBlog={this.delete} saveNote={this.save}/>
    </div>
    )
  }
});

var NoteMenu = React.createClass({
  add: function(){
    var newVal = this.refs.newBlogText.value;
    if (newVal) {
      this.props.addBlog(newVal);
      this.refs.newBlogText.value = "";
    }
  },
  handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      this.add();
    }
  },
  render: function() {
    return (
    <div id="note-menu" className="input-group">
      <textarea type="text" className="form-control" placeholder="Add blog here" ref="newBlogText" onKeyPress={this.handleKeyPress}></textarea>
      <span className="input-group-btn">
        <button className="btn btn-default btn-success submit" type="button" onClick={this.add}>Submit Blog Post</button>
      </span>
    </div>

    )
  }
});

var NoteList = React.createClass({
  render: function() {
    return (
    <ul className="list-group">{this.props.blogs.map((blog, i) => <Note key={i} blogId={i} desc={blog.desc} deleteBlog={this.props.deleteBlog} saveNote={this.props.saveNote}/>)}
    </ul>
    )
  }
});

var Note = React.createClass({
  getInitialState: function() {
    return {isEditing: false}
  },
  delete: function(){
    this.props.deleteBlog(this.props.blogId);
  },
  save: function(){
    var newText = this.refs.newText.value;
    this.props.saveNote(newText, this.props.blogId);
    this.toggleEdit();
  },
  toggleEdit: function(){
    this.setState({isEditing: !this.state.isEditing});
  },
  renderForm: function(){
    return (
    <div>
      <li key={this.props.blogId} blogId={this.props.blogId} className="list-group-item list-group-item-info">  
      <span className="blog">{this.props.desc}</span> 
      <br/>
      <div className="btn-group" role="group">
      <button className="btn btn-default btn-primary" onClick={this.toggleEdit}>Edit Post</button>
      <button className="btn btn-default btn-danger" onClick={this.delete}>Delete Post</button>
      </div>
      </li>
    </div>)
  },
  renderEditForm: function() {
    return (
    <div>
      <li key={this.props.blogId} className="list-group-item list-group-item-info">
      <textarea ref="newText" className="note">{this.props.desc}</textarea>
      <br/ >
      <div className="btn-group" role="group">
      <button className="btn btn-default btn-success save" onClick={this.save}>Save</button> 
      <button className="btn btn-default btn-danger" onClick={this.toggleEdit}>Cancel</button>
      </div>
      </li>
    </div>)
  },
  render: function() {
    if (this.state.isEditing === false){
      return this.renderForm();
    } else {
      return this.renderEditForm();
    }
  }
});

export default App;
