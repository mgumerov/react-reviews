var React = require('react');
var Modal = require('react-bootstrap').Modal;

//Концепция такая: <Workspace> - для отображения всей модели данных приложения,
// а отдельные грани (разные таблицы) проецируются в this.state.
//Поэтому мы не имеем несколько data с полиморфной startGetPage,
//  а в одном data имеем startGetXXX.
//var data = require('./test-data');

sss
var Workspace = React.createClass({
  render: function() {
    return (
<div>

<div className="col-md-12">
<ul className="pagination pull-left">
  {sorters.map(sorter =>
    <li className={`page-item sort-mode ${['','active'][+(this.state.sorter.field == sorter.field)]}`}
        key={sorter.field}>
        <a className="page-link" href = "#"
           onClick={() => this.setState((state, props) => ({sorter: field}))}>{sorter.title}</a></li>
  )}
</ul>
</div>

<div className={`col-md-12 visible:${table == this.state.table}`} key={table.id}>

/*
<div className="col-md-12">
<TableView items={this.props.items} columns={this.props.table.columns}
             onRowClick={this.props.onRowClick}/>
</div>
*/

</div>

</div>
    );
  },

  getInitialState: function() {
    return {
      modalDepartment: null,
      modalEmployee: null,
      sorter: sorters[0]
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
