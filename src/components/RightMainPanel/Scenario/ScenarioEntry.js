import React from "react";
import s from "./ScenarioEntry.css";
import {Tooltip, OverlayTrigger} from 'react-bootstrap';


//bind redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../../reducers/action';

//import configuration file
import {CorridorInfo} from "../../../config"

class ScenarioEntry extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {


    const tooltipforSwitch = (
      <Tooltip id="tooltipforSwitch"><strong>Turn on or turn off</strong></Tooltip>
    );


    var ScenarioValue = Object.keys(this.props.data).map((corridorKey) => {

        return (

          <div style={{width: 150, position: "relative", marginLeft: 2, height: 20}} key={corridorKey}>
            <div className="square"
                 style={{fontSize: 13, color: "white", backgroundColor: CorridorInfo[corridorKey].color}}>
              {CorridorInfo[corridorKey].name}
            </div>

            <small style={{fontSize: 14,}}>

              {/*<OverlayTrigger placement="bottom">*/}
                <span>{this.props.data[corridorKey].active? "Si": "No"}</span>

              {/*</OverlayTrigger>*/}


            </small>
          </div>
        )
      }
    );


    if (this.props.selectedScenario == this.props.index) {
      return (
        <div className="scenarioEntrySel">
          <div className="" style={{margin: 0, padding: 0}}>


            <div className="subHead scenarioEntrySubHead" style={{color: "white", backgroundColor: "#e9bc69"}}>
              {this.props.index === 0 ? "Escenario Base" : "Nuevo Escenario"  }
            </div>

            {ScenarioValue}

          </div>
        </div>
      );
    }
    else {
      return (
        <div className="scenarioEntry">
          <div className="" style={{margin: 0, padding: 0}}>
            <div className="subHead scenarioEntrySubHead" style={{color: "white", backgroundColor: "#eec16f"}}>
              {this.props.index === 0 ? "Escenario Base" : "Nuevo Escenario"   }
            </div>

            {ScenarioValue}

          </div>
        </div>
      );


    }

  }
}


function mapStateToProps(state) {
  return {
    newScenario: state.scenarioStore,
    headwayTime: state.HeadwayTime,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


// export default connect(mapStateToProps, mapDispachToProps)(ScenarioEntry);
export default ScenarioEntry;


