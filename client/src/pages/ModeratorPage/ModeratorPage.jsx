import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  getContests,
  clearContestsList,
  setNewCustomerFilter,
} from '../../store/slices/contestsSlice';
import CONSTANTS from '../../constants';
import ContestsContainer from '../../components/ContestsContainer/ContestsContainer';
import ContestBox from '../../components/ContestBox/ContestBox';
import styles from './ModeratorPage.module.scss';
import TryAgain from '../../components/TryAgain/TryAgain';
import { getAllOfers,setOfferStatusModerator } from '../../store/slices/offersSlice';
import OfferBoxTwo from './OfferBoxTwo';

class ModeratorPage extends React.Component {
  loadMore = startFrom => {
    this.props.getOffers({
      limit: 8,
      offset: startFrom,
      // contestStatus: this.props.customerFilter,
    });
  };

  componentDidMount () {
    this.getOffers();
    console.log(this.props.offerStore.haveMore);
  }

  getOffers = () => {
    this.props.getOffers({
      limit: 8,
      contestStatus: this.props.customerFilter,
    });
  };

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.offerStore.offers !== prevProps.offerStore.offers) {
      // this.props.getOffers({limit: 8});
      console.log('update');
    }
  }
  

  // goToExtended = contest_id => {
  //   this.props.navigate(`/contest/${contest_id}`);
  // };

  // setContestList = () => {
  //   const array = [];
  //   const { contests } = this.props;
  //   for (let i = 0; i < contests.length; i++) {
  //     array.push(
  //       <ContestBox
  //         data={contests[i]}
  //         key={contests[i].id}
  //         goToExtended={this.goToExtended}
  //       />
  //     );
  //   }
  //   return array;
  // };

  setVerifiOffersList = () => {
      const array = [];
      const offers = this.props.offerStore.offers
      console.log(offers);
      console.log(array);
      for (let i = 0; i < offers.length; i++) {
        array.push(
          <OfferBoxTwo
            data={offers[i]}
            key={offers[i].id}
            setOfferStatusModerator={this.setOfferStatusModerator}
            date={new Date()}
          />
        );
      }
      return array.length !== 0 ? (
        array
      ) : (
        <div className={styles.notFound}>
          There is no suggestion at this moment
        </div>
      );
    };

   setOfferStatusModerator = (creatorId, offerId, command) => {
      const obj = {
        command,
        offerId,
        creatorId,
      };
      this.props.setOfferStatusModeratorFront(obj)
      .then(()=>{this.forceUpdate()});
    };

  componentWillUnmount () {
    this.props.clearContestsList();
  }

  tryToGetContest = () => {
    this.props.clearContestsList();
    this.getContests();
  };
  

  render () {
    const { error, haveMore,isFetching } = this.props.offerStore;
    console.log(error,haveMore,isFetching);
    const { customerFilter } = this.props;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.contestsContainer}>
          <ContestsContainer
              isFetching={isFetching}
              loadMore={this.loadMore}
              navigate={this.props.navigate}
              haveMore={haveMore}
            >
              {this.setVerifiOffersList()}
            </ContestsContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userStore,offerStore,contestsList } = state;
  return { userStore,offerStore,contestsList };
}

const mapDispatchToProps = dispatch => ({
  getContests: data =>
    dispatch(getContests({ requestData: data, role: CONSTANTS.CUSTOMER })),
  clearContestsList: () => dispatch(clearContestsList()),
  newFilter: filter => dispatch(setNewCustomerFilter(filter)),
  getOffers: (data) => dispatch(getAllOfers(data)),
  setOfferStatusModeratorFront: (data) => dispatch(setOfferStatusModerator(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeratorPage);
