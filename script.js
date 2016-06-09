var Preview = React.createClass({

	handleChange: function(elem){
		//set the value of output
		// var marked = require("marked");
		var parsed = marked(elem.target.value);
		// this.setState({
		// 	msg: parsed
		// })
		$("#output").html(parsed);
	},

	getInitialState: function(){
		return {msg: ""}
	},

	render: function(){

	    return (
			<div className="row">
				<div className="col-md-6">
			      	<form role="form">
				        <div className="form-group">
				          <textarea className="form-control"
				           rows="15"
				           type="text"
				           className="form-controll"
							onChange={this.handleChange}
							defaultValue={this.value}
				            id="comment">
			            	</textarea>
				        </div>
			      	</form>
				</div>				
				
				<div className="col-md-6">
					<p id="output">{this.state.msg}</p>
				</div>				
			</div>
      	);
	}
})




React.render(<Preview/>, 
    document.getElementById('container'));
