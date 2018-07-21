import { connect } from 'react-redux';
import Findings from '../components/Demo/Findings';
import { setFindingsSorting, FindingsSorting } from '../actions';

const getSortedFindings = (findings, findingsSorting) => {
  switch (findingsSorting) {
    case FindingsSorting.SORT_TYPE:
      return [...findings].sort((a, b) => (a.type > b.type ? 1 : -1));
    case FindingsSorting.SORT_CERTAINITY:
      return [...findings].sort((a, b) => (a.certainity > b.certainity ? 1 : -1));
    case FindingsSorting.SORT_TEXT:
      return [...findings].sort((a, b) => (a.text > b.text ? 1 : -1));
    case FindingsSorting.SORT_LINE:
      return [...findings].sort((a, b) => (a.line > b.line ? 1 : -1));
    default:
      throw new Error(`Unknown filter: $(findingsSorting)`);
  }
}

const mapStateToProps = state => ({
  findings: getSortedFindings(state.findings, state.findingsSorting)
});

const mapDispatchToProps = dispatch => ({
  onSortClick: sorting => {
    dispatch(setFindingsSorting(sorting));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Findings);
