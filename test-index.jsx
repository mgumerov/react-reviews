var React = require('react');

var data = [{name: "Name1", rating: 1.5}, {name: "Name2", rating: null}];

var Workspace = React.createClass({
  render: function() {
    return (
<div>

<div className="col-md-6" style={{float: "left"}}>
<ul className="pagination pull-left">
  <li style={{float: "left"}}>Sort by</li>
  {sorters.map(sorter =>
    <li className={`page-item sort-mode ${['','active'][+(this.state.sortBy == sorter.field)]}`}
        key={sorter.field}>
        <a className="page-link" href = "#"
           onClick={() => this.setState((state, props) => ({sortBy: sorter.field}))}>{sorter.title}</a></li>
  )}
</ul>
</div>

<div className="col-md-6" style={{float: "left"}}>
<ul className="pagination pull-left">
  <li style={{float: "left"}}>Rated no less than</li>
  {[0,1,2,3,4,5].map(rating =>
    <li className={`page-item sort-mode ${['','active'][+(this.state.minRating == rating)]}`}
        key={rating}>
        <a className="page-link" href = "#"
           onClick={() => this.setState((state, props) => ({minRating: rating}))}>{rating}</a></li>
  )}
</ul>
</div>

<div className="col-md-12">

{data.map((entry, idx) =>
  <div className="col-md-12" key={idx}
  style={{"border-bottom": "solid", "padding-top": "10px", "padding-bottom": "10px"}}>
    <b>{entry.name}</b><br/>
    Rated: {entry.rating}
  </div>
)}

</div>

</div>
    );
  },

  getInitialState: function() {
    return {
      modalDepartment: null,
      modalEmployee: null,
      sortBy: sorters[0].field,
      minRating: 0
    };
  }
});

var sorters = [];
sorters.push({field: "name", title: "Name"});
sorters.push({field: "rating", title: "Rating"});


function run() {
    var ReactDOM = require('react-dom');
    ReactDOM.render(<Workspace/>, document.getElementById('workspace'));
}

//No idea why so complex, saw this on the Internet :)
const loadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
