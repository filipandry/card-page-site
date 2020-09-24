import React from "react";
import { Card } from "./components";
import { IPage } from "./interfaces/IPage";
import { useAppStyles } from "./AppStyle";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  const classes = useAppStyles();
  const windowSize = useWindowSize();

  const pages: IPage[] = [
    {
      Background: (
        <div
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
      ),
      Content: <div>PAGE 1</div>
    },
    {
      Background: (
        <div
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
      ),
      Content: <div>PAGE 2</div>
    },
    {
      Background: (
        <div
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
      ),
      Content: <div>PAGE 3</div>
    },
    {
      Background: (
        <div
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
      ),
      Content: <div>PAGE 4</div>
    },
    {
      Background: (
        <div
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
      ),
      Content: <div>PAGE 5</div>
    },
    {
      Background: (
        <div
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
      ),
      Content: <div>PAGE 6</div>
    }
  ];

  return (
    <div className={classes.app}>
      <Card Pages={pages} WindowSize={windowSize} />
    </div>
  );
}
