import "./App.css";
import {
    Card,
    Flex,
    Block,
    Text,
    Metric,
    BadgeDelta,
    ProgressBar,
} from "@tremor/react";
import Example from "./component/Example";
import AreaChartExample from "./component/AreaChartExample";
import BarChartExample from "./component/BarChartExample";
import AdvancedChart from "./component/AdvancedChart";
import TableView from "./component/TableView";

function App() {
    return (
        <div className="App">
            <Card maxWidth="max-w-lg">
                <Flex alignItems="items-start">
                    <Block>
                        <Text>Sales</Text>
                        <Metric>$ 20,699</Metric>
                    </Block>
                    <BadgeDelta deltaType="moderateDecrease" text="13.2%" />
                </Flex>
                <Flex marginTop="mt-4">
                    <Text truncate={true}>50% ($ 110,250)</Text>
                    <Text> $ 220,500 </Text>
                </Flex>
                <ProgressBar percentageValue={50} marginTop="mt-2" />
            </Card>

            {/* hjhf */}

            <Example />

            {/* Charts */}
            <AreaChartExample />
            <BarChartExample />
            <AdvancedChart />
            <TableView />
        </div>
    );
}

export default App;
