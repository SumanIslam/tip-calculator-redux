import { connect } from 'react-redux';
import TipSelect from '../components/TipSelect';
import { updateTip } from '../store/tip-percentage/actions';
import { IStore } from '../store/types';

const mapStateToProps = (state: IStore) => {
	return {
		tipPercentage: state.tipPercentage as number,
	};
};

const mapDispatchToProps = {
	updateTip,
};

export const TipSelectContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TipSelect);
