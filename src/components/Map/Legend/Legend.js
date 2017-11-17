/**
 * Created by xinzheng on 5/8/17.
 */

import React from "react";
import s from "./Legend.css";
import classNames from "classnames"

//bind redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../../reducers/action';


class Legend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLegend: true,
    };
    this.handleClickExpend = this.handleClickExpend.bind(this)


  }


  handleClickExpend(){
    this.setState(
      {...this.state,
        showLegend: !this.state.showLegend,
      }
    )
  }

  render() {
    const legendPanelClass = classNames({
      "panel-body-close": !this.state.showLegend,
      "panel-body": this.state.showLegend,
    });

    return (
      <div className="topnav">


        <div className="legend">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h6 className="panel-title">
                Leyenda
                <i className="fa fa-expand pull-right" onClick={this.handleClickExpend}/>
              </h6>
            </div>


            <div className={legendPanelClass}>
              <div>
                <svg height="10" width="20">
                  <line x1="0" y1="5" x2="20" y2="5" style={{stroke: "#2eadd3", strokeWidth: 5}}/>
                </svg>
                <small className="panel-word">2018</small>
              </div>


              <div>
                <svg height="10" width="20">
                  <line x1="0" y1="5" x2="20" y2="5" style={{stroke: "#555555", strokeWidth: 5}}/>
                </svg>
                <small className="panel-word">Línea 7</small>
              </div>

              <div>
                <svg height="10" width="20">
                  <line x1="0" y1="5" x2="20" y2="5" style={{stroke: "#8d6aa8", strokeWidth: 5}}/>
                </svg>
                <small className="panel-word">Tranvía Las Condes</small>
              </div>

              <div>
                <svg height="10" width="20">
                  <line x1="0" y1="5" x2="20" y2="5" style={{stroke: "#37bf86", strokeWidth: 5}}/>
                </svg>
                <small className="panel-word">Teleférico Bicentenario</small>
              </div>


              {/*<div>*/}
                {/*<svg height="10" width="20">*/}
                  {/*<circle cx="10" cy="5" r="5" stroke="#37bf86" strokeWidth="1"  fill="#37bf86" />*/}
                {/*</svg>*/}
                {/*<small className="panel-word">Infill stations on green line</small>*/}
              {/*</div>*/}


              {/*<div>*/}
                {/*<svg height="10" width="20">*/}
                  {/*<circle cx="10" cy="5" r="5" stroke="#ed4267" strokeWidth="1"  fill="#ed4267" />*/}
                {/*</svg>*/}
                {/*<small className="panel-word">Infill stations on red line</small>*/}
              {/*</div>*/}

              <div>
                <svg width="20" height="20">
                  <rect width="20" height="20" style={{fill: "#89cff0", strokeWidth: 3, stroke: "#45b3e7"}}/>
                </svg>
                <small className="panel-word">Accesibilidad Base</small>
              </div>

              <div>
                <svg width="20" height="20">
                  <rect width="20" height="20" style={{fill: "#FDB813", strokeWidth: 3, stroke: "#F68B1F"}}/>
                </svg>
                <small className="panel-word">Accesibilidad en Escenario</small>
              </div>

              {/*<div>*/}
                {/*<svg height="10" width="20">*/}
                  {/*<line x1="0" y1="5" x2="20" y2="5" style={{stroke: "#f1d3e9", strokeWidth: 2}}/>*/}
                {/*</svg>*/}
                {/*<small className="panel-word">Transit network</small>*/}
              {/*</div>*/}


            </div>

          </div>
        </div>
      </div>


    );
  }
}


function mapStateToProps(state) {
  return {}
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispachToProps)(Legend);


