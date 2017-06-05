import { connect } from 'react-redux';
import App from './App';
import { navigateTo } from './redux/actions';

const mapStateToProps = (state) => ({
    view: state.view.current,
});

const mapDispatchToProps = (dispatch) => ({
    navigateTo: target => dispatch(navigateTo(target))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
