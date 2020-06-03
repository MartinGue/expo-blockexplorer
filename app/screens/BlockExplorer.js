import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Web3 from "web3";
import moment from "moment";
import colors from "../config/colors";

export default class BlockExplorer extends Component {
  async componentWillMount() {
    //load web3
    let web3 = new Web3(
      "https://mainnet.infura.io/v3/603fe463004742a2b543665a2c391ab5"
    );

    //fetch the latest block
    let latestBlock = await web3.eth.getBlock("latest");
    console.log("latest block", latestBlock);
    this.setState({
      blockNumber: latestBlock.number,
      difficulty: latestBlock.difficulty,
    });
    //fetch the gasprice
    let gasPrice = await web3.eth.getGasPrice();
    console.log("gasprice", gasPrice);
    this.setState({
      gasPrice: gasPrice,
    });
    //fetch the latest 10 blocks
    let block;
    let latestBlocks = [];
    for (let i = 0; i < 10; i++) {
      block = await web3.eth.getBlock(latestBlock.number - i);
      console.log(block);
      latestBlocks.push(block);
    }

    this.setState({
      latestBlocks: latestBlocks,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      blockNumber: 0,
      difficulty: 0,
      gasPrice: 0,
      latestBlocks: [],
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Current blockNumber is {this.state.blockNumber}
        </Text>
        <View>{this.state.blockNumber}</View>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hash</th>
              <th scope="col">Miner</th>
              <th scope="col">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {this.state.latestBlocks.map((block, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{block.number}</th>
                  <td>{block.hash.substring(0, 20)}..</td>
                  <td>{block.miner.substring(0, 20)}..</td>
                  <td>{moment.unix(block.timestamp).format("LLLL")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    alignItems: "center",
  },
});
