import React from 'react';
import FeatureList from './featureList.js'

class Features extends React.Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeatureList 
                USCurrencyFormat={this.props.USCurrencyFormat} 
                selectedState={this.props.selectedState} 
                features={this.props.features} 
                updateFeature={this.props.updateFeature}
                />
          </form>
        )
    }
}

export default Features;