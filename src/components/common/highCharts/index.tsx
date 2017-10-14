import * as React from "react";
import * as Highcharts from "highcharts";
// import HighChartsConstants from "../../../constants/hightChartConstant";

class HighChartsComponent extends React.Component<IHighChartsProps, {}> {
    private colors: String[];
    private chart: any;
    constructor(props: { modules: any }) {
        super();
        this.colors = ["#47c0ed", "#c89ef3", "#36d6cf"];
    }
    render() {
        return React.createElement("div", { id: this.props.container });
    }
    public componentDidMount() {
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        // Set container which the chart should render to.
        this.chart = new Highcharts["Chart"](
            this.props.container,
            this.props.chartsOptions
        );
    }
    public componentWillReceiveProps() {
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        // Set container which the chart should render to.
        this.chart = new Highcharts["Chart"](
            this.props.container,
            this.props.chartsOptions
        );
    }
    //Destroy chart before unmount.
    componentWillUnmount() {
        this.chart.destroy();
    }
}

export default HighChartsComponent;