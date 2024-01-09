// import React from "react";
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio } from "../../data";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case 1:
        setData(featuredPortfolio);
        break;
      case 2:
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  const list = [
    {
      id: 1,
      title: "Featured",
    },
    {
      id: 2,
      title: "Web App",
    },
    {
      id: 3,
      title: "Mobile App",
    },
    {
      id: 4,
      title: "Design",
    },
    {
      id: 5,
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => {
          return (
            <PortfolioList
              title={item.title}
              id={item.id}
              active={selected === item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => {
          return (
            <div className="item">
              <img src={d.img} alt={d.img} />
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
