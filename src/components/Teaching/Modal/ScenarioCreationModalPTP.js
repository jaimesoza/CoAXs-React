/**
 * Created by xinzheng on 4/4/17.
 */

import React from "react";
import {Modal, Button} from 'react-bootstrap';

//import redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../../reducers/action';

class ScenarioCreationModalPTP extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Modal show={this.props.isShow} onHide={this.props.closeModal} keyboard={false} backdrop="static">
          <Modal.Header>
            <Modal.Title>Create your own scenario: User instructions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Hq6En_M9jXU" frameBorder="0"
                    allowFullScreen/>
            <hr/>
            <p>There is no particular goal for creating scenarios, but you might want to explore: what scenario saves
              the most time? How to create your own scenario:</p>
            <ul>
              <li><strong>1 Choose an alternative for each route:</strong> Select each route ( RTA #16 S. Claiborne, JeT
                #E3 Kenner Local, JeT #E5 Causeway), and then, choose which alternative of that route you’d like to
                test. Click on each alternative to see where it goes on the map.
              </li>
              <li><strong>2 Change the time between buses:</strong> For each alternative, move the slider on the right
                hand side. Moving the slider to the right means the bus will come more often. You can also see how many
                buses that will require in the “Scenario Summary”.
              </li>
              <li><strong>3 Compare your scenario:</strong> Once you’ve created the scenario you want to test, then
                click “Update” to see how this compares to today’s service.
              </li>
              <li><strong>4 Explore your scenario:</strong> Just like before, move the red pin around to see how travel
                time changes to different destinations, and you can also move the green pin around to see how your
                scenario would impact different parts of the city.
              </li>
            </ul>
            <p>
              <strong>
                Quick tip :
              </strong>
              in general, placing the pin near an end of one of the transit routes you’re upgrading in the scenario will
              enable you to see the greatest impacts. Though sometimes, benefits may be significant not just for
              communities at the ends of lines; use your intuition and knowledge of the transit network in your city to
              explore where the impacts might be the most significant.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

//bind store and function to props
function mapStateToProps(state) {
  return {}
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(ScenarioCreationModalPTP);




