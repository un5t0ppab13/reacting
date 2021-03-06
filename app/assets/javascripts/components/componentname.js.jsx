// app/assets/javascripts/components/greeting.js.jsx
var ComponentName = React.createClass({
  render: function () {
    // properties
    return (
      <div className="container dingo"> 

        <div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <div class="caption">
                <h1>You are truly {this.props.name}!</h1>
              </div>

              <ul>
                <li>Here is another property: {this.props.bla}</li>
                <li>"undefined" index.html.erb properies will simply not render like this: {this.props.notReal}</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
	 );
  }
});

// how to view this:
  // < % = react_component('ComponentName', { name: 'un5t0ppab13', bla: 'bla bla bla' }) % >
  