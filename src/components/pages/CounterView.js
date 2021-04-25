import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const CounterView = ({ value, onIncrement, onDecremetn }) => {
   return (
      <>
         <h1>Это страница счетчика</h1>
         <button type="button" onClick={onIncrement}>
            добавить
         </button>
         <span>{value}</span>
         <button type="button" onClick={onDecremetn}>
            убавить
         </button>
      </>
   );
};
const mapStateToProps = state => {
   return {
      value: state.counterValue,
   };
};
const mapDispatchToProps = dispatch => {
   return {
      onIncrement: () => dispatch(actions.increment(1)),
      onDecremetn: () => dispatch(actions.decrement(1)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);
