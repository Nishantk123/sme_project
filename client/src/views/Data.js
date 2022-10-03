import React from "react";
import Maincontent from "./Maincontent";

const Data = () => {
  const List = [
    {
      title: "Demographic Survey for Urban India",
      publisheddate : "Published on 17-8-2022",
      location: "Mumbai, Maharastra...",
      date : "29-10-2022 - 28-11-2022",
      sample: "Randaom sample",
      logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
    },
    {
        title: "Demographic Survey for Urban India",
        publisheddate : "Published on 17-8-2022",
        location: "Mumbai, Maharastra...",
        date : "29-10-2022 - 28-11-2022",
        sample: "Randaom sample",
        logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
      },
      {
        title: "Demographic Survey for Urban India",
        publisheddate : "Published on 17-8-2022",
        location: "Mumbai, Maharastra...",
        date : "29-10-2022 - 28-11-2022",
        sample: "Randaom sample",
        logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
      },
      {
        title: "Demographic Survey for Urban India",
        publisheddate : "Published on 17-8-2022",
        location: "Mumbai, Maharastra...",
        date : "29-10-2022 - 28-11-2022",
        sample: "Randaom sample",
        logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
      },
      {
        title: "Demographic Survey for Urban India",
        publisheddate : "Published on 17-8-2022",
        location: "Mumbai, Maharastra...",
        date : "29-10-2022 - 28-11-2022",
        sample: "Randaom sample",
        logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
      },
      {
        title: "Demographic Survey for Urban India",
        publisheddate : "Published on 17-8-2022",
        location: "Mumbai, Maharastra...",
        date : "29-10-2022 - 28-11-2022",
        sample: "Randaom sample",
        logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
      },
      {
        title: "Demographic Survey for Urban India",
        publisheddate : "Published on 17-8-2022",
        location: "Mumbai, Maharastra...",
        date : "29-10-2022 - 28-11-2022",
        sample: "Randaom sample",
        logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
      },
      {
        title: "Tejesh",
        publisheddate : "None",
        location: "Banglore, Karnataka",
        date : "29-10-2022 - 28-11-2022",
        sample: "Test sample",
        logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
      },
      {
        title: "Raghav",
        publisheddate : "None",
        location: "Banglore, Karnataka",
        date : "29-10-2022 - 28-11-2022",
        sample: "Test sample",
        logo: "https://cdn-icons-png.flaticon.com/512/8088/8088864.png",
      },
  ];

  return (
    <div className="card-body">
      <div className="row">
        {List.map((data, index) => {
          return <Maincontent data={data} />;
        })}
      </div>
    </div>
  );
};

export default Data;