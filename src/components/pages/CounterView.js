import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/Counter/couner-actions';

class CounterView extends Component {
   state = {
      stepValue: '',
   };
   stepHandler = e => {
      this.setState({ stepValue: e.target.value });
   };
   render() {
      const {
         value,
         step,
         onIncrement,
         onDecremetn,
         stepSaver,
         zeroStep,
      } = this.props;
      return (
         <>
            <h1>Это страница счетчика</h1>
            <button type="button" onClick={() => onIncrement(step)}>
               добавить {step}
            </button>
            <span>{value}</span>
            <button type="button" onClick={() => onDecremetn(step)}>
               убавить {step}
            </button>
            <form
               onSubmit={e => {
                  e.preventDefault();
                  stepSaver(Number(this.state.stepValue));
                  this.setState({ stepValue: '' });
               }}
            >
               <input
                  type="text"
                  value={this.state.stepValue}
                  onChange={this.stepHandler}
               ></input>
               <button type="submit"> запомнить шаг</button>
            </form>
            <button type="button" onClick={() => zeroStep()}>
               {' '}
               выставит базовый шаг
            </button>
         </>
      );
   }
}
const mapStateToProps = state => {
   return {
      value: state.counter.counterValue,
      step: state.counter.step,
   };
};
const mapDispatchToProps = dispatch => {
   return {
      onIncrement: step => dispatch(actions.increment(step)),
      onDecremetn: step => dispatch(actions.decrement(step)),
      stepSaver: newStep => dispatch(actions.saveStep(newStep)),
      zeroStep: () => dispatch(actions.zeroStep()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);
