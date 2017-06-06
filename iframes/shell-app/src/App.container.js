import { connect } from 'react-redux';
import App from './App';
import { navigateTo } from './redux/actions';

const mapStateToProps = (state) => ({
    view: state.getIn(['view', 'current']),
    query: state.getIn(['view', 'query']) || {},
});

const mapDispatchToProps = (dispatch) => ({
    navigateTo: target => dispatch(navigateTo(target))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
