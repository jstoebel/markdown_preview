var InputBox = React.createClass({

	handleChange: function(elem){
		//set the value of output
		this.setState({
			msg: elem.target.value
		})
	},

	getInitialState: function(){
		return {msg: ""}
	},

	render: function(){

	    return (<div class="container">
    		<h2>Markdown Editor</h2>
	      	<p>Type your markdown here and see it rendered below.</p>
	      	<form role="form">
		        <div class="form-group">
		          <textarea class="form-control"
		           rows="25"
		           type="text"
		           className="form-controll"
					onChange={this.handleChange}
					defaultValue={this.value}
		            id="comment">
	            	</textarea>
		            <p id="output">{this.state.msg}</p>
		        </div>
	      	</form>
	      </div>);
	}
})




React.render(<InputBox/>, 
    document.getElementById('container'));
