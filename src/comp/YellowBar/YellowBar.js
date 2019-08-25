import React from "react";

class YellowBar extends React.Component {
  render() {
    const stats = [
      {
        number: "402",
        text: "ODDANYCH WORKOW",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        number: "21",
        text: "WSPARTYCH ORGANIZACJI",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        number: "37",
        text: "ZORGANIZOWANYCH ZBIOREK",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];

    const YellowStats = stats.map((e, i) => {
      return (
        <div className="stats" key={i}>
          <p className="stats_number">{e.number}</p>
          <p className="stats_text">{e.text}</p>
          <p className="stats_description">{e.description} </p>
        </div>
      );
    });

    return <div id="yellowInfo" className="stats-container">{YellowStats}</div>;
  }
}

export default YellowBar;